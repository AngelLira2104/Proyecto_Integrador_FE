//Se crea la clase validarContacto que va a contener los campos del formulario
class validarContacto {
    nombre = "";
    primerApellido = "";
    segundoApellido = "";
    correo = "";
    telefono = "";
    constructor(nombre,primerApellido,segundoApellido,correo,telefono) {
        this.nombre = nombre;
        this.primerApellido = primerApellido;
        this.segundoApellido = segundoApellido;
        this.correo = correo;
        this.telefono = telefono;
    }
    //Se crean las validaciones mediante RegEx para los campos    
    setName(nombre) {
        const regex = /^[a-zA-ZáéíóúÁÉÍÓÚüÜñÑ\s-]{2,15}$/u;
        if (regex.test(nombre)){
            this.nombre = nombre;
            return true;
        } else {
            this.nombre = ""; 
            return false;
        }
    }
    setFirstSurname(primerApellido) {
        const regex = /^[a-zA-ZáéíóúÁÉÍÓÚüÜñÑ\s-]{2,15}$/u;
        if (regex.test(primerApellido)){
            this.primerApellido = primerApellido; 
            return true; 
        } else {
            this.primerApellido = "";  
            return false; // 
        }
    }
    setSecondSurname(segundoApellido) {
        const regex = /^[a-zA-ZáéíóúÁÉÍÓÚüÜñÑ\s-]{2,15}$/u;
        if (regex.test(segundoApellido)){
            this.segundoApellido = segundoApellido; 
            return true; 
        } else {
            this.segundoApellido = "";  
            return false; // 
        }
    }
    setCorreo(correo) {
        const regex = /[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/; 
        if (regex.test(correo)){
            this.correo = correo; 
            return true; 
        } else {
            this.correo = "";  
            return false; // 
        }
    }
    setTelefono(telefono) {
        const regex = /^[0-9]{1,10}$/; 
        if (regex.test(telefono) && telefono !== "0000000000"){
            this.telefono = telefono; 
            return true; 
        } else {
            this.telefono = "";  
            return false; // 
        }
    }
}
//Se crea una 'oreja' mediante la cual se espera a que el DOM esté cargado
document.addEventListener("DOMContentLoaded", () => {
    
    //Se guardan los ID de los input en constantes
    const inputName = document.getElementById("inputName");
    const inputFirstSurName = document.getElementById("inputFirstSurName");
    const inputSecondSurName = document.getElementById("inputSecondSurName");
    const inputEmail = document.getElementById("inputEmail");
    const inputPhone = document.getElementById("inputPhone");

    //Se crean los párrafos que mostrarán los mensajes de error en tiempo real para cada elemento de la clase
    const nombreError = document.createElement("p");
    const primerApellidoError = document.createElement("p");
    const segundoApellidoError = document.createElement("p");
    const emailError = document.createElement("p");
    const telefonoError = document.createElement("p");

    //Se añaden los mensajes de error al DOM
    inputName.parentElement.appendChild(nombreError); 
    inputFirstSurName.parentElement.appendChild(primerApellidoError); 
    inputSecondSurName.parentElement.appendChild(segundoApellidoError);
    inputEmail.parentElement.appendChild(emailError);
    inputPhone.parentElement.appendChild(telefonoError);

    //Se crea otra 'oreja' para el evento "input" que valida las entradas en tiempo real
    inputName.addEventListener("input", () => {
        const contacto = new validarContacto(); //Se crea una instancia de la clase validarContacto
        const esValido = contacto.setName(inputName.value.trim()); //Se valida el valor de las entrada para nombre

        //Se muestra el resultado de la validación en tiempo real
        if (esValido) {
            nombreError.textContent = "El nombre de usuario es válido"; 
            inputName.style.borderColor = "green"; 
            inputName.style.border = "solid green medium";  
            nombreError.style.color = "green"; 
        } else {
            nombreError.textContent = "El nombre debe contener mínimo dos letras"; 
            inputName.style.borderColor = "red"; 
            inputName.style.border = "solid red medium";
            nombreError.style.color = "red"; 
        }
    });

    inputFirstSurName.addEventListener("input", () => {
        const contacto = new validarContacto(); 
        const esValido = contacto.setFirstSurname(inputFirstSurName.value.trim()); 

        
        if (esValido) {
            primerApellidoError.textContent = "El primer apellido de usuario es válido"; 
            inputFirstSurName.style.borderColor = "green"; 
            inputFirstSurName.style.border = "solid green medium";  
            primerApellidoError.style.color = "green";
        } else {
            primerApellidoError.textContent = "El primer apellido debe contener mínimo dos letras"; 
            inputFirstSurName.style.borderColor = "red"; 
            inputFirstSurName.style.border = "solid red medium";
            primerApellidoError.style.color = "red"; 
        }
    });

    inputSecondSurName.addEventListener("input", () => {
        const contacto = new validarContacto(); 
        const esValido = contacto.setSecondSurname(inputSecondSurName.value.trim()); 
    
            
            if (esValido) {
                segundoApellidoError.textContent = "El segundo apellido de usuario es válido"; 
                inputSecondSurName.style.borderColor = "green"; 
                inputSecondSurName.style.border = "solid green medium";  
                segundoApellidoError.style.color = "green"; 
            } else {
                segundoApellidoError.textContent = "El primer apellido debe contener mínimo dos letras";
                inputSecondSurName.style.borderColor = "red"; 
                inputSecondSurName.style.border = "solid red medium";
                segundoApellidoError.style.color = "red"; 
            }
        });

    inputEmail.addEventListener("input", () => {
        const contacto = new validarContacto(); 
        const esValido = contacto.setCorreo(inputEmail.value.trim()); 

        
        if (esValido) {
            emailError.textContent = "El correo es válido"; 
            inputEmail.style.borderColor = "green"; 
            inputEmail.style.border = "solid green medium";  
            emailError.style.color = "green"; 
        } else {
            emailError.textContent = "El correo debe incluir '@' y un dominio"; 
            inputEmail.style.borderColor = "red"; 
            inputEmail.style.border = "solid red medium";
            emailError.style.color = "red"; 
        }    

    });

    inputPhone.addEventListener("input", () => {
        const contacto = new validarContacto(); 
        const esValido = contacto.setTelefono(inputPhone.value.trim()); 

        
        if (esValido) {
            telefonoError.textContent = "El teléfono es válido"; 
            inputPhone.style.borderColor = "green"; 
            inputPhone.style.border = "solid green medium";  
            telefonoError.style.color = "green"; 
        } else {
            telefonoError.textContent = "El teléfono no debe incluir espacios ni guiones, solo números (10 dígitos)"; 
            inputPhone.style.borderColor = "red"; 
            inputPhone.style.border = "solid red medium";
            telefonoError.style.color = "red"; 
        }  
    });


//--------Implementación de alerta cuando el formulario fue enviado--------//

    const formulario = document.getElementById("form");
    const alertaExito = document.getElementById("alerta-exito");    

    formulario.addEventListener("submit", (e) => {
        e.preventDefault();        
        alertaExito.classList.remove("d-none");
        
        const inputs = formulario.querySelectorAll("input, textarea");
        //Se crea este forEach() para poder eliminar el contenido de texto de cada <input>, <textarea> 
        inputs.forEach((input) => {
            input.style.border = "";
            input.style.borderColor = "";
        });
        //Se crea este forEach() para poder eliminar el contenido de texto de cada <p>
        const mensajesError = formulario.querySelectorAll("p");
        mensajesError.forEach((mensaje) => {
            mensaje.textContent = "";
        });
        //Con este setTimeout() establecemos que la alerta será visible para el usuario durante 5 segundos
        setTimeout(() => {
            alertaExito.classList.add("d-none");
        }, 5000);
        //Limpiamos el formulario        
        formulario.reset();
    });
});

