// Carga productos de localStorage y los muestra
const productos = JSON.parse(localStorage.getItem("productos")) || [];
productos.forEach(producto => {
    addItem({
        name: producto.Nombre,
        img: producto.Imagen,
        description: producto.Descripcion
    });
});

function addItem(item) {
    const itemHTML = `
        <div class="card" style="width: 18rem;">
            <img src="${item.img}" class="card-img-top" alt="image">
            <div class="card-body">
                <h5 class="card-title">${item.name}</h5>
                <p class="card-text">${item.description}</p>
                <a href="#" class="btn btn-primary">Add</a>
            </div>
        </div>
        <br/>
    `;
    const itemsContainer = document.getElementById("list-items");
    itemsContainer.insertAdjacentHTML("beforeend", itemHTML);
}