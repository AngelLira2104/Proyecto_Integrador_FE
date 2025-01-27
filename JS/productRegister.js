const btnRegistrar = document.getElementById("btnRegistrar");
const productName = document.getElementById("inputName");
const productID = document.getElementById("inputID");
const productDescription = document.getElementById("inputDescription");
const productImage = document.getElementById("inputImage");
const productStock = document.getElementById("inputStock");
const productUnitPrice = document.getElementById("inputUnitPrice");
const duplicateIdAlert = document.getElementById("alertIdDuplicado");
const idAlert = document.getElementById("alertId");
const nameAlert = document.getElementById("alertNombre");
const descriptionAlert = document.getElementById("alertDescripcion");
const stockAlert = document.getElementById("alertExistencia");
const priceAlert = document.getElementById("alertPrecio");
//Constante para el div que muestra el mensaje de exito para el registro
const registerSuccess = document.getElementById("alertExitoRegistro");

let productos = JSON.parse(localStorage.getItem("productos")) || [];

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

btnRegistrar.addEventListener("click", function (event) {
  event.preventDefault();
  let isValid = true;
  productName.value = productName.value.trim();
  productID.value = productID.value.trim();
  productDescription.value = productDescription.value.trim();
  productStock.value = productStock.value.trim();
  productUnitPrice.value = productUnitPrice.value.trim();
  productName.style.border = "";
  productID.style.border = "";
  productDescription.style.border = "";
  productStock.style.border = "";
  productUnitPrice.style.border = "";
  registerSuccess.style.display = "none";

  //RegExp for validations - JMG
  const idRegex = /^[a-zA-Z0-9]{1,12}$/;
  const nameRegex = /^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]{4,}$/;
  const descriptionRegex = /^.{10,}$/;
  const stockRegex = /^[0-9]+$/;
  const priceRegex = /^[0-9]+(\.[0-9]{1,2})?$/;
  //const imageRegex = /^(https?:\/\/)?([a-zA-Z0-9\-]+\.)+[a-zA-Z]{2,}(:\d+)?(\/[^\s]*)?$/;
  

  if (!idRegex.test(productID.value)) {
    idAlert.classList.remove("d-none");
    productID.style.border = "solid red medium";
    isValid = false;
  } else {
    idAlert.classList.add("d-none");
    productID.style.border = "solid green medium";
  }
  if (!nameRegex.test(productName.value)) {
    nameAlert.classList.remove("d-none");
    productName.style.border = "solid red medium";
    isValid = false;
  } else {
    nameAlert.classList.add("d-none");
    productName.style.border = "solid green medium";
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
  if (productos.find((producto) => producto.ID === productID.value)) {
    duplicateIdAlert.classList.remove("d-none");
    productID.style.border = "solid red medium";
    return; //Salir sin registrar
}
  if (isValid) {
    let product = {
      Nombre: productName.value,
      ID: productID.value,
      Descripcion: productDescription.value,
      Imagen: productImage.value,
      Existencias: productStock.value,
      PrecioUnitario: productUnitPrice.value,
    };
    
    productos.push(product);
    localStorage.setItem("productos", JSON.stringify(productos));
    //Aqui se muestra el mensaje de exito
    registerSuccess.style.display = "block";
    productName.value = "";
    productDescription.value = "";
    productStock.value = "";
    productUnitPrice.value = "";
    productImage.value = "";
    productID.value = "";
    duplicateIdAlert.style.display = "none";
    duplicateIdAlert.classList.add("d-none");
    idAlert.classList.add("d-none");    
    nameAlert.classList.add("d-none");
    descriptionAlert.classList.add("d-none");
    stockAlert.classList.add("d-none");
    priceAlert.classList.add("d-none");
    productName.focus();
  }
});
