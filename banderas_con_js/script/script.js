//Arreglo con paises iniciales
const paises = [
    {
        nombre: "Guatemala",
        bandera: "https://bit.ly/3Bwr2rm",
        capital: "Ciudad de Guatemala",
        idioma_oficial: "Español",
        moneda: "Quetzal"
    },
    {
        nombre: "Argentina",
        bandera: "https://bit.ly/3BEJC0y",
        capital: "Buenos Aires",
        idioma_oficial: "Español",
        moneda: "Peso"
    },
    {
        nombre: "Francia",
        bandera: "https://bit.ly/3HFZ7t5",
        capital: "Paris",
        idioma_oficial: "Frances",
        moneda: "Euro"
    },
    {
        nombre: "El Salvador",
        bandera: "https://bit.ly/3uRN5F6",
        capital: "San Salvador",
        idioma_oficial: "Español",
        moneda: "Dolar"
    },
    {
        nombre: "Honduras",
        bandera: "https://bit.ly/3UWcrMM",
        capital: "Tegucigalpa",
        idioma_oficial: "Español",
        moneda: "Lempira"
    }
];

agregarMonitores();

//funcion para agregar listeners a los botones
function agregarMonitores() {

    document.getElementById("mostrarPaises").addEventListener("click", mostrarPaises);

    document.getElementById("agregarPais").addEventListener("click", agregarPais);

}


//funcion que mostrara las paises en la pagina
function mostrarPaises() {
    // Obtener la referencia del elemento body
    var body = document.getElementsByTagName("body")[0];
    
    //Se valida si ya existe la tabla, si existe la remueve
    var existeTabla = !!document.getElementById("tbl_paises");
    if(existeTabla == true)
    {
        document.getElementById("tbl_paises").remove();
    }
    

    // Crea un elemento <table> y un elemento <tbody>
    var tabla   = document.createElement("table");
    var tblBody = document.createElement("tbody");
    tabla.id="tbl_paises"

    tabla.className = "table table-dark";
    // Crea las celdas

    let tamanio = paises.length;
    //alert(tamanio);
    for (var i = 0; i < tamanio; i++) {
        // Crea las hileras de la tabla
        var hilera = document.createElement("tr");

        var celda = document.createElement("td");
        var textoCelda = document.createTextNode("Nombre: ");
        celda.appendChild(textoCelda);
        hilera.appendChild(celda);
        var celda = document.createElement("td");
        var textoCelda = document.createTextNode("Capital: ");
        celda.appendChild(textoCelda);
        hilera.appendChild(celda);
        var celda = document.createElement("td");
        var textoCelda = document.createTextNode("Idioma: ");
        celda.appendChild(textoCelda);
        hilera.appendChild(celda);
        var celda = document.createElement("td");
        var textoCelda = document.createTextNode("Moneda: ");
        celda.appendChild(textoCelda);
        hilera.appendChild(celda);

        // agrega la hilera al final de la tabla (al final del elemento tblbody)
        tblBody.appendChild(hilera);
        var hilera = document.createElement("tr");

        var celda = document.createElement("td");
        var textoCelda = document.createTextNode(paises[i].nombre);
        celda.appendChild(textoCelda);
        hilera.appendChild(celda);
        var celda = document.createElement("td");
        var textoCelda = document.createTextNode(paises[i].capital);
        celda.appendChild(textoCelda);
        hilera.appendChild(celda);
        var celda = document.createElement("td");
        var textoCelda = document.createTextNode(paises[i].idioma_oficial);
        celda.appendChild(textoCelda);
        hilera.appendChild(celda);
        var celda = document.createElement("td");
        var textoCelda = document.createTextNode(paises[i].moneda);
        celda.appendChild(textoCelda);
        hilera.appendChild(celda);

        // agrega la hilera al final de la tabla (al final del elemento tblbody)
        tblBody.appendChild(hilera);
        var hilera = document.createElement("tr");

        var celda = document.createElement("td");
        celda.colSpan = "4";
        celda.style.textAlign = "center"
        var img = document.createElement('img');
        img.src = paises[i].bandera;
        
        celda.appendChild(img);
        hilera.appendChild(celda);

        // agrega la hilera al final de la tabla (al final del elemento tblbody)
        tblBody.appendChild(hilera);
    }

    // posiciona el <tbody> debajo del elemento <table>
    tabla.appendChild(tblBody);
    // appends <table> into <body>
    body.appendChild(tabla);

}

//funcion que permite agregar un pais al arreglo
function agregarPais() {

    //Solicitar informacion del nuevo pais
    let nombre = prompt("¿Cual es el nombre del país?");
    let capital = prompt("¿Cual es la capital del país?");
    let idioma = prompt("¿Cual es el idioma del país?");
    let moneda = prompt("¿Cual es la moneda del país?");
    let imagen = prompt("¿Cual es la bandera del país?");

    console.log(typeof(nombre));
    //Se valida que todos los datos hayan sido ingresados por el usuario
    if(nombre != "" && capital != "" && idioma != "" && moneda != "" && imagen != "" && nombre != null && capital != null && idioma != null && moneda != null && imagen != null )
    {
        paises.unshift({nombre: nombre, capital: capital, idioma_oficial: idioma, moneda: moneda, bandera: imagen});
        mostrarPaises();
    }
    else
    {
        alert("Por favor ingrese todos los datos solicitados");
    }

}
