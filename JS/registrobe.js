const userName = document.getElementById("inputName");
const userApellidoP = document.getElementById("inputFirstSurName");
const userApellidoM = document.getElementById("inputSecondSurName");
const userCorreo = document.getElementById("inputEmail");
const userTelefono = document.getElementById("inputPhone");
const userPass = document.getElementById("userPass");
const userPass2 = document.getElementById("userPassconfirm");
const formRegister = document.getElementById("form");
const btnenviar = document.getElementById("submit");
const alertaerror = document.querySelector(".alert-error");
const emailRegex = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
const NamePApeMApe = /^[a-zA-ZáéíóúÁÉÍÓÚüÜñÑ\s-]{3,16}$/u;
const telefonoRegex = /^(?!0)(?!0000000000)\d{10}$/;
const contraseñaRegex =
  /^(?=.*\d)(?=.*[\u0021-\u002b\u003c-\u0040])(?=.*[A-Z])(?=.*[a-z])\S{8,16}$/;
//const passwordRegex = /^.{4,12}$];
const estadovalidacionCampos = {
  Name: false,
  FirstSurName: false,
  SecondSurName: false,
  Email: false,
  Phone: false,
  Passs: false,
  Passs2: false,
};
document.addEventListener("DOMContentLoaded", () => {
  formRegister.addEventListener("submit", (e) => {
    e.preventDefault();
    enviarformulario();
  });
  userName.addEventListener("input", () => {
    validarCampo(
      NamePApeMApe,
      userName,
      "El nombre tiene que ser de 3 a 16 dígitos"
    );
  });
  userApellidoP.addEventListener("input", () => {
    validarCampo(
      NamePApeMApe,
      userApellidoP,
      "El apellido materno tiene que ser de 3 a 16 dígitos"
    );
  });
  userApellidoM.addEventListener("input", () => {
    validarCampo(
      NamePApeMApe,
      userApellidoM,
      "El apellido paterno tiene que ser de 3 a 16 dígitos"
    );
  });
  userCorreo.addEventListener("input", () => {
    validarCampo(
      emailRegex,
      userCorreo,
      "El correo debe incluir '@' y un dominio"
    );
  });
  userTelefono.addEventListener("input", () => {
    validarCampo(
      telefonoRegex,
      userTelefono,
      "El teléfono debe contener 10 dígitos, sin espacios ni guiones"
    );
  });
  userPass.addEventListener("input", () => {
    validarCampo(
      contraseñaRegex,
      userPass,
      "(Incluye una mayúscula, un símbolo especial, números y letras)"
    );
  });
  userPass2.addEventListener("input", () => {
    validarCampo(contraseñaRegex, userPass2, "La constraseña no coincide");
  });
});

function validarCampo(regularExpresion, campo, mensaje) {
  const validarCampo = regularExpresion.test(campo.value);

  if (validarCampo) {
    console.log(estadovalidacionCampos);
    eliminarAlerta(campo.parentElement);
    estadovalidacionCampos[campo.name] = true;
    return;
  }
  estadovalidacionCampos[campo.name] = false;
  mostrarAlerta(campo.parentElement, mensaje);
}

function mostrarAlerta(referencia, mensaje) {
  eliminarAlerta(referencia);
  const alertDiv = document.createElement("div");
  alertDiv.classList.add("alerta");
  alertDiv.textContent = mensaje;
  referencia.appendChild(alertDiv);
}
function eliminarAlerta(referencia) {
  const alerta = referencia.querySelector(".alerta");
  if (alerta) {
    alerta.remove();
  }
}
function enviarformulario() {
  //validar  campos
  if (
    estadovalidacionCampos.Name &&
    estadovalidacionCampos.FirstSurName &&
    estadovalidacionCampos.SecondSurName &&
    estadovalidacionCampos.Email &&
    estadovalidacionCampos.Phone &&
    estadovalidacionCampos.Passs
  ) {
    GuardarDatos();
    formRegister.reset();
    return;
  }
  console.log("fallido");
}

//let users = JSON.parse(localStorage.getItem("users")) || [];

async function GuardarDatos () {
  let isValid = true;
  // Validar que todos los campos estén completos
  if (isValid) {
    let newUser = {
      nombre: userName.value,
      ape_p: userApellidoP.value,
      ape_m: userApellidoM.value,
      telefono: userTelefono.value,
      correo: userCorreo.value,
      password: userPass.value,
      rol: "user",
    };

    //------------------FETCH POST------------------//

    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: JSON.stringify(newUser),
      redirect: "follow",
    };

    let resultado = await fetch("/api/usuarios/", requestOptions)
      .then((response) => response.text())
      .then((result) => {return result})
      .catch((error) => console.error(error));

      console.log(resultado.length);
      if (resultado.length !== 0){
        swal.fire({
            title: "Éxito: Usuario Registrado",
            icon: "success",
            width: "40%",
            background: "#D9A796",
            showConfirmButton: false,
            confirmButtonColor: " #05888d",
            time: 3000,
          });
      } else {
        swal.fire({
            title: "Error: Usuario ya registrado",
            icon: "error",
            width: "40%",
            background: "#D9A796",
            showConfirmButton: false,
            time: 3000,
          });
      }




    // Limpiar formulario después del registro exitoso
    formRegister.reset();

    

    userName.value = "";
    userApellidoP.value = "";
    userApellidoM.value = "";
    userCorreo.value = "";
    userTelefono.value = "";
    userPass2.value = "";
    userPass.value = "";
    console.log("Nuevo usuario registrado:", newUser);
    //console.log("Usuarios actuales en localStorage:", users);

    setTimeout(function () {
      window.location.href = urlInicioSesion.pathname;
    }, 1.5 * 1000);
  }
}
