const btnRegistrar = document.getElementById("submitForm");
const userName = document.getElementById("inputName");
const userApellidoP = document.getElementById("inputFirstSurName");
const userApellidoM = document.getElementById("inputSecondSurName");
const userCorreo = document.getElementById("inputEmail");
const userTelefono = document.getElementById("inputPhone");
const userPass = document.getElementById("userPass");
const userPass2 = document.getElementById("userPassconfirm");

let users = JSON.parse(localStorage.getItem("users")) || [];

btnRegistrar.addEventListener("click", function (event) {
    //Aqui empieza el registro de usuarios
    let isValid = true;
        // Validar que todos los campos estén completos
        if (isValid) {
            let newUser = {
                Nombre: userName.value,
                ApellidoPaterno: userApellidoP.value,
                ApellidoMaterno: userApellidoM.value,
                Correo: userCorreo.value,
                Telefono: userTelefono.value,
                Contraseña: userPass.value,
            };

            
            users.push(newUser);
            // Guardar el arreglo actualizado en localStorage
            localStorage.setItem("users", JSON.stringify(users));

            swal.fire({
                title:"Usuario Registrado",
               icon: 'success',
                width: '40%',
                background: '#D9A796',
                showConfirmButton: true,
                confirmButtonColor:' #05888d',
                time:2000
                
            }) 
            userName.value="";
            userApellidoP.value="";
            userApellidoM.value="";
            userCorreo.value="";
            userTelefono.value="";
            userPass2.value="";
            userPass.value="";
            
            setTimeout(function(){ 
              window.location.href = urlInicioSesion.pathname; 
              }, 3 * 1000);
        }
});        