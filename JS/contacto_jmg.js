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

    // Validación del nombre
    setName(nombre) {
        const regex = /^[a-zA-ZáéíóúÁÉÍÓÚüÜñÑ]{2,15}$/u;  // Solo se aceptan letras minúsculas y mayúsculas, y también se aceptan nombres entre 2 y 15 caracteres        
        if (regex.test(nombre)){
            this.nombre = nombre; // El nombre ingresado se almacena en 'nombre'
            return true; // Indica que el nombre es válido
        } else {
            this.nombre = "";  // Se limpia el valor del nombre para que no se almacene en 'nombre'
            return false; // Indica que el nombre no es válido
        }
    }

    setFirstSurname(primerApellido) {
        const regex = /^[a-zA-ZáéíóúÁÉÍÓÚüÜñÑ]{2,15}$/u; 
        if (regex.test(primerApellido)){
            this.primerApellido = primerApellido; 
            return true; 
        } else {
            this.primerApellido = "";  
            return false; // 
        }
    }

    setSecondSurname(segundoApellido) {
        const regex = /^[a-zA-ZáéíóúÁÉÍÓÚüÜñÑ]{2,15}$/u; 
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
        if (regex.test(telefono)){
            this.telefono = telefono; 
            return true; 
        } else {
            this.telefono = "";  
            return false; // 
        }
    }
}

document.addEventListener("DOMContentLoaded", () => { // Esperamos a que el DOM esté cargado
    
    //Leer las entradas
    const inputName = document.getElementById("inputName");
    const inputFirstSurName = document.getElementById("inputFirstSurName");
    const inputSecondSurName = document.getElementById("inputSecondSurName");
    const inputEmail = document.getElementById("inputEmail");
    const inputPhone = document.getElementById("inputPhone");

    //Errores para cada elemento de la clase
    const nombreError = document.createElement("p");
    const primerApellidoError = document.createElement("p");
    const segundoApellidoError = document.createElement("p");
    const emailError = document.createElement("p");
    const telefonoError = document.createElement("p");

    //Añadir los mensajes de error al DOM
    inputName.parentElement.appendChild(nombreError); 
    inputFirstSurName.parentElement.appendChild(primerApellidoError); 
    inputSecondSurName.parentElement.appendChild(segundoApellidoError);
    inputEmail.parentElement.appendChild(emailError);
    inputPhone.parentElement.appendChild(telefonoError);

    // Escuchar el evento "input" para validar el nombre en tiempo real
    inputName.addEventListener("input", () => {
        const contacto = new validarContacto(); // Crear una instancia de la clase ValidarContacto
        const esValido = contacto.setName(inputName.value.trim()); // Validar el valor del input

        // Mostrar el resultado de la validación
        if (esValido) {
            nombreError.textContent = "El nombre de usuario es válido"; // Limpiar mensaje de error si el nombre es válido
            inputName.style.borderColor = "green"; // Cambiar el borde a verde para un nombre válido
            inputName.style.border = "solid green medium";  
            nombreError.style.color = "green"; // El mensaje de error se muestra en rojo para que sea visible al usuario
        } else {
            nombreError.textContent = "El nombre debe contener solo letras (2-15 caracteres)."; // Mensaje de error
            inputName.style.borderColor = "red"; // Cambiar el borde a rojo para un nombre no válido
            inputName.style.border = "solid red medium";
            nombreError.style.color = "red"; // El mensaje de error se muestra en rojo para que sea visible al usuario
        }
    });

    inputFirstSurName.addEventListener("input", () => {
        const contacto = new validarContacto(); // Crear una instancia de la clase ValidarContacto
        const esValido = contacto.setName(inputFirstSurName.value.trim()); // Validar el valor del input

        // Mostrar el resultado de la validación
        if (esValido) {
            primerApellidoError.textContent = "El primer apellido de usuario es válido"; // Limpiar mensaje de error si el nombre es válido
            inputFirstSurName.style.borderColor = "green"; // Cambiar el borde a verde para un nombre válido
            inputFirstSurName.style.border = "solid green medium";  
            primerApellidoError.style.color = "green"; // El mensaje de error se muestra en rojo para que sea visible al usuario
        } else {
            primerApellidoError.textContent = "El primer apellido debe contener solo letras (2-15 caracteres)."; // Mensaje de error
            inputFirstSurName.style.borderColor = "red"; // Cambiar el borde a rojo para un nombre no válido
            inputFirstSurName.style.border = "solid red medium";
            primerApellidoError.style.color = "red"; // El mensaje de error se muestra en rojo para que sea visible al usuario
        }
    });

    inputSecondSurName.addEventListener("input", () => {
        const contacto = new validarContacto(); // Crear una instancia de la clase ValidarContacto
        const esValido = contacto.setName(inputSecondSurName.value.trim()); // Validar el valor del input
    
            // Mostrar el resultado de la validación
            if (esValido) {
                segundoApellidoError.textContent = "El segundo apellido de usuario es válido"; // Limpiar mensaje de error si el nombre es válido
                inputSecondSurName.style.borderColor = "green"; // Cambiar el borde a verde para un nombre válido
                inputSecondSurName.style.border = "solid green medium";  
                segundoApellidoError.style.color = "green"; // El mensaje de error se muestra en rojo para que sea visible al usuario
            } else {
                segundoApellidoError.textContent = "El primer apellido debe contener solo letras (2-15 caracteres)."; // Mensaje de error
                inputSecondSurName.style.borderColor = "red"; // Cambiar el borde a rojo para un nombre no válido
                inputSecondSurName.style.border = "solid red medium";
                segundoApellidoError.style.color = "red"; // El mensaje de error se muestra en rojo para que sea visible al usuario
            }
        });

    inputEmail.addEventListener("input", () => {
        const contacto = new validarContacto(); // Crear una instancia de la clase ValidarContacto
        const esValido = contacto.setCorreo(inputEmail.value.trim()); // Validar el valor del input

        // Mostrar el resultado de la validación
        if (esValido) {
            emailError.textContent = "El correo es válido"; // Limpiar mensaje de error si el nombre es válido
            inputEmail.style.borderColor = "green"; // Cambiar el borde a verde para un nombre válido
            inputEmail.style.border = "solid green medium";  
            emailError.style.color = "green"; // El mensaje de error se muestra en rojo para que sea visible al usuario
        } else {
            emailError.textContent = "El correo debe incluir '@' y un dominio"; // Mensaje de error
            inputEmail.style.borderColor = "red"; // Cambiar el borde a rojo para un nombre no válido
            inputEmail.style.border = "solid red medium";
            emailError.style.color = "red"; // El mensaje de error se muestra en rojo para que sea visible al usuario
        }    

    });

    inputPhone.addEventListener("input", () => {
        const contacto = new validarContacto(); // Crear una instancia de la clase ValidarContacto
        const esValido = contacto.setTelefono(inputPhone.value.trim()); // Validar el valor del input

        // Mostrar el resultado de la validación
        if (esValido) {
            telefonoError.textContent = "El teléfono es válido"; // Limpiar mensaje de error si el nombre es válido
            inputPhone.style.borderColor = "green"; // Cambiar el borde a verde para un nombre válido
            inputPhone.style.border = "solid green medium";  
            telefonoError.style.color = "green"; // El mensaje de error se muestra en rojo para que sea visible al usuario
        } else {
            telefonoError.textContent = "El teléfono no debe incluir espacios ni guiones (10 dígitos)"; // Mensaje de error
            inputPhone.style.borderColor = "red"; // Cambiar el borde a rojo para un nombre no válido
            inputPhone.style.border = "solid red medium";
            telefonoError.style.color = "red"; // El mensaje de error se muestra en rojo para que sea visible al usuario
        }  
    });
});
getelem