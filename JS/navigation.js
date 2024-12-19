const urlLogo = new URL(location.origin+'/'+'IMG/LogoJardinDeFlores.webp');
const urlIndex = new URL(location.origin+'/'+'index.html');
const urlAbout = new URL(location.origin+'/'+'HTML/about.html');
const urlContact = new URL(location.origin+'/'+'HTML/contacto.html');
const urlProductos = new URL(location.origin+'/'+'HTML/edicionProducto.html');


window.addEventListener("load", function(event){
    try {
        const mainNavigation = document.getElementById("main-navbar");
        const secondaryNavigation = document.getElementById("secondary-navbar");
        const pageFooter = document.getElementById("general-footer");

        let mainNavContent = `<div class="container-fluid">
            <a class="navbar-brand" href="./index.html">
                <!-- The logo image doesn't seem to fit right maybe try to change the width and height properties or change the logo -->
                <img src="${urlLogo.pathname}" alt="Logo" width="58" height="48" class="d-inline-block align-text-top">
            </a>
            <h1 id="titulo-logo">El Jardín Floral</h1>
            <!-- The button with class navbar-toggler and its span are elements only visible when the menu collapses when the viewport reduces its size-->
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <!-- The elements of the navigation bar begin here -->
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0 mx-auto p-2">
                    <li class="nav-item">
                        <a class="nav-link active main-nav-link" aria-current="page" href="${urlIndex.pathname}">Inicio</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link main-nav-link" href="${urlAbout.pathname}">Acerca de Nosotros</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link main-nav-link" href="${urlContact.pathname}">Contáctanos</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link main-nav-link" href="${urlProductos.pathname}">Productos</a>
                    </li>
                </ul>
                <span class="navbar-text">
                    <ul>
                        <li class="nav-item">
                            <a href="#" class="nav-link main-nav-link">Iniciar sesión</a>
                        </li>
                    </ul>
                </span>
            </div>
        </div>`;
        let secondaryNavContent = `<li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle secondary-nav-dropmenu" data-bs-toggle="dropdown" href="#" role="button" aria-expanded="false">Flores</a>
            <ul class="dropdown-menu">
              <li><a class="dropdown-item" href="#">Rosas</a></li>
              <li><a class="dropdown-item" href="#">Tulipanes</a></li>
              <li><a class="dropdown-item" href="#">Orquideas</a></li>
              <li><a class="dropdown-item" href="#">Girasoles</a></li>
              <li><hr class="dropdown-divider"></li>
              <li><a class="dropdown-item" href="#">Otras</a></li>
            </ul>
        </li>
        <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle secondary-nav-dropmenu" data-bs-toggle="dropdown" href="#" role="button" aria-expanded="false">Descuentos</a>
            <ul class="dropdown-menu">
              <li><a class="dropdown-item" href="#">De temporada</a></li>
              <li><a class="dropdown-item" href="#">Locales</a></li>
              <li><hr class="dropdown-divider"></li>
              <li><a class="dropdown-item" href="#">Ultimas existencias</a></li>
            </ul>
        </li>
        <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle secondary-nav-dropmenu" data-bs-toggle="dropdown" href="#" role="button" aria-expanded="false">Eventos</a>
            <ul class="dropdown-menu">
              <li><a class="dropdown-item" href="#">Boda</a></li>
              <li><a class="dropdown-item" href="#">Baby shower</a></li>
              <li><a class="dropdown-item" href="#">Cumpleaños</a></li>
              <li><a class="dropdown-item" href="#">Primera comunión</a></li>
              <li><hr class="dropdown-divider"></li>
              <li><a class="dropdown-item" href="#">Personalizados</a></li>
            </ul>
        </li>
        <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle secondary-nav-dropmenu" data-bs-toggle="dropdown" href="#" role="button" aria-expanded="false">Ramos</a>
            <ul class="dropdown-menu">
              <li><a class="dropdown-item" href="#">Colección San Valentin</a></li>
              <li><a class="dropdown-item" href="#">Colección Aniversario</a></li>
              <li><a class="dropdown-item" href="#">Colección Navidad</a></li>
              <li><a class="dropdown-item" href="#">Colección Año Nuevo</a></li>
              <li><hr class="dropdown-divider"></li>
              <li><a class="dropdown-item" href="#">Personalizados</a></li>
            </ul>
        </li>`;
        let footerContent = `<div class="container">
            <div class="row">
                <div class="col-md-3">
                    <!-- Footer content 1 Social Media Content-->
                    <p class="footer-content-title">El Jardín Floral</p>
                    <p>Síguenos en: </p>
                    <a href="#" class="bi bi-twitter-x"></a>
                    <a href="#" class="bi bi-facebook"></a>
                    <a href="#" class="bi bi-instagram"></a>
                </div>
                <div class="col-md-3 footer-content">
                    <!-- Footer content 2 Product Content-->
                    <p class="footer-content-title">Productos</p>
                    <ul class="list-unstyled">
                        <li><a class="footer-link" href="#">Nueva Temporada</a></li>
                        <li><a class="footer-link" href="#">Los Favoritos</a></li>
                        <li><a class="footer-link" href="#">Ramos</a></li>
                        <li><a class="footer-link" href="#">Eventos</a></li>
                    </ul>
                </div>
                <div class="col-md-3 footer-content">
                    <!-- Footer content 3 Company Content-->
                    <p class="footer-content-title">Empresa</p>
                    <ul class="list-unstyled">
                        <li><a class="footer-link" href="#">Contáctanos</a></li>
                        <li><a class="footer-link" href="#">Nosotros</a></li>
                        <li><a class="footer-link" href="#">Nuestro servicios</a></li>
                        <li><a class="footer-link" href="#">Políticas de privacidad</a></li>
                    </ul>
                </div>
                <div class="col-md-3 footer-content">
                    <!-- Footer content 4 Support Content-->
                    <p class="footer-content-title">Soporte</p>
                    <ul class="list-unstyled">
                        <li><a class="footer-link" href="#">Preguntas</a></li>
                        <li><a class="footer-link" href="#">Compras</a></li>
                        <li><a class="footer-link" href="#">Envíos</a></li>
                    </ul>
                </div>
            </div>
        </div>`;
        if (mainNavigation != null){
            mainNavigation.insertAdjacentHTML("beforeend", mainNavContent);
        }
        if (secondaryNavigation != null){
            secondaryNavigation.insertAdjacentHTML("beforeend", secondaryNavContent);
        }
        if (pageFooter != null){
            pageFooter.insertAdjacentHTML("beforeend",footerContent);
        }
    } catch (error) {
        //No mostrar el error en la consola
        console.log(error)
    }
});