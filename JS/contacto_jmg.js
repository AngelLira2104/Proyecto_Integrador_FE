alert("Página conectada");


class validarContacto {
    nombre = "";
    primerApellido = "";
    segundoApellido = "";
    constructor(nombre,primerApellido,segundoApellido) {
        this.nombre = nombre;
        this.primerApellido = primerApellido;
        this.segundoApellido = segundoApellido;
    }

    // Validación del nombre
    setName(nombre) {
        const regex = /^[a-zA-Z]{2,15}$/; // Solo se aceptan letras minúsculas y mayúsculas, y también se aceptan nombres entre 2 y 15 caracteres        
        if (regex.test(nombre)){
            this.nombre = nombre; // El nombre ingresado se almacena en 'nombre'
            return true; // Indica que el nombre es válido
        } else {
            this.nombre = "";  // Se limpia el valor del nombre para que no se almacene en 'nombre'
            return false; // Indica que el nombre no es válido
        }
    }

    setFirstSurname(primerApellido) {
        const regex = /^[a-zA-Z]{2,15}$/; 
        if (regex.test(primerApellido)){
            this.primerApellido = primerApellido; 
            return true; 
        } else {
            this.primerApellido = "";  
            return false; // 
        }
    }

    setSecondSurname(segundoApellido) {
        const regex = /^[a-zA-Z]{2,15}$/; 
        if (regex.test(segundoApellido)){
            this.segundoApellido = segundoApellido; 
            return true; 
        } else {
            this.segundoApellido = "";  
            return false; // 
        }
    }
}

document.addEventListener("DOMContentLoaded", () => { // Esperamos a que el DOM esté cargado
    
    const inputName = document.getElementById("inputName");
    const inputFirstSurName = document.getElementById("inputFirstSurName");
    const inputSecondSurName = document.getElementById("inputSecondSurName");
    const nombreError = document.createElement("p");
    const primerApellidoError = document.createElement("p");
    const segundoApellidoError = document.createElement("p");
    inputName.parentElement.appendChild(nombreError); // Añadir el mensaje de error al DOM
    inputFirstSurName.parentElement.appendChild(primerApellidoError); // Añadir el mensaje de error al DOM
    inputSecondSurName.parentElement.appendChild(segundoApellidoError); // Añadir el mensaje de error al DOM

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
});