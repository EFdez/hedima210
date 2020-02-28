/*dibujarCarton()
rellenarCarton()
dibujarTapados()
Bucle:
sacarBola()
comprobar()*/
window.onload = funciones;

function funciones() {
    dibujarCarton();
    rellenarCarton();
    dibujarTapados();
    cartonLuisa();
    array_no = numerosFueraCarton(num_carton);
    console.log("N arra: " + array_no);
    //deMenorAMayor();
};
const MAX_FILAS = 3;
const MAX_COLUMNAS = 9;
var num_carton = [];

function deMenorAMayor(a, b) {
    let numero_devuelto;
    if (a > b) {
        numero_devuelto = 1;
    } else if (b > a) {
        numero_devuelto = -1;
    } else {
        numero_devuelto = 0;
    }
    return numero_devuelto;


}

//Hacer una función que devuelva un array 
//con los números que no forman parte del cartón
function numerosFueraCarton(numeros_carton) {

    let array_diferencia = [];

    //Con filtro, sacando la diferencia entre la comparación de dos arrays
    //Sacar array [1,90]
    /*let total_numeros = [];
      for (var i = 1; i <= 90; i++) {
           total_numeros[i] = i;}
       console.log("Numeros hasta el 90: " + total_numeros)
        //Filtrar dif entre los arrays
       array_diferencia = total_numeros.filter(x => !num_carton.includes(x));
       return array_diferencia;*/

    // Recorrer array total en cada vuelta, si diferente a num_carton almacenar en nuevo array
    for (var i = 1; i <= 90; i++) {
        if (numeros_carton.indexOf(i) == -1) {
            array_diferencia.push(i);
        }
    }
    return array_diferencia;
}

//Generar número aleatorio [1,90]
function generarNumAleatorio() {
    let num_aleatorio;
    num_aleatorio = Math.floor(Math.random() * 90) + 1;
    return num_aleatorio;
}

//Tapar varios números random
function dibujarTapados() {
    var aleatorio_tapar= [];
    //Generar array números aleatorios
    for (var i = 0; i < 5; i++) {
        aleatorio_tapar[i] = Math.floor(Math.random() * 5 + 1);
    }
    console.log("array aleatorio posicion tapar: " +aleatorio_tapar);
    

    //Convertir esos números random a posiciones
    for (var i = 0; i < aleatorio_tapar.length; i++) {
        let posicion = aleatorio_tapar[i];
        console.log("Posición: " + posicion);
      // if (num_carton.indexOf(posicion)) { num_carton.splice(posicion, 0, "nada"); }
       num_carton.splice(posicion, 0 , "nada");
    }
}

//Ej Luisa:
//Ver si el array tiene el nº 5 y el nº 33
//Más impares que pares
function mayoriaImpar() {
    let mas_impar = false;
    let impares = 0;
    let pares = 0;
    //sacar restos del array en nuevo array
    //splice 0 y 1
    //sacar length de cada array
    for (var i = 0; i < num_carton.length; i++) {
        if (num_carton[i] % 2 == 0) {
            pares++;
        } else {
            impares++
        }
    }
    if (impares > pares) {
        mas_impar = true;
    }
    console.log("Hay " + pares + " números pares en este cartón");
    console.log("Hay " + impares + " números impares en este cartón");
    return mas_impar;
}
//Que muestre mensaje en página si es así
function cartonLuisa() {
    let contenedor_mensaje = document.getElementById("contenedor");
    let mensaje_luisa = document.createElement("p");
    //mensaje_luisa.innerHTML = "Vamos a ver...";
    mensaje_luisa.style.textAlign = "center";
    contenedor_mensaje.appendChild(mensaje_luisa);


    if (num_carton.includes(5) && num_carton.includes(33)) {
        console.log("El array contiene el número 5 y el 33");

        if (mayoriaImpar()) {
            console.log("Este es tu cartón, Luisa. A por ello.");
            mensaje_luisa.innerHTML = "Este es tu cartón, Luisa. A por ello";
            mensaje_luisa.style.color = "green";

        }
    } else {
        console.log("No tiene los números favos de Luisa");
        mensaje_luisa.innerHTML = "Luisa, déjalo. No es tu cartón.";
        mensaje_luisa.style.color = "red";

    }
}
//Rellenar el cartón con un array de números [1, 90]
//Obtener todos los tds, recorrerlos y añadir un número
function rellenarCarton() {
    let array_td = document.getElementsByTagName("TD");
    console.log(array_td);
    let num_aleatorio;
    var i = 0;

    do {
        num_aleatorio = generarNumAleatorio();
        if (num_carton.indexOf(num_aleatorio) == -1) {
            console.log("Número válido");
            //array_td[i].innerHTML = num_aleatorio; //pintar número
            num_carton.push(num_aleatorio);
            i++; //suma del index
        }
    } while (num_carton.length < array_td.length);
 
 //AQUÍ TIENE QUE IR LA FUNCIÓN DE BORRAR
       dibujarTapados();
    
    console.log(num_carton);
    num_carton.sort(deMenorAMayor);
    for (var i = 0; i < num_carton.length; i++) {
        array_td[i].innerHTML = num_carton[i];
    }

}

//GENERAR 3TR cada uno con 9TD
function dibujarCarton() {
    let fila;
    let columna;
    let tabla = document.getElementById("hook_tabla");
    let numeros_bingo = []
    for (let i = 0; i < MAX_FILAS; i++) {
        //console.log("TR creada.");
        fila = document.createElement("tr");

        for (let b = 0; b < MAX_COLUMNAS; b++) {
            //console.log("TD creada.");
            columna = document.createElement("td");
            fila.appendChild(columna);
        }
        tabla.appendChild(fila);
    }
}
