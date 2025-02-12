document.addEventListener("DOMContentLoaded", () => {
    const contenedorProductos = document.querySelector("#productos-container");

 
    const idsDestacados = ["0005", "0002", "0004", "0003", "0001", "0006"];

    fetch("./JSON/productos.json")
        .then(response => {
            if (!response.ok) {
                throw new Error("Error al cargar JSON");
            }
            return response.json();
        })
        .then(data => {
            contenedorProductos.innerHTML = ""; 

          
            const productosDestacados = data.productos.filter(producto => idsDestacados.includes(producto.ID));

            productosDestacados.forEach(producto => {
                const card = `
                    <div class="col">
                        <div class="card h-100">
                            <div class="img-box">
                                <img src="${producto.Imagen}" class="card-img-top img-destacados" alt="${producto.Nombre}">
                            </div>
                            <div class="card-body star-product">
                                <h5 class="card-title" style="color:#AB5A8C"><b>${producto.Nombre}</b></h5>
                                <p class="card-text"><small class="text-body-secondary star-product"><b>Precio:</b> $${producto.PrecioUnitario} MXN</small></p>
                                <p class="card-text"><b>Descripción:</b> ${producto.Descripcion}</p>
                                <a href="#" class="btn btn-primary">Agregar al carrito</a>
                            </div>
                        </div>
                    </div>
                `;
                contenedorProductos.innerHTML += card; 
            });
        })
        .catch(error => console.error("Hubo un error al cargar los productos:", error));
});
