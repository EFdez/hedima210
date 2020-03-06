//construir divs de resultados pasándoles los parámetros nuevos
//crear plantilla de elementos
var xhr = new XMLHttpRequest();
const URL = "https://itunes.apple.com/search/?media=music&term=";


function buscar() {
    let busqueda = document.getElementById("inBusqueda").value;
    console.log(busqueda);
    enviarDatos(busqueda);


}

function enviarDatos(termino_busqueda) {
    var busqueda = encodeURI(termino_busqueda);
    console.log(busqueda);

    URL_total = URL + busqueda;
    console.log(URL_total);

    xhr.onreadystatechange = procesarEventos;
    xhr.open('GET', URL_total, true);
    xhr.setRequestHeader('Content-Type', 'text/plain; charset=utf-8');
    xhr.send();
}

function procesarEventos() {
    if (xhr.readyState === 4) {
        console.log("La comunicación ha terminado con estatus: " + xhr.status);
        if (xhr.status === 200) {
            console.log("La comunicación ha terminado");
            console.log("Cuerpo de la respuesta " + xhr.responseText);
            convertirJSON(xhr.responseText);
        }
    }
}

function convertirJSON(respuesta_str) {
    var resultados = JSON.parse(respuesta_str); //DESERIALIZAR
    console.log(resultados);

   	//console.log(resultados.results[0].previewUrl);

    pintar(resultados);

}

function pintar(resultados) {

    console.log(resultados.results[0].artistName);

    document.getElementsByClassName("elartista")[0].innerHTML = resultados.results[0].artistName;
    document.getElementsByClassName("elcancion")[0].innerHTML = resultados.results[0].trackName;
    document.getElementsByClassName("eldisco")[0].innerHTML = resultados.results[0].collectionName;
    document.getElementsByClassName("elimagen")[0].src = resultados.results[0].artworkUrl100;
    let elementoaudiosource = document.getElementsByClassName("elaudio")[0];
    console.log ("src viejo " + elementoaudiosource.src);
    console.log ("nueva previewUrl = " + resultados.results[0].previewUrl);
    elementoaudiosource.setAttribute("src",resultados.results[0].previewUrl);
    console.log ("src nuevo " + elementoaudiosource.src);



}

//para introducirse en un obj:
//resultados.results[0].artistName.

//contemplar la posibilidad de que un artista, el pobre, no tenga resultados

//Pintar resultados de:
//-Autor --> artistName
//-Canción --> trackName
//-Disco --> collectionName
//-Portada --> artworkUrl100
//-Musiquilla --> previewUrl