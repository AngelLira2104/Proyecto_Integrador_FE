const registerButton = document.getElementById("registerButton");
let users = JSON.parse(localStorage.getItem("users")) || [];
registerButton.addEventListener("click", function (event) {
    event.preventDefault();
    
    const userName = document.getElementById("userName");
    const userApellidoP = document.getElementById("userApellido1");
    const userApellidoM = document.getElementById("userApellido2");
    const userCorreo = document.getElementById("userCorreo");
    const userTelefono = document.getElementById("userTelefono");
    const userPass = document.getElementById("userPass");
        let isValid = true;
        // Validar que todos los campos estén completos
        if (isValid) {
            let newUser = {
                Nombre: userName.value,
                ApellidoPaterno: userApellidoP.value,
                ApellidoMaterno: userApellidoM.value,
                Correo: userCorreo.value,
                Telefono: userTelefono,
                Contraseña: userPass.value
            };

            
            users.push(newUser);
            // Guardar el arreglo actualizado en localStorage
            localStorage.setItem("users", JSON.stringify(users));

            console.log("Nuevo usuario registrado:", newUser);
            console.log("Usuarios actuales en localStorage:", users);
        } 
    });
