const btnRegistrar = document.getElementById("btnRegistrar");
const productName = document.getElementById("inputName");
const productDescription = document.getElementById("inputDescription");
const productStock = document.getElementById("inputStock");
const productUnitPrice = document.getElementById("inputUnitPrice");

let productos = [];

window.addEventListener("load", function(){
    var sz = document.forms['formSelector'].elements['form'];
    // loop through list
          
    for (var i=0, len=sz.length; i<len; i++) {
        sz[i].onclick = function() { // assign onclick handler  function to each
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

btnRegistrar.addEventListener("click", function(event) {
    event.preventDefault();
    let isValid = true;
    productName.value = productName.value.trim();
    productStock.value = productStock.value.trim();
    productUnitPrice.value = productUnitPrice.value.trim();
    productName.style.border = "";
    productStock.style.border = "";
    productUnitPrice.style.border = "";
    if (productName.value.length < 4){
        productName.style.border = "solid red medium";
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
    if (isValid){
        let product = {
            "Nombre": productName.value,
            "Descripcion": productDescription.value,
            "Imagen": "ruta",
            "Existencias": productStock.value,
            "PrecioUnitario" : productUnitPrice.value
        };
        productos.push(product);
        localStorage.setItem("productos", JSON.stringify(productos));
        productName.value = "";
        productDescription.value = "";
        productStock.value = "";
        productUnitPrice.value = "";
        productName.focus();
    }
});