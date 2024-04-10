function obtenerParametroUrl(nombre) {
    nombre = nombre.replace(/[[]/, '\\[').replace(/[\]]/, '\\]');
    var regex = new RegExp('[\\?&]' + nombre + '=([^&#]*)');
    var resultados = regex.exec(location.search);
    return resultados === null ? '' : decodeURIComponent(resultados[1].replace(/\+/g, ' '));
}

// Función para obtener el título del producto desde el parámetro de la URL
function obtenerTituloProducto() {
    var parametroProducto = obtenerParametroUrl('producto');
    // Aquí puedes tener un mapeo de ID de producto a título real
    // Por simplicidad, utilizaremos una simple lógica para el ejemplo
    var tituloProducto = "Catalogo > Regalos Corporativos" /*+ parametroProducto*/;
    return tituloProducto;
}

// Función para mostrar la ruta de navegación
function mostrarRutaNavegacion() {
    var tituloProducto = obtenerTituloProducto();
    var nuevoElementoLista = document.createElement("li");
    nuevoElementoLista.textContent = tituloProducto;
    document.getElementById("listaPaginasVisitadas").appendChild(nuevoElementoLista);
}

// Función para mostrar los detalles del producto
function mostrarDetalleProducto() {
    var tituloProducto = obtenerTituloProducto();
    document.getElementById("tituloProducto").textContent = tituloProducto;
}

// Ejecutar las funciones al cargar la página
window.onload = function() {
    mostrarRutaNavegacion();
    mostrarDetalleProducto();
};