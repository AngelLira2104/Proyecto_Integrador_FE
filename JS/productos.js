function addItem(item) {
    const itemHTML = '<div class="card" style="width: 18rem;">\n' +
        '    <img src="' + item.img + '" class="card-img-top" alt="image">\n' +
        '    <div class="card-body">\n' +
        '        <h5 class="card-title">' + item.name + '</h5>\n' +
        '        <p class="card-text">' + item.description + '</p>\n' +
        '        <a href="#" class="btn btn-primary">Add</a>\n' +
        '    </div>\n' +
        '</div>\n' +
        '<br/>';
    const itemsContainer = document.getElementById("list-items");
    //itemsContainer.innerHTML += itemHTML;
    itemsContainer.insertAdjacentHTML("beforeend", itemHTML);
}

addItem({
    'name': 'Tulipanes',
    'img': 'https://media.admagazine.com/photos/6511419d5e83245788937f4a/1:1/w_2250,h_2250,c_limit/tulipanes-cuidados-historia.jpg',
    'description': 'En el lenguaje de las flores, los tulipanes pueden expresar una gran variedad de emociones, como el amor, la amistad, la alegría, la admiración, la pasión, la pureza, la inocencia, el orgullo, la dignidad, el éxito, entre otras.'
});

addItem({
    'name': 'Gerberas',
    'img': 'https://florescercademi.mx/wp-content/uploads/2022/12/gerberas-rojas.webp',
    'description': 'En el lenguaje de las flores, las gerberas simbolizan alegría, pureza, inocencia, amistad, felicidad y admiración. También pueden expresar la intensidad de los sentimientos.'
});

addItem({
    'name': 'Dalias',
    'img': 'https://content.elmueble.com/medio/2024/06/21/consejos-para-cultivar-dalias-en-maceta-para-que-produzcan-abundantes-flores_898ff993_240621105216_900x900.jpg',
    'description': 'En el lenguaje de las flores, la dalia simboliza la elegancia, la fuerza, la dignidad, la creatividad, la positividad y el crecimiento. También puede representar el amor eterno, la belleza, la bondad y la fuerza interior.'
});

addItem({
    'name': 'Orquideas',
    'img': 'https://verbenaflores.com/cdn/shop/files/OrquideaMorada1-Frontal-Verbena_1a14745e-c76b-40a3-b0d9-9a13bb742180.jpg?v=1714501928&width=1946',
    'description': 'Las orquídeas suelen considerarse un símbolo de feminidad, ya que su delicadeza y refinada belleza se asocian a la belleza femenina. Además, las orquídeas suelen regalarse a las mujeres en ocasiones especiales, como el Día de la Madre, San Valentín o los cumpleaños, simbolizando amor y afecto.'
});

addItem({
    'name': 'Girasoles',
    'img': 'https://ponchycaprico.com/cdn/shop/products/Domo-de-Girasoles--Ponch-_-Caprico.jpg?v=1691270625&width=1445',
    'description': 'En el lenguaje de las flores, el girasol simboliza la felicidad, la alegría, el positivismo, la vitalidad, la energía, la buena suerte, la salud y la esperanza. También puede representar el amor, la admiración, la honestidad y la transparencia.'
});

addItem({
    'name': 'Rosas Rojas',
    'img': 'https://rosaprima.nyc3.cdn.digitaloceanspaces.com/Hot_Paris_Conceptual_View.jpg',
    'description': 'Las rosas rojas simbolizan amor apasionado e intenso, y son un lenguaje universal para expresar sentimientos románticos. También pueden representar respeto y admiración.'
});

addItem({
    'name': 'Hortencias',
    'img': 'https://jardineriasanchez.com/wp-content/uploads/2022/05/hortensias.jpg',
    'description': 'En el lenguaje de las flores, la hortensia puede significar gratitud, comprensión, amor, respeto, admiración, pureza, sinceridad, felicidad, amistad, confianza y paz.'
});

addItem({
    'name': 'Lirios',
    'img': 'https://chapomart.com.mx/2264-large_default/vara-de-lily-blanca-66cm-altura.jpg',
    'description': 'El lirio (Lilium) es una flor que puede tener diferentes significados dependiendo de su color y de la cultura en la que se encuentre. Los lirios blancos simbolizan pureza, inocencia y belleza.'
});

addItem({
    'name': 'Gypsophila',
    'img': 'https://th.bing.com/th/id/OIP.nISjaMuPEpql-3zobZcAFQHaE8?rs=1&pid=ImgDetMain',
    'description': 'La gipsófila simboliza pureza, inocencia y eternidad. En muchas culturas occidentales, es común en bodas y ceremonias religiosas, representando los nuevos comienzos y la infinita pureza del amor.'
});