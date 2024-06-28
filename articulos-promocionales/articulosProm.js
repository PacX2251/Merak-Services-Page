function categoryChoose(element) {
  var catChosen = element; // Obtener el div padre del enlace
  localStorage.setItem('catChosen', catChosen); // Almacenar el valor en localStorage
}

var catChosen = localStorage.getItem('catChosen');
console.log("Category Chosen:", catChosen);

fetch('http://localhost:8000/Users/pacor/OneDrive/Documentos/MerakPagina/MerakPage/articulos-promocionales/productos.json')
    .then(response => response.json())
    .then(data => {
      console.log(data);
      empty();
      newCat(data);
    })

    .catch(error => {
        console.error('Error al leer el JSON:', error);
    });


function empty(){
  var mosContainer = document.getElementById('paquetes__mosaico');
  mosContainer.innerHTML = '';
}

function newCat(data){
  for (const id in data){
    console.log("Valor: ",data[id]);
  }
    

}