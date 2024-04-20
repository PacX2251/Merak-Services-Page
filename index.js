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

let currentIndex = 0;
const images = [
    'img/testing carrousell/sandwich.png',
    'img/testing carrousell/taza.png',
    'img/testing carrousell/vino.png',
    'img/testing carrousell/libreta.png',
    'img/testing carrousell/fruta.png',
    'img/testing carrousell/sandwich.png',
    'img/testing carrousell/taza.png',
    // add more images as needed
];
const carousel = document.getElementById('carousel');

function loadImages() {
    images.forEach(src => {
        const img = document.createElement('img');
        img.src = src;
        carousel.appendChild(img);
    });
}

function moveCarousel(direction) {
    const totalImages = images.length;
    currentIndex += direction;
    if (currentIndex >= totalImages) {
        currentIndex = 0;
    } else if (currentIndex < 0) {
        currentIndex = totalImages - 1;
    }
    carousel.style.transform = `translateX(${-451 * currentIndex}px)`;
}

document.addEventListener('DOMContentLoaded', loadImages);