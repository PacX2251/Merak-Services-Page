// Array de rutas de imágenes
const paths = [
  [
    { src: "../img/regalos-corporativos/rc1donas.jpeg", size: "m" },
    { src: "../img/regalos-corporativos/rc2vino.jpeg", size: "l" },
    { src: "../img/regalos-corporativos/rc3velas.jpeg", size: "s" },
  ],

  [
    { src: "../img/regalos-corporativos/rc4botana.jpeg", size: "l" },
    { src: "../img/regalos-corporativos/rc7vino.png", size: "s" },
    { src: "../img/regalos-corporativos/rc5chocolates.jpeg", size: "m" },
  ],

  [
    { src: "../img/regalos-corporativos/rc8chocolates.jpeg", size: "s" },
    { src: "../img/regalos-corporativos/rc6regalos.png", size: "l" },
    { src: "../img/regalos-corporativos/rc11velas.jpeg", size: "m" },
  ],

  [
    { src: "../img/regalos-corporativos/rc10botana.jpeg", size: "m" },
    { src: "../img/regalos-corporativos/rc9vinox.jpeg", size: "l" },
    { src: "../img/regalos-corporativos/rc12donas.jpeg", size: "s" },
  ],
];

// Función para cargar las imágenes en el carrusel
function loadImages() {
  const carousel = document.querySelector(".carousel-inner");

  // Crear elemento de carrusel
  const newItem = document.createElement("div");
  newItem.classList.add("carousel-item");
  carousel.appendChild(newItem);

  // Funciones auxiliares
  const createPackage = (packageData) => {
    const { src, size } = packageData;
    const packageElement = document.createElement("div");
    packageElement.classList.add("paquete", size);
    const img = document.createElement("img");
    img.src = src;
    img.classList.add("paquete__img");
    img.alt = "Paquete";
    packageElement.appendChild(img);
    return packageElement;
  };

  const createLink = () => {
    const link = document.createElement("a");
    link.href = "../catalogo/catalogo.html";
    return link;
  };

  // Crear estructura y poblar con paquetes
  const giftsContainer = document.createElement("div");
  giftsContainer.classList.add("gifts__container");
  newItem.appendChild(giftsContainer);

  const giftsContainerEffect = document.createElement("div");
  giftsContainerEffect.classList.add("gifts__container__effect");
  giftsContainer.appendChild(giftsContainerEffect);

  const paquetesMosaico = document.createElement("div");
  paquetesMosaico.classList.add("paquetes__mosaico");
  giftsContainerEffect.appendChild(paquetesMosaico);

  // Iterar sobre las columnas y crear paquetes
  for (const columnData of paths) {
    const column = document.createElement("div");
    column.classList.add("column");
    paquetesMosaico.appendChild(column);

    for (const packageData of columnData) {
      const packageElement = createPackage(packageData);
      column.appendChild(packageElement);
    }
  }

  // Agregar paquetes en el orden especificado
}

// Cargar imágenes cuando el DOM esté listo
document.addEventListener("DOMContentLoaded", loadImages);
