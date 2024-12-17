const inputName = document.getElementById("inputName");
const inputPhone = document.getElementById("inputPhone");
const inputFirstSurName = document.getElementById("inputFirstSurName");
const inputSecondSurName = document.getElementById("inputSecondSurName");
const inputEmail = document.getElementById("inputEmail");
const inputAbout = document.getElementById("inputAbout");
const btnenviar = document.getElementById("btnenviar");
const alerta = document.getElementById("alerta");
const alerta2 = document.getElementById("alerta2");
const alerta3 = document.getElementById("alerta3");
const alerta4 = document.getElementById("alerta4");
const alerta5 = document.getElementById("alerta5");
const alerta6 = document.getElementById("alerta6");
const alerta7 = document.getElementById("alerta7");
const exampleFormControlTextarea1=document.getElementById("exampleFormControlTextarea1");
const regexNombre = /^[a-z0-9_-]{3,15}$/
const regexCorreo = /[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/
const regexTelefono = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/

btnenviar.addEventListener("click", e=>{
e.preventDefault();
// let valid = true; // Variable para verificar si el formulario es válido
/*
if(!regexNombre.test(inputName.value)){
    alerta.style.display="block";
    inputName.style.border = "solid red medium";
}else{
    alerta.style.display="none";
    inputName.style.border = "";
}
if(!regexNombre.test(inputFirstSurName.value)){
    alerta2.style.display="block";
    inputFirstSurName.style.border = "solid red medium";
}else{
    alerta2.style.display="none";
    inputFirstSurName.style.border = "";
}
if(!regexNombre.test(inputSecondSurName.value)){
    alerta3.style.display="block";
    inputSecondSurName.style.border = "solid red medium";
}else{
    alerta3.style.display="none";
    inputSecondSurName.style.border = "";
}
*/
if(!regexCorreo.test(inputEmail.value)){
    alerta4.style.display="block";
    inputEmail.style.border = "solid red medium";
} else{
    alerta4.style.display="none";
    inputEmail.style.border = "";
}
if(!regexTelefono.test(inputPhone.value)){
    alerta5.style.display="block";
    inputPhone.style.border = "solid red medium";
}else{
    alerta5.style.display="none";
    inputPhone.style.border = "";
}
if(inputAbout.value.length>100){
    alerta6.style.display="block";
    inputAbout.style.border = "solid red medium";
}else{
    alerta6.style.display="none";
    inputAbout.style.border = "";
}
if(exampleFormControlTextarea1.value.length>500){
    alerta7.style.display="block";
    exampleFormControlTextarea1.style.border = "solid red medium";
}else{
    alerta7.style.display="none";
    exampleFormControlTextarea1.style.border = "";
}

// Si todo está validado, enviamos el correo
// if (valid) {
//     sendEmail();
// }
});

// // Función para mostrar alertas con Bootstrap
// function showAlert(message, type) {
//     const alertContainer = document.getElementById("alert-container");
//     const alertHTML = `
//       <div class="alert alert-${type} alert-dismissible fade show" role="alert">
//         ${message}
//         <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
//       </div>
//     `;
  
//     alertContainer.innerHTML = alertHTML;
//   }
  
//   // Función para enviar correo electrónico usando EmailJS
//   function sendEmail() {
//     const params = {
//       nombre: inputName.value,
//       apellido1: inputFirstSurName.value,
//       apellido2: inputSecondSurName.value,
//       correo: inputEmail.value,
//       telefono: inputPhone.value,
//       asunto: inputAbout.value,
//       mensaje: exampleFormControlTextarea1.value,
//     };
  
//     emailjs
//       .send(
//         "service_6c1x4po", 
//         "template_3hj7cl3", 
//         params, 
//         "Ubs8e-xvp0qtDK7eX"
//       )
//       .then(() => {
//         showAlert("¡El mensaje fue enviado con éxito!", "success");
//         limpiarFormulario();
//       })
//       .catch((error) => {
//         console.error("Error al enviar el correo: ", error);
//         showAlert("Ocurrió un error al enviar el mensaje. Inténtalo de nuevo.", "danger");
//       });
//   }
  
//   // Función para limpiar el formulario
//   function limpiarFormulario() {
//     inputName.value = "";
//     inputFirstSurName.value = "";
//     inputSecondSurName.value = "";
//     inputEmail.value = "";
//     inputPhone.value = "";
//     inputAbout.value = "";
//     exampleFormControlTextarea1.value = "";
//   }
  
