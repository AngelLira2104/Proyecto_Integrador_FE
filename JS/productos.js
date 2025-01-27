// Carga productos de localStorage y los muestra
const productos = JSON.parse(localStorage.getItem("productos")) || [];

function addItem(item) {
    const itemHTML = `
    <div class="card" style="width: 18rem;">
        <img src="${item.img}" class="card-img-top" alt="image">
        <div class="card-body">
            <h5 class="card-title">${item.name}</h5>
            <p class="card-text">${item.description}</p>
            <a href="#" class="btn">Comprar</a>
        </div>
    </div>
    <br/>
`;
    const itemsContainer = document.getElementById("list-items");
    itemsContainer.insertAdjacentHTML("beforeend", itemHTML);
}

function getData(){
    fetch('../JSON/productos.json').then((response) => {
        response.json().then((res) => {
            localStorage.setItem("productos", JSON.stringify(res.productos));
            //console.log(res.productos);
        });
    }).catch((err) => {
        console.log("Error al cargar el archivo JSON");
    });
}

if (productos.length === 0){
    getData();
} 

productos.forEach(producto => {
    addItem({
        name: producto.Nombre,
        img: producto.Imagen,
        description: producto.Descripcion
    });
});
