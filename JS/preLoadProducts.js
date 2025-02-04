let productos = JSON.parse(localStorage.getItem("productos")) || []; 
    
function getData(){
    fetch('../JSON/productos.json').then((response) => {
        response.json().then((res) => {
            localStorage.setItem("productos", JSON.stringify(res.productos));
            return JSON.stringify(res.productos)
            //console.log(res.productos);
        });
    }).catch((err) => {
        console.log("Error al cargar el archivo JSON");
    });
}

if (productos.length === 0){
    getData();
}