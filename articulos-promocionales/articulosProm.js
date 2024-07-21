function categoryChoose(element) {
  var catChosen = element; // Obtener el div padre del enlace
  localStorage.setItem("catChosen", catChosen); // Almacenar el valor en localStorage
}

var catChosen = localStorage.getItem("catChosen");
console.log("Category Chosen:", catChosen);

async function fetchData() {
  try {
    const response = await fetch("http://localhost:3000");
    const data = await response.json();
    console.log("Valor: ", data["1_1"].producto);
    // empty();
    // newCat(data);
  } catch (error) {
    console.error("Error al leer el JSON:", error);
  }
}

// Llamar a la función fetchData
fetchData();

function empty() {
  var mosContainer = document.getElementById("paquetes__mosaico");
  mosContainer.innerHTML = "";
}

