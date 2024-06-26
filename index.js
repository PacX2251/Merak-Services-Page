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

$(document).ready(function(){
    $(".owl-carousel").owlCarousel({
        loop: true, // Bucle infinito
        margin: 0,
        nav: true, // Habilita la navegación
        dots: false,
        navText: [
            '<i class="fa fa-chevron-left"></i>',
            '<i class="fa fa-chevron-right"></i>'
        ], // Usa Font Awesome para los iconos de las flechas
        responsive:{
            0:{
                items:1
            },
            600:{
                items:3
            },
            1000:{
                items:5
            }
        }
    });
});