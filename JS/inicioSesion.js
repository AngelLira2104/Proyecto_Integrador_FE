const btnInicioSesion = document.getElementById("btnInicioSesion");
const nombreUsuario = document.getElementById("user"); 
const pwdUsuario = document.getElementById("Contraseña");
const alertUserWarning = document.getElementById("WrongUserInfo");

btnInicioSesion.addEventListener("click", async function (event) {
    event.preventDefault();
    let bandera = false;
    //Here starts the search of a user by email
    if (nombreUsuario.value.length > 0){
        const myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        const raw = JSON.stringify({
            "correo": nombreUsuario.value,
            "password": pwdUsuario.value
        });

        const requestOptions = {
        method: "POST",
        headers: myHeaders,
        body: raw,
        redirect: "follow"
        };

        let resultado = await fetch("/api/login/", requestOptions)
            .then((response) => response.json())
            .then((result) => {return result})
            .catch((error) => console.error(error));
        
        if ("accessToken" in resultado){
            sessionStorage.setItem("Token",resultado["accessToken"]);
            window.location.href = urlIndex.pathname;
        } else {
            alertUserWarning.style.display = "block";
            alertUserWarning.innerHTML = "<b>Error:</b> Usuario y/o Contraseña inválidos.";
        }
    } else {
        alertUserWarning.innerHTML = "<b>Error:</b> Ingrese un usuario y contraseña";
        alertUserWarning.style.display = "block";
    }
});