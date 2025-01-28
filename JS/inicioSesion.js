const btnInicioSesion = document.getElementById("btnInicioSesion");
const nombreUsuario = document.getElementById("user"); 
const pwdUsuario = document.getElementById("Contraseña");
const alertUserWarning = document.getElementById("WrongUserInfo");

btnInicioSesion.addEventListener("click", function (event) {
    event.preventDefault();
    let bandera = false;
    //Here starts the search of a user by email
    if (nombreUsuario.value.length > 0){
        if(localStorage.getItem("users") != null){
            //Space to hide the alerts
            alertUserWarning.style.display = "none";
            alertUserWarning.innerHTML = "";
            //This will change a bit in the future with the add of a BD
            usuarios = JSON.parse(localStorage.getItem("users"));
            for (let i = 0; i < usuarios.length; i++){
                if(usuarios[i]["Correo"] === nombreUsuario.value && usuarios[i]["Contraseña"] === pwdUsuario.value){
                    bandera = true;
                    sessionStorage.setItem("LoeggedUser", usuarios[i]["Nombre"]);
                    break;
                }
            }
            if (!bandera){
                alertUserWarning.style.display = "block";
                alertUserWarning.innerHTML = "<b>Error:</b> Usuario y/o Contraseña inválidos.";
            } else {
                window.location.href = urlIndex.pathname;
            }
        } else {
            alertUserWarning.innerHTML = "<b>Error:</b> Usuario y/o Contraseña inválidos.";
            alertUserWarning.style.display = "block";
        }
    } else {
        alertUserWarning.innerHTML = "<b>Error:</b> Ingrese un usuario y contraseña";
        alertUserWarning.style.display = "block";
    }
});