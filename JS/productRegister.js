const btnRegistrar = document.getElementById("btnRegistrar");
const productName = document.getElementById("inputName");
const productColor = document.getElementById("inputColor");
const productDescription = document.getElementById("inputDescription");
const productImage = document.getElementById("inputImage");
const productStock = document.getElementById("inputStock");
const productUnitPrice = document.getElementById("inputUnitPrice");
const idAlert = document.getElementById("alertId");
const nameAlert = document.getElementById("alertNombre");
const colorAlert = document.getElementById("alertColor");
const descriptionAlert = document.getElementById("alertDescripcion");
const stockAlert = document.getElementById("alertExistencia");
const priceAlert = document.getElementById("alertPrecio");
const alertProductoDuplicado = document.getElementById("alertProductoDuplicado");
//Constante para el div que muestra el mensaje de exito para el registro
const registerSuccess = document.getElementById("alertExitoRegistro");

//let productos = JSON.parse(localStorage.getItem("productos")) || [];

window.addEventListener("load", function () {
  var sz = document.forms['formSelector'].elements['form'];
  // loop through list

  for (var i = 0, len = sz.length; i < len; i++) {
    sz[i].onclick = function () {
      // assign onclick handler  function to each
      // change the 'display' style property of the forms to show and hide them
      var display;
      var dntDisplay;
      alertValidacionesTexto.innerHTML = "";
      alertValidaciones.style.display = "none";
      alertExitoTexto.innerHTML = "";
      alertExito.style.display = "none";
      editForm.style.display = "none";
      if (this.value == 1) {
        display = 1;
        dntDisplay = 2;
      } else {
        display = 2;
        dntDisplay = 1;
      }
      document.getElementById('form' + display).style.display = "block";
      document.getElementById('form' + dntDisplay).style.display = "none";
    };
  }
});

btnRegistrar.addEventListener("click", async function (event) {
  event.preventDefault();
  let isValid = true;
  productName.value = productName.value.trim();
  productColor.value = productColor.value.trim();
  productDescription.value = productDescription.value.trim();
  productStock.value = productStock.value.trim();
  productUnitPrice.value = productUnitPrice.value.trim();
  productName.style.border = "";
  productDescription.style.border = "";
  productStock.style.border = "";
  productUnitPrice.style.border = "";
  registerSuccess.style.display = "none";

  //RegExp for validations - JMG
  const nameRegex = /^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]{4,}$/;
  const descriptionRegex = /^.{10,}$/;
  const stockRegex = /^[0-9]+$/;
  const priceRegex = /^[0-9]+(\.[0-9]{1,2})?$/;
  

  if (!nameRegex.test(productName.value)) {
    nameAlert.classList.remove("d-none");
    productName.style.border = "solid red medium";
    isValid = false;
  } else {
    nameAlert.classList.add("d-none");
    productName.style.border = "solid green medium";
  }
  if (!nameRegex.test(productColor.value)) {
    colorAlert.classList.remove("d-none");
    productColor.style.border = "solid red medium";
    isValid = false;
  } else {
    colorAlert.classList.add("d-none");
    productColor.style.border = "solid green medium";
  }
  if (!descriptionRegex.test(productDescription.value)) {
    descriptionAlert.classList.remove("d-none");
    productDescription.style.border = "solid red medium";
    isValid = false;
  } else {
    descriptionAlert.classList.add("d-none");
    productDescription.style.border = "solid green medium";
  }
  if (!stockRegex.test(productStock.value) || Number(productStock.value) <= 0) {
    stockAlert.classList.remove("d-none");
    productStock.style.border = "solid red medium";
    isValid = false;
  } else {
    stockAlert.classList.add("d-none");
    productStock.style.border = "solid green medium";
  }
  if (
    !priceRegex.test(productUnitPrice.value) ||
    Number(productUnitPrice.value) <= 0
  ) {
    priceAlert.classList.remove("d-none");
    productUnitPrice.style.border = "solid red medium";
    isValid = false;
  } else {
    priceAlert.classList.add("d-none");
    productUnitPrice.style.border = "solid green medium";
  }
  if (productImage.value.trim() === "") {
    productImage.style.border = "solid red medium";
    isValid = false;
  }
  /*
  if (productos.find((producto) => producto.ID === productID.value)) {
    duplicateIdAlert.classList.remove("d-none");
    productID.style.border = "solid red medium";
    return; //Salir sin registrar
  }*/
  if (isValid) {
    let product = JSON.stringify({
      "nombre": productName.value,
      "precio": productUnitPrice.value,
      "color": productColor.value,
      "stock": productStock.value,
      "descripcion": productDescription.value,
      "imagen": productImage.value
    });
    
    // ----------- FETCH POST ---------------
    let token = sessionStorage.getItem("Token") || null;
    const myHeaders = new Headers();
    myHeaders.append("Authorization", "Bearer: " + token); //Aqui va el token de authorization
    myHeaders.append("Content-Type", "application/json");

    const requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: product,
    redirect: "follow"
    };

    let resultado = await fetch("/api/productos/", requestOptions)
      .then((response) => response.text())
      .then((result) => {return result})
      .catch((error) => console.error(error));
    //productos.push(product);
    //localStorage.setItem("productos", JSON.stringify(productos));
    //Aqui se muestra el mensaje de exito
    if (resultado.length !== 0){
      registerSuccess.style.display = "block";
    } else {
      alertProductoDuplicado.style.display = "block";
    }
    productName.value = "";
    productName.style.border = "";
    productDescription.value = "";
    productDescription.style.border = "";
    productColor.value ="";
    productColor.style.border ="";
    productImage.value = "";
    productImage.style.border = "";
    productStock.value = "";
    productStock.style.border = "";
    productUnitPrice.value = "";
    productUnitPrice.style.border = "";    
  
    nameAlert.classList.add("d-none");
    colorAlert.classList.add("d-none");
    descriptionAlert.classList.add("d-none");
    stockAlert.classList.add("d-none");
    priceAlert.classList.add("d-none");
    productName.focus();
  }
});
