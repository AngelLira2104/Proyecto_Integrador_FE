const btnRegistrar = document.getElementById("btnRegistrar");
const productName = document.getElementById("inputName");
const productID = document.getElementById("inputID");
const productDescription = document.getElementById("inputDescription");
const productImage = document.getElementById("inputImage");
const productStock = document.getElementById("inputStock");
const productUnitPrice = document.getElementById("inputUnitPrice");
const duplicateIdAlert = document.getElementById("alertDuplicado");
const duplicateIdAlertText = document.getElementById("alertDuplicadotext");

let productos = JSON.parse(localStorage.getItem("productos")) || [];

window.addEventListener("load", function () {
  var sz = document.forms["formSelector"].elements["form"];
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
      document.getElementById("form" + display).style.display = "block";
      document.getElementById("form" + dntDisplay).style.display = "none";
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
  productStock.style.border = "";
  productUnitPrice.style.border = "";

  //RegExp for validations - JMG
  const idRegex = /^[a-zA-Z0-9]{1,12}$/;
  const nameRegex = /^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]{4,}$/;
  const descriptionRegex = /^.{10,}$/;
  const priceRegex = /^[0-9]+(\.[0-9]{1,2})?$/;
  const stockRegex = /^[0-9]+$/;

  if (!idRegex.test(productID.value)) {
    productID.style.border = "solid red medium";
    isValid = false;
  }
  if (!nameRegex.test(productName.value)) {
    productName.style.border = "solid red medium";
    isValid = false;
  }
  if (!descriptionRegex.test(productDescription.value)) {
    productDescription.style.border = "solid red medium";
    isValid = false;
  }
  if (!stockRegex.test(productStock.value) || Number(productStock.value) <= 0) {
    productStock.style.border = "solid red medium";
    isValid = false;
  }

  if (
    !priceRegex.test(productUnitPrice.value) ||
    Number(productUnitPrice.value) <= 0
  ) {
    productUnitPrice.style.border = "solid red medium";
    isValid = false;
  }
  if (productImage.value.trim() === "") {
    productImage.style.border = "solid red medium";
    isValid = false;
  }
  if (
    productos.find((producto) => producto.ID === productID.value) !== undefined
  ) {
    duplicateIdAlert.classList.remove("d-none"); // Mostrar alerta
    duplicateIdAlert.innerHTML = `
    <strong>Error:</strong> El ID "${productID.value}" ya está registrado.
    <a href="#" class="alert-link">Corrige el ID</a>.
`;
    productID.style.border = "solid red medium";
    isValid = false;

    setTimeout(() => {
        duplicateIdAlert.classList.add("d-none");
    }, 5000);
  }

  /*
    if (productName.value.length < 4){
        productName.style.border = "solid red medium";
        isValid = false;
    }
    if (productID.value === "") {
        productID.style.border = "solid red medium";
        isValid = false;
    } else if (isNaN(productID.value)) {
        productID.style.border = "solid red medium";
        isValid = false;
    }
    if (isNaN(productID.value)){
        productID.style.border = "solid red medium";
        isValid = false;
    }
    if(productos.find(producto => producto.ID === productID.value) !== undefined){
        duplicateIdAlert.style.display = "block";
        duplicateIdAlertText.innerHTML = "<strong>No puede registrar productos con el mismo ID</strong>";
        isValid = false;
    }
    if (productDescription.value.length < 4){
        productDescription.style.border = "solid red medium";
        isValid = false;
    }
    if (productImage.value.length < 4){
        productImage.style.border = "solid red medium";
        isValid = false;
    }
    if (Number(productStock.value) <= 0 || isNaN(productStock.value)){
        productStock.style.border = "solid red medium";
        isValid = false;
    }
    if(Number(productUnitPrice.value) <= 0 || isNaN(productUnitPrice.value)){
        productUnitPrice.style.border = "solid red medium";
        isValid = false;
    }
*/
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
    productName.value = "";
    productDescription.value = "";
    productStock.value = "";
    productUnitPrice.value = "";
    productImage.value = "";
    productID.value = "";
    duplicateIdAlert.style.display = "none";
    duplicateIdAlertText.innerHTML = "";
    productName.focus();
  }
});
