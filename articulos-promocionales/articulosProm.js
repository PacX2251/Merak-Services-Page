function categoryChoose(element) {
  var catChosen = element; // Obtener el div padre del enlace
  localStorage.setItem("catChosen", catChosen); // Almacenar el valor en localStorage
}

var catChosen = localStorage.getItem("catChosen");

async function fetchData() {
  try {
    const response = await fetch("http://localhost:3000");
    const data = await response.json();
    empty();
    refreshGrid(catChosen,data);
    
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
  //console.log("Valor: ", data["1_4"].car_1);
}

//empty(data)
//refreshGrid(catChosen);



function refreshGrid(catChosen,data){
  var curArt = [];
  for (var prod = 1; prod <= 12; prod++){
    //Tipo de categoria Para definir el primer digito del articulo
    //cambio de pagina conocer la direccion del cambio sumar o restar 12 segun sea el caso
    var res = catChosen.toString() + "_" + prod.toString();
    curArt.push(res);
  }

  var art = 0;
  var aux = 0;
  var columna = [];
  var mosContainer = document.getElementById("paquetes__mosaico");
  
  //Crear contenido de paquetes mosaico por columna
  for (var i = 1; i <= 4; i++){
    var colum = '<div class="column">';

    //Crear contenido de columna por fila
    var fila = [];
    for (var j = 1; j <= 3; j++){
      aux = aux + 1;
      //Definir si es un paquete s m l
      if(aux===3 || aux===5 || aux===7 || aux===12){
        var size = "paquete s";
      }
      
      else if(aux===1 || aux===6 || aux===8 || aux===10){
        var size = "paquete m";
      }
      
      else if(aux===2 || aux===4 || aux===9 || aux===11){
        var size = "paquete l";
      }
      
      var paq = '<div class="' + size;
      var imgn = '"><img src="./art_img/'+ data[curArt[art].toString()].imagen +'" class="paquete__img" alt="Paquete"/> ';
      var over = '<div class="overlay"> <div class="cont_over">';
      //CIRULOS DE COLORES
      var linea = '<svg xmlns="http://www.w3.org/2000/svg" width="150" height="2" viewBox="0 0 150 2" fill="none"> <path d="M2 2L150 2" stroke="#E6C067" stroke-width="3" /> </svg>';
      var cont = '<h3>'+ data[curArt[art].toString()].producto +'</h3> <p> '+ data[curArt[art].toString()].car_1 +' <br />'+ data[curArt[art].toString()].car_2 +'</p> </div> </div> </div>'; //divs del paquete 
      fila[j] = paq + imgn + over + linea + cont;
      
      
      var numCol = data[curArt[art]].colores.length;
      //console.log(data[curArt[art]].producto,": ",numCol);

      var colArray = [];
      for (var k = 0; k < numCol; k++){
        colArray.push(data[curArt[art]].colores[k].length);
      }

      if (colArray[k] > 1){

      }
      console.log(colArray);

      art = art + 1;
    }
    var finColum = '</div>'; //column paquetes__mosaico
    columna[i] = colum + fila[1] + fila[2] + fila[3] + finColum;
  }

  conFinal = columna[1] + columna[2] + columna[3] + columna[4];
  mosContainer.innerHTML = conFinal;
  art = 0;
}
