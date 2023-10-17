// Función para cargar y mostrar el encabezado
function cargarEncabezado() {
    var xhr = new XMLHttpRequest();
    xhr.open("GET", "./html/header.html", true);

    xhr.onreadystatechange = function() {
        if (xhr.readyState === 4 && xhr.status === 200) {
            document.getElementById("header").innerHTML = xhr.responseText;
        }
    };

    xhr.send();
}

// Función para cargar y mostrar el contenido principal
function cargarContenidoPrincipal() {
    var xhr = new XMLHttpRequest();
    xhr.open("GET", "./html/principal.html", true);

    xhr.onreadystatechange = function() {
        if (xhr.readyState === 4 && xhr.status === 200) {
            document.getElementById("main").innerHTML = xhr.responseText;
        }
    };

    xhr.send();
}

// Función para cargar y mostrar el encabezado
function cargarSecHombre() {
    var xhr = new XMLHttpRequest();
    xhr.open("GET", "./html/seccionHombre", true);

    xhr.onreadystatechange = function() {
        if (xhr.readyState === 4 && xhr.status === 200) {
            document.getElementById("secHombre").innerHTML = xhr.responseText;
        }
    };

    xhr.send();
}

// Función para cargar y mostrar el pie de página
function cargarPieDePagina() {
    var xhr = new XMLHttpRequest();
    xhr.open("GET", "./html/footer.html", true);

    xhr.onreadystatechange = function() {
        if (xhr.readyState === 4 && xhr.status === 200) {
            document.getElementById("footer").innerHTML = xhr.responseText;
        }
    };

    xhr.send();
}

// Llama a las funciones para cargar el encabezado, el contenido principal y el pie de página
cargarEncabezado();
cargarContenidoPrincipal();
cargarPieDePagina();
cargarSecHombre();