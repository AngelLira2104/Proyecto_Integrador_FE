


class validarContacto {
    nombre = "";
    primerApellido = "";
    segundoApellido = "";
    correo = "";
    telefono = "";
    Contraseña = "";
    Contraseña2 ="";
    constructor(nombre, primerApellido, segundoApellido, correo, telefono, Contraseña,  Contraseña2) {
      this.nombre = nombre;
      this.primerApellido = primerApellido;
      this.segundoApellido = segundoApellido;
      this.correo = correo;
      this.telefono = telefono;
      this.Contraseña = Contraseña;
      this.Contraseña2 = Contraseña2;
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
      const nameFromLocalStorage = localStorage.getItem("Correo")
      if (regex.test(correo)) {
          this.correo = correo;
        return true;

      } else {
        this.correo = "";
        return false; //
      }
    }
    setTelefono(telefono) {
      const regex = /^(?!0000000000$)[0-9]{10}$/;
      if (regex.test(telefono)) {
        this.telefono = telefono;
        return true;
      } else {
        this.telefono = "";
        return false; //
      }
    }
    setContraseña(Contraseña) {
      const regex =  /^(?=.*\d)(?=.*[\u0021-\u002b\u003c-\u0040])(?=.*[A-Z])(?=.*[a-z])\S{8,16}$/;
      if (regex.test(Contraseña)) {
        this.Contraseña = Contraseña;
        return true;
      } else {
        this.Contraseña = "";
        return false; //
      }
    }
    setContraseña2(Contraseña2) {
        if(Contraseña2!=Contraseña){
          this.Contraseña2 = Contraseña2;
              return true;
        }else{
          this.Contraseña2 = "";
        return false; //
        }
     
    }
  } //class validarContacto
  
  //----------Se agrega una 'oreja' que se activa cuando se carga todo el DOM----------//
  document.addEventListener("DOMContentLoaded", () => {
    //----------Se crea un objeto para traer los campos del formulario desde el HTML----------//
    const inputs = {
      name : document.getElementById("inputName"),
      firstSurname: document.getElementById("inputFirstSurName"),
      secondSurname: document.getElementById("inputSecondSurName"),
      email: document.getElementById("inputEmail"),
      phone: document.getElementById("inputPhone"),
      password: document.getElementById("userPass"),
      password2: document.getElementById("userPassconfirm"),
    };
    const submitButton = document.getElementById("submitForm"); //Se trae el botón de 'Enviar'

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
  
    const actualContraseña = "password";
    const crearParrafoContraseña = document.createElement("p");
    errors[actualContraseña] = crearParrafoContraseña;
    const padreContraseña = inputs[actualContraseña].parentElement;
    padreContraseña.appendChild(crearParrafoContraseña);
  
    const actualContraseña2 = "password2";
    const crearParrafoContraseña2 = document.createElement("p");
    errors[actualContraseña2] = crearParrafoContraseña2;
    const padreContraseña2 = inputs[actualContraseña2].parentElement;
    padreContraseña2.appendChild(crearParrafoContraseña2);
  
    //----------Se configuran las validaciones y los mensajes de error----------//
  
    const contacto = new validarContacto(); //Se crea una instancia de la clase validarContacto
    const validations = {
      //Se crean funciones flecha para poder validar mediante los métodos el valor introducido en los campos
      name: (value) => contacto.setName(value.trim()),
      firstSurname: (value) => contacto.setFirstSurname(value.trim()),
      secondSurname: (value) => contacto.setSecondSurname(value.trim()),
      email: (value) => contacto.setCorreo(value.trim()),
      phone: (value) => contacto.setTelefono(value.trim()),
      password: (value) => contacto.setContraseña(value.trim()),
      password2: (value) => contacto.setContraseña(value.trim()),
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
      password: {
        error: "La contraseña no es valida",
        success: "La contraseña es valida ",
      },
      password2: {
        error: "La contraseña no coincide",
        success: "La contraseña coinciden",
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
    //Se coloca un addEventListener que enviará el formulario
    submitButton.addEventListener("click", (event) => {
      event.preventDefault();

      if (!validateForm()) {
        //Se confirma que el formulario está validado antes de ser enviado
        return;
      }
      GuardarDatos();
    });
  });
  let users = JSON.parse(localStorage.getItem("users")) || [];
  function GuardarDatos(){
    
      
      const userName = document.getElementById("inputName");
      const userApellidoP = document.getElementById("inputFirstSurName");
      const userApellidoM = document.getElementById("inputSecondSurName");
      const userCorreo = document.getElementById("inputEmail");
      const userTelefono = document.getElementById("inputPhone");
      const userPass = document.getElementById("userPass");
      const userPass2 = document.getElementById("userPassconfirm");
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
                  showConfirmButton: false,
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
              console.log("Nuevo usuario registrado:", newUser);
              console.log("Usuarios actuales en localStorage:", users);
              
              setTimeout(function(){ 
                window.location.href = "http://127.0.0.1:5500/HTML/inicioSesion.html"; 
                }, 1.5 * 1000);
          } 
          
      };
     