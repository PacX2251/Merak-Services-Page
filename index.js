window.addEventListener('scroll', function() {
    var navbar = document.getElementById('navbar__container');
    var scrollPosition = window.scrollY;
    var heightWindow = window.innerHeight;
    var finalHeight = scrollPosition-(heightWindow);

    // Ajusta la clase de la barra de navegación basada en la posición de desplazamiento
    if (finalHeight > -50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});