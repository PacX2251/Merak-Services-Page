// Array de rutas de imágenes
const paths = [
  [
    {
      src: "../img/articulos-promocionales/Termos/1Termo para café-2.0.png",
      size: "m",
      title: "Termo para café",
      content: "Aluminio / 500 ml",
    },
    {
      src: "../img/articulos-promocionales/Termos/1Termo para café.png",
      size: "l",
      title: "Termo para café",
      content: "Aluminio / 500 ml",
    },
    {
      src: "../img/articulos-promocionales/Termos/2Termo23.png",
      size: "s",
      title: "Termo 23",
      content: "Aluminio / 1 L",
    },
  ],

  [
    {
      src: "../img/articulos-promocionales/Termos/3Termo24.png",
      size: "l",
      title: "Termo 24",
      content: "Aluminio / 600 ml",
    },
    {
      src: "../img/articulos-promocionales/Termos/4Termo25.png",
      size: "s",
      title: "Termo 25",
      content: "Aluminio / 800 ml",
    },
    {
      src: "../img/articulos-promocionales/Termos/5Termo26.png",
      size: "m",
      title: "Termo 26",
      content: "Aluminio / 1L",
    },
  ],

  [
    {
      src: "../img/articulos-promocionales/Termos/6Termo29.png",
      size: "s",
      title: "Termo 29",
      content: "Aluminio / 500 ml",
    },
    {
      src: "../img/articulos-promocionales/Termos/7Termo33.png",
      size: "l",
      title: "Termo 33",
      content: "Aluminio / 1 L",
    },
    {
      src: "../img/articulos-promocionales/Termos/8Termo40.png",
      size: "m",
      title: "Termo 40",
      content: "Aluminio / 1 L",
    },
  ],

  [
    {
      src: "../img/articulos-promocionales/Termos/9Termo58.png",
      size: "m",
      title: "Termo 58",
      content: "Aluminio / 500 ml",
    },
    {
      src: "../img/articulos-promocionales/Termos/10Termo 59.png",
      size: "l",
      title: "Termo 59",
      content: "Aluminio / 800 ml",
    },
    {
      src: "../img/articulos-promocionales/Termos/10Termo 59.png",
      size: "s",
      title: "Termo 59",
      content: "Aluminio / 800 ml",
    },
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
    const { src, size, title, content } = packageData; // Destructure title and content from packageData

    const packageElement = document.createElement("div");
    packageElement.classList.add("paquete", size);

    const img = document.createElement("img");
    img.src = src;
    img.classList.add("paquete__img");
    img.alt = title;
    packageElement.appendChild(img);

    const overlay = document.createElement("div");
    overlay.classList.add("overlay");
    packageElement.appendChild(overlay);
    // Crear y agregar contenedor de overlay
    const cont_over = document.createElement("div");
    cont_over.classList.add("cont_over");
    overlay.appendChild(cont_over);

    // Crear y agregar SVG para la línea horizontal
    const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    svg.setAttribute("width", "150");
    svg.setAttribute("height", "2");
    svg.setAttribute("viewBox", "0 0 150 2");
    svg.setAttribute("fill", "none");
    cont_over.appendChild(svg);

    const svg_path = document.createElementNS(
      "http://www.w3.org/2000/svg",
      "path"
    );
    svg_path.setAttribute("d", "M2 2L150 2");
    svg_path.setAttribute("stroke", "#E6C067");
    svg_path.setAttribute("stroke-width", "3");
    svg.appendChild(svg_path);
    // Crear y agregar título (h3)
    const h3 = document.createElement("h3");
    h3.textContent = title || "Titulo"; // Insertar texto del título
    cont_over.appendChild(h3);

    // Crear y agregar contenido (p)
    const p = document.createElement("p");
    p.textContent = content || "Contenido"; // Insertar texto del contenido
    cont_over.appendChild(p);

    return packageElement;
  };

  // const createLink = () => {
  //   const link = document.createElement("a");
  //   link.href = "../catalogo/catalogo.html";
  //   return link;
  // };

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
}

// Cargar imágenes cuando el DOM esté listo
document.addEventListener("DOMContentLoaded", loadImages);
