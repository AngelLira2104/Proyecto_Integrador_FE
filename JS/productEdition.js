const alertValidaciones = document.getElementById("alertValidaciones");
const alertValidacionesTexto = document.getElementById("alertValidacionesTexto");
const alertExito = document.getElementById("alertExito");
const alertExitoTexto = document.getElementById("alertExitoModificacion");
const btnBuscarProducto = document.getElementById("btnBuscarProducto");
const SearchName = document.getElementById("SearchName");
const editForm = document.getElementById("editForm");
const editName = document.getElementById("editName");
const editID = document.getElementById("editID");
const editDescription = document.getElementById("editDescription");
const editImage = document.getElementById("editImage");
const editStock = document.getElementById("editStock");
const editUnitPrice = document.getElementById("editUnitPrice");
const alertDuplicadoIDEdit = document.getElementById("alertIdDuplicado2");
const alertDuplicadoIDtextEdit = document.getElementById("alertIdDuplicadotext2");
const alertEmptySearch = document.getElementById("alertEmptySearch");
const alertEmptySearchText = document.getElementById("alertEmptySearchText");
const btnEditar = document.getElementById("btnEditar");

btnBuscarProducto.addEventListener("click", function(event){
    event.preventDefault();
    let bandera = false;
    //Here starts the process by searching for the input product
    //if the product does not exist in the data base (in this case localStorage)
    //Show an alert letting know the user it does not exist and should register it.
    if (SearchName.value.length > 0){
        if(localStorage.getItem("productos") != null){
            alertValidacionesTexto.innerHTML = "";
            alertValidaciones.style.display = "none";
            alertEmptySearch.style.display = "none";
            alertEmptySearchText.innerHTML = "";
            //This will change a bit in the future with the add of a BD
            productos = JSON.parse(localStorage.getItem("productos"));
            for (let i = 0; i < productos.length; i++){
                if(productos[i]["Nombre"] === SearchName.value || productos[i]["ID"] == SearchName.value){
                    editForm.style.display = "block";
                    editName.value = productos[i]["Nombre"];
                    editID.value = productos[i]["ID"];
                    editDescription.value = productos[i]["Descripcion"];
                    editImage.value = productos[i]["Imagen"];
                    editStock.value = productos[i]["Existencias"];
                    editUnitPrice.value = productos[i]["PrecioUnitario"];
                    bandera = true;
                    break;
                }
            }
            if (!bandera){
                alertValidacionesTexto.innerHTML = "<strong>El producto ingresado no existe.</strong>";
                alertValidaciones.style.display = "block";
                SearchName.focus();
            }
        } else {
            alertValidacionesTexto.innerHTML = "<strong>No existen productos registrados.</strong>";
            alertValidaciones.style.display = "block";
        }
    } else {
        alertEmptySearchText.innerHTML = "<strong>Ingrese un criterio de busqueda (Nombre del producto o ID)</strong>";
        alertEmptySearch.style.display = "block";
    }
});

btnEditar.addEventListener("click", function(event){
    event.preventDefault();

    //The button has the same constrains as the register button for the time this probably will change in the future
    let isValid = true;
    editName.value = editName.value.trim();
    editStock.value = editStock.value.trim();
    editUnitPrice.value = editUnitPrice.value.trim();
    editName.style.border = "";
    editStock.style.border = "";
    editUnitPrice.style.border = "";
    if (editName.value.length < 4){
        editName.style.border = "solid red medium";
        isValid = false;
    }
    if (isNaN(editID.value)){
        productID.style.border = "solid red medium";
        isValid = false;
    }
    if(productos.find(producto => producto.ID === editID.value) !== undefined){
        if (productos.find(producto => producto.ID === editID.value)["Nombre"] !== editName.value){
            alertDuplicadoIDEdit.style.display = "block";
            alertDuplicadoIDtextEdit.innerHTML = "<strong>No puede registrar productos con el mismo ID</strong>";
            isValid = false;
        }
    }
    if (editDescription.value.length < 4){
        productDescription.style.border = "solid red medium";
        isValid = false;
    }
    if (editImage.value.length < 4){
        productImage.style.border = "solid red medium";
        isValid = false;
    }
    if (Number(editStock.value) <= 0 || isNaN(editStock.value)){
        editStock.style.border = "solid red medium";
        isValid = false;
    }
    if(Number(editUnitPrice.value) <= 0 || isNaN(editUnitPrice.value)){
        editUnitPrice.style.border = "solid red medium";
        isValid = false;
    }
    //The functionality of the isValid if will change a bit since we are going to change a value(s) of the
    //existing product and not to create a new one
    if (isValid){
        for (var i = 0; i < productos.length; i++){
            if(productos[i]["Nombre"] === SearchName.value){
                if(productos[i]["Nombre"] != editName.value){
                    productos[i]["Nombre"] = editName.value;
                }
                if(productos[i]["ID"] != editID.value){
                    productos[i]["ID"] = editID.value;
                }
                if(productos[i]["Descripcion"] != editDescription.value){
                    productos[i]["Descripcion"] = editDescription.value;
                }
                if(productos[i]["Imagen"] != editImage.value){
                    productos[i]["Imagen"] = editImage.value;
                }
                if(productos[i]["Existencias"] != editStock.value){
                    productos[i]["Existencias"] = editStock.value;
                }
                if(productos[i]["PrecioUnitario"] != editUnitPrice.value){
                    productos[i]["PrecioUnitario"] = editUnitPrice.value;
                }
                break;
            }
        }
        localStorage.setItem("productos", JSON.stringify(productos));
        SearchName.value = "";
        editForm.style.display = "none";
        alertDuplicadoIDEdit.style.display = "none";
        alertDuplicadoIDtextEdit.innerHTML = "";
        alertExitoTexto.innerHTML = "<strong>El producto fue modificado con exito.</strong>";
        alertExito.style.display = "block";
    }
});