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
});
