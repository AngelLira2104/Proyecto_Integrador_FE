// Carga productos de localStorage y los muestra
//const productos = JSON.parse(localStorage.getItem("productos")) || [];

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

async function getData(){
    const requestOptions = {
        method: "GET",
        redirect: "follow"
      };
      
    fetch("/api/productos/", requestOptions)
        .then((response) => response.json())
        //.then((result) => console.log(result))
        .then((result) => {result.forEach( element => { addItem({name:element.nombre,img:element.imagen,description:element.descripcion})})})
        .catch((error) => console.error(error));
}

getData();