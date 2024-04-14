function captureParentName(element) {
    var chosenPack = element; // Obtener el div padre del enlace
    localStorage.setItem('chosenPack', chosenPack); // Almacenar el valor en localStorage
    console.log("Nombre del paquete elegido:", chosenPack);
  }

  // Recuperar el valor de chosenPack al cargar la página
  var chosenPack = localStorage.getItem('chosenPack');
  console.log("Valor de chosenPack:", chosenPack);