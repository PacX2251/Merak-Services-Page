function captureParentName(element) {
    var chosenPack = element; // Obtener el div padre del enlace
    localStorage.setItem('chosenPack', chosenPack); // Almacenar el valor en localStorage
    console.log("Nombre del paquete elegido:", chosenPack);
  }

  // Recuperar el valor de chosenPack al cargar la página
  var chosenPack = localStorage.getItem('chosenPack');
  console.log("Valor de chosenPack:", chosenPack);
  cargarGrid(chosenPack);
  
 

  function cargarGrid(productoIndex) {
     // Base de datos
    let packing;
    packing = {
      p1: {
        "id": 1,
        "nombre": "Paquete 1",
        "descripcion": "Descripción del Paquete 1.",
        "imagenes": [
          "../img/regalos-corporativos/paquete1/p1_1.jpeg",
          "../img/regalos-corporativos/paquete1/p1_2.jpeg",
          "../img/regalos-corporativos/paquete1/p1_3.jpeg",
          "../img/regalos-corporativos/paquete1/p1_4.jpeg",
          "../img/regalos-corporativos/paquete1/p1_5.jpeg",
        ],
      },
      p2: {
        "id": 2,
        "nombre": "Paquete 2",
        "descripcion": "Descripción del Paquete 2.",
        "imagenes": [
          "../img/regalos-corporativos/paquete2/p2_1.jpeg",
          "../img/regalos-corporativos/paquete2/p2_2.jpeg",
          "../img/regalos-corporativos/paquete2/p2_3.jpeg",
          "../img/regalos-corporativos/paquete2/p2_4.jpeg",
          "../img/regalos-corporativos/paquete2/p2_5.jpeg",
        ],
      },
      p3: {
        "id": 3,
        "nombre": "Paquete 3",
        "descripcion": "Descripción del Paquete 3.",
        "imagenes": [
          "../img/regalos-corporativos/paquete3/p3_1.jpeg",
          "../img/regalos-corporativos/paquete3/p3_2.jpeg",
          "../img/regalos-corporativos/paquete3/p3_3.jpeg",
          "../img/regalos-corporativos/paquete3/p3_4.jpeg",
          "../img/regalos-corporativos/paquete3/p3_5.jpeg",
        ],
      },
      p4: {
        "id": 4,
        "nombre": "Paquete 4",
        "descripcion": "Descripción del Paquete 4.",
        "imagenes": [
          "../img/regalos-corporativos/paquete4/p4_1.jpeg",
          "../img/regalos-corporativos/paquete4/p4_2.jpeg",
          "../img/regalos-corporativos/paquete4/p4_3.jpeg",
          "../img/regalos-corporativos/paquete4/p4_4.jpeg",
          "../img/regalos-corporativos/paquete4/p4_5.jpeg",
        ],
      },
      p5: {
        "id": 5,
        "nombre": "Paquete 5",
        "descripcion": "Descripción del Paquete 5.",
        "imagenes": [
          "../img/regalos-corporativos/paquete5/p5_1.jpeg",
          "../img/regalos-corporativos/paquete5/p5_2.jpeg",
          "../img/regalos-corporativos/paquete5/p5_3.jpeg",
          "../img/regalos-corporativos/paquete5/p5_4.jpeg",
          "../img/regalos-corporativos/paquete5/p5_5.jpeg",
        ],
      },
      p6: {
        "id": 6,
        "nombre": "Paquete 6",
        "descripcion": "Descripción del Paquete 6.",
        "imagenes": [
          "../img/regalos-corporativos/paquete6/p6_1.jpeg",
          "../img/regalos-corporativos/paquete6/p6_2.jpeg",
          "../img/regalos-corporativos/paquete6/p6_3.jpeg",
          "../img/regalos-corporativos/paquete6/p6_4.jpeg",
          "../img/regalos-corporativos/paquete6/p6_5.jpeg",
        ],
      },
      p7: {
        "id": 7,
        "nombre": "Paquete 7",
        "descripcion": "Descripción del Paquete 7.",
        "imagenes": [
          "../img/regalos-corporativos/paquete7/p7_1.jpeg",
          "../img/regalos-corporativos/paquete7/p7_2.jpeg",
          "../img/regalos-corporativos/paquete7/p7_3.jpeg",
          "../img/regalos-corporativos/paquete7/p7_4.jpeg",
          "../img/regalos-corporativos/paquete7/p7_5.jpeg",
        ],
      },
      p8: {
        "id": 8,
        "nombre": "Paquete 8",
        "descripcion": "Descripción del Paquete 8.",
        "imagenes": [
          "../img/regalos-corporativos/paquete8/p8_1.jpeg",
          "../img/regalos-corporativos/paquete8/p8_2.jpeg",
          "../img/regalos-corporativos/paquete8/p8_3.jpeg",
          "../img/regalos-corporativos/paquete8/p8_4.jpeg",
          "../img/regalos-corporativos/paquete8/p8_5.jpeg",
        ],
      },
      p9: {
        "id": 9,
        "nombre": "Paquete 9",
        "descripcion": "Descripción del Paquete 9.",
        "imagenes": [
          "../img/regalos-corporativos/paquete9/p9_1.jpeg",
          "../img/regalos-corporativos/paquete9/p9_2.jpeg",
          "../img/regalos-corporativos/paquete9/p9_3.jpeg",
          "../img/regalos-corporativos/paquete9/p9_4.jpeg",
          "../img/regalos-corporativos/paquete9/p9_5.jpeg",
        ],
      },
      p10: {
        "id": 10,
        "nombre": "Paquete 10",
        "descripcion": "Descripción del Paquete 10.",
        "imagenes": [
          "../img/regalos-corporativos/paquete10/p10_1.jpeg",
          "../img/regalos-corporativos/paquete10/p10_2.jpeg",
          "../img/regalos-corporativos/paquete10/p10_3.jpeg",
          "../img/regalos-corporativos/paquete10/p10_4.jpeg",
          "../img/regalos-corporativos/paquete10/p10_5.jpeg",
        ],
      },
      p11: {
        "id": 11,
        "nombre": "Paquete 11",
        "descripcion": "Descripción del Paquete 11.",
        "imagenes": [
          "../img/regalos-corporativos/paquete11/p11_1.jpeg",
          "../img/regalos-corporativos/paquete11/p11_2.jpeg",
          "../img/regalos-corporativos/paquete11/p11_3.jpeg",
          "../img/regalos-corporativos/paquete11/p11_4.jpeg",
          "../img/regalos-corporativos/paquete11/p11_5.jpeg",
        ],
      },
      p12: {
        "id": 12,
        "nombre": "Paquete 12",
        "descripcion": "Descripción del Paquete 12.",
        "imagenes": [
          "../img/regalos-corporativos/paquete12/p12_1.jpeg",
          "../img/regalos-corporativos/paquete12/p12_2.jpeg",
          "../img/regalos-corporativos/paquete12/p12_3.jpeg",
          "../img/regalos-corporativos/paquete12/p12_4.jpeg",
          "../img/regalos-corporativos/paquete12/p12_5.jpeg",
        ],
      },
    }

    var ruteContainer = document.getElementById('navRute');
    ruteContainer.innerHTML = '';
    var ruteItem = document.createElement('div');
    ruteItem.classList.add('navRute')
    ruteItem.innerHTML = '<h3>Catalogo > Regalos Corporativos > ' + packing[productoIndex].nombre + '</h3>'
    ruteContainer.appendChild(ruteItem);

    var gridContainer = document.getElementById('paquete_seleccion');
    gridContainer.innerHTML = '';
    
    var descContainer = document.getElementById('desc_seleccion');
    descContainer.innerHTML = '';
    var descItem = document.createElement('div');
    descItem.classList.add('desc_seleccion')
    descItem.innerHTML = '<h2>'+ packing[productoIndex].nombre +'</h2><p>'+ packing[productoIndex].descripcion +'</p>'
    descContainer.appendChild(descItem);
  
    for (var i = 0; i < packing[productoIndex].imagenes.length; i++) {
      var imagenUrl = packing[productoIndex].imagenes[i];
      var gridItem = document.createElement('div');
      gridItem.classList.add('pic');
      if (i === 0){
        gridItem.classList.add('uno');
        gridItem.innerHTML = '<img src="' + imagenUrl + '" alt="Imagen ' + (i + 1) + '" id="imagen' + (i + 1) + '">'; // Agregar la imagen al grid        
      }
      if (i > 0){
        gridItem.classList.add('more');
        gridItem.innerHTML = '<img src="' + imagenUrl + '" alt="Imagen ' + (i + 1) + '" id="imagen' + (i + 1) + '" onclick="actualizarImagen(\'' + imagenUrl + '\')">'; // Agregar la imagen al grid
      }
      
      
      gridContainer.appendChild(gridItem);
    }
  }

function actualizarImagen(nuevaImagen) {
  var imagen1 = document.getElementById('imagen1');
  imagen1.src = nuevaImagen;
}