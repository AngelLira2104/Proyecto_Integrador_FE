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
            document.getElementById("userName").value = "";
            document.getElementById("userApellido1").value = "";
            document.getElementById("userApellido2").value = "";
            document.getElementById("userCorreo").value = "";
            document.getElementById("userTelefono".value = "");
            document.getElementById("userPass").value = "";
            console.log("Nuevo usuario registrado:", newUser);
            console.log("Usuarios actuales en localStorage:", users);
            window.localStorage.href = 'http://127.0.0.1:5500/HTML/productos.html'
        } 
        
    });

