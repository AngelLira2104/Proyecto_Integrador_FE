//alert('Conexión correcta');

//----------Se crea la clase validarContacto----------//
class validarContacto {
  nombre = "";
  primerApellido = "";
  segundoApellido = "";
  correo = "";
  telefono = "";
  asunto = "";
  mensaje = "";
  constructor(
    nombre,
    primerApellido,
    segundoApellido,
    correo,
    telefono,
    asunto,
    mensaje
  ) {
    this.nombre = nombre;
    this.primerApellido = primerApellido;
    this.segundoApellido = segundoApellido;
    this.correo = correo;
    this.telefono = telefono;
    this.asunto = asunto;
    this.mensaje = mensaje;
  }

  //----------Se definen los métodos para validar las entradas en los campos----------//
  setName(nombre) {
    const regex = /^[a-zA-ZáéíóúÁÉÍÓÚüÜñÑ\s-]{2,20}$/u; //Expresión regular
    if (regex.test(nombre)) {
      this.nombre = nombre; //El nombre ingresado se almacena en 'nombre'
      return true; //Se indica que el nombre SÍ es válido
    } else {
      this.nombre = ""; //Se limpia el valor del nombre para que no se almacene en 'nombre'
      return false; //Se indica que el nombre NO es válido
    }
  }
  setFirstSurname(primerApellido) {
    const regex = /^[a-zA-ZáéíóúÁÉÍÓÚüÜñÑ\s-]{2,20}$/u;
    if (regex.test(primerApellido)) {
      this.primerApellido = primerApellido;
      return true;
    } else {
      this.primerApellido = "";
      return false; //
    }
  }
  setSecondSurname(segundoApellido) {
    const regex = /^[a-zA-ZáéíóúÁÉÍÓÚüÜñÑ\s-]{2,20}$/u;
    if (regex.test(segundoApellido)) {
      this.segundoApellido = segundoApellido;
      return true;
    } else {
      this.segundoApellido = "";
      return false; //
    }
  }
  setCorreo(correo) {
    const regex = /[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/;
    if (regex.test(correo)) {
      this.correo = correo;
      return true;
    } else {
      this.correo = "";
      return false; //
    }
  }
  setTelefono(telefono) {
    const regex = /^(?!0)(?!0000000000)\d{10}$/;
    if (regex.test(telefono)) {
      this.telefono = telefono;
      return true;
    } else {
      this.telefono = "";
      return false; //
    }
  }
  setAsunto(asunto) {
    if (asunto.trim().length > 0) {
      this.asunto = asunto;
      return true;
    } else {
      this.asunto = "";
      return false;
    }
  }
  setMensaje(mensaje) {
    if (mensaje.trim().length > 0) {
      this.mensaje = mensaje;
      return true;
    } else {
      this.mensaje = "";
      return false;
    }
  }
} //class validarContacto

//----------Se agrega una 'oreja' que se activa cuando se carga todo el DOM----------//
document.addEventListener("DOMContentLoaded", () => {
  //----------Se crea un objeto para traer los campos del formulario desde el HTML----------//
  const inputs = {
    name: document.getElementById("inputName"),
    firstSurname: document.getElementById("inputFirstSurName"),
    secondSurname: document.getElementById("inputSecondSurName"),
    email: document.getElementById("inputEmail"),
    phone: document.getElementById("inputPhone"),
    about: document.getElementById("inputAbout"),
    message: document.getElementById("exampleFormControlTextarea1"),
  };
  const submitButton = document.getElementById("btnEnviarContacto"); //Se trae el botón de 'Enviar'

  //----------Se crean los elementos <p> para los mensajes de error----------//
  const errors = {}; //Se crea un objeto vacío para los <p> de los mensajes de error

  const actualNombre = "name"; //Se define la llave actual, que identifica el campo 'name'
  const crearParrafoNombre = document.createElement("p"); //Se crea un elemento <p> que muestra el mensaje de error del campo 'name'
  errors[actualNombre] = crearParrafoNombre; //El elemento <p> se asigna al objeto 'errors' con la llave 'name' como su identificador
  const padreNombre = inputs[actualNombre].parentElement; //Se obtiene el elemento padre del input correspondiente al campo 'name'
  padreNombre.appendChild(crearParrafoNombre); //El elemento <p> creado se añade como hijo del elemento padre del input, quedando disponible en el DOM

  const actualPrimerApellido = "firstSurname";
  const crearParrafoPrimerApellido = document.createElement("p");
  errors[actualPrimerApellido] = crearParrafoPrimerApellido;
  const padrePrimerApellido = inputs[actualPrimerApellido].parentElement;
  padrePrimerApellido.appendChild(crearParrafoPrimerApellido);

  const actualSegundoApellido = "secondSurname";
  const crearParrafoSegundoApellido = document.createElement("p");
  errors[actualSegundoApellido] = crearParrafoSegundoApellido;
  const padreSegundoApellido = inputs[actualSegundoApellido].parentElement;
  padreSegundoApellido.appendChild(crearParrafoSegundoApellido);

  const actualCorreo = "email";
  const crearParrafoCorreo = document.createElement("p");
  errors[actualCorreo] = crearParrafoCorreo;
  const padreCorreo = inputs[actualCorreo].parentElement;
  padreCorreo.appendChild(crearParrafoCorreo);

  const actualTelefono = "phone";
  const crearParrafoTelefono = document.createElement("p");
  errors[actualTelefono] = crearParrafoTelefono;
  const padreTelefono = inputs[actualTelefono].parentElement;
  padreTelefono.appendChild(crearParrafoTelefono);

  const actualAsunto = "about";
  const crearParrafoAsunto = document.createElement("p");
  errors[actualAsunto] = crearParrafoAsunto;
  const padreAsunto = inputs[actualAsunto].parentElement;
  padreAsunto.appendChild(crearParrafoAsunto);

  const actualMensaje = "message";
  const crearParrafoMensaje = document.createElement("p");
  errors[actualMensaje] = crearParrafoMensaje;
  const padreMensaje = inputs[actualMensaje].parentElement;
  padreMensaje.appendChild(crearParrafoMensaje);

  //----------Se configuran las validaciones y los mensajes de error----------//

  const contacto = new validarContacto(); //Se crea una instancia de la clase validarContacto
  const validations = {
    //Se crean funciones flecha para poder validar mediante los métodos el valor introducido en los campos
    name: (value) => contacto.setName(value.trim()),
    firstSurname: (value) => contacto.setFirstSurname(value.trim()),
    secondSurname: (value) => contacto.setSecondSurname(value.trim()),
    email: (value) => contacto.setCorreo(value.trim()),
    phone: (value) => contacto.setTelefono(value.trim()),
    about: (value) => contacto.setAsunto(value.trim()),
    message: (value) => contacto.setMensaje(value.trim()),
  };

  const errorMessages = {
    //Se definen los mensajes de error para cada uno de los campos del formulario
    name: {
      error: "El nombre debe contener solo letras (2-20 caracteres)",
      success: "El nombre introducido es válido",
    },
    firstSurname: {
      error: "El primer apellido debe contener solo letras (2-20 caracteres)",
      success: "El primer apellido introducido es válido",
    },
    secondSurname: {
      error: "El segundo apellido debe contener solo letras (2-20 caracteres)",
      success: "El segundo apellido introducido es válido",
    },
    email: {
      error: "El correo debe incluir '@' y un dominio",
      success: "El correo introducido es válido",
    },
    phone: {
      error: "El teléfono debe contener 10 dígitos, sin espacios ni guiones",
      success: "El teléfono introducido es válido",
    },
    about: {
      error: "Por favor, coloca el asunto del mensaje",
      success: "Asunto del mensaje válido",
    },
    message: {
      error: "¡Espera! No olvides colocar tu mensaje",
      success: "Cuerpo del mensaje válido",
    },
  };

  function fieldValidation(inputKey) {
    //Se crea la función fieldValidation que valida a cada uno de los campos del formulario
    const inputCampo = inputs[inputKey]; //Se toman los valores de las llaves
    const isValid = validations[inputKey](inputCampo.value);

    if (isValid) {
      errors[inputKey].textContent = errorMessages[inputKey].success;
      errors[inputKey].style.color = "green";
      inputCampo.style.border = "2px solid green";
    } else {
      errors[inputKey].textContent = errorMessages[inputKey].error;
      errors[inputKey].style.color = "red";
      inputCampo.style.border = "2px solid red";
    }
    return isValid;
  }

  //----------Se añaden eventos a los inputs para validación en tiempo real----------//
  let inputKeys = Object.keys(inputs); //Se obtienen todos los nombres de los campos del objeto 'inputs'

  for (let i = 0; i < inputKeys.length; i++) {
    //Se crea un ciclo 'for' para poder así recorrer las llaves
    let key = inputKeys[i];
    inputs[key].addEventListener("input", function () {
      fieldValidation(key); //Se llama la función para validar el campo específico
    });
  }

  //----------Se crea una función que valida el formulario antes de ser enviado----------//
  function validateForm() {
    return Object.keys(inputs).every((key) => fieldValidation(key));
  }

  //----------Se inicializa EmailJS----------//
  emailjs.init("Ubs8e-xvp0qtDK7eX"); //Se coloca la PUBLIC KEY

  //Se coloca un addEventListener que enviará el formulario
  submitButton.addEventListener("click", (event) => {
    event.preventDefault();

    if (!validateForm()) {
      //Se confirma que el formulario está validado antes de ser enviado
      return;
    }

    const plantillaParametros = {
      name: inputs.name.value.trim(),
      firstSurname: inputs.firstSurname.value.trim(),
      secondSurname: inputs.secondSurname.value.trim(),
      email: inputs.email.value.trim(),
      phone: inputs.phone.value.trim(),
      about: inputs.about.value.trim(),
      message: inputs.message.value.trim(),
    };

    emailjs
      .send("service_hoodrj5", "template_3hj7cl3", plantillaParametros)
      .then((response) => {
        console.log(
          "Formulario enviado con éxito!",
          response.status,
          response.text
        );

        const alertaExito = document.getElementById("alerta-exito"); //Se trae la alerta con ID: alerta-exitoso desde HTML
        alertaExito.classList.remove("d-none"); //Se muestra la alerta de envío exitoso

        setTimeout(() => {
          alertaExito.classList.add("d-none");
        }, 5000); //Se elimina la alerta de envío exitoso automáticamente después de 5 segundos

        document.getElementById("form").reset(); //Se limpia el formulario después de enviar
        Object.keys(errors).forEach((key) => {
          errors[key].textContent = ""; //Se limpian los mensajes de error de todos los campos
          inputs[key].style.border = ""; //Se reestablecen los bordes de todos los campos
        });
      });
  });
});