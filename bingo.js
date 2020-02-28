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

    /*let array_no = numerosFueraCarton(num_carton);
    console.log("N arra: " + array_no);
    //deMenorAMayor();
    let num_mayor = devolverMayor();
    console.log("Número mayor: " + num_mayor);

    let num_menor = devolverMenor();
    console.log("Número menor: " + num_menor);*/
    //let resultado = bolaBomboArray();
    //console.log(resultado);

    sacarBola();
    //let bombo = bolaBomboArray();
    //console.log("Numeros del bombo: " + bombo);

    comparaBomboCartón(num_carton);

};
const MAX_FILAS = 3;
const MAX_COLUMNAS = 9;
var num_carton = [];
var bombo = [];//todas las bolas
var pos_bombo = 0;//bola por la que voy

//Haciéndolo nosotros
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

//Directamente
function deMayoraMenor(a, b) {
    let numero_devuelto;

    numero_devuelto = b - a;
    /*if (a > b) {
        numero_devuelto = 1;
    } else if (b > a) {
        numero_devuelto = -1;
    } else {
        numero_devuelto = 0;
    }*/
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
    /* var aleatorio_tapar= [];
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
        num_carton.push(posicion, 0 , "nada");
     }*/
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

//DIVIDIR FUNCIONES = REFACTORIZAR

function generarNumerosCarton() {
    var lista_numeros = [];
    var index = 0;
    do {
        numero_aleatorio = generarNumAleatorio();
        //comprobar que numero_aleatorio NO esté en numeros_carton
        if (lista_numeros.indexOf(numero_aleatorio) == -1) //no es repe
        {
            console.log("numero VÁLIDO");
            lista_numeros.push(numero_aleatorio);
            index++;
        }
    } while (lista_numeros.length < (MAX_COLUMNAS * MAX_FILAS));
    return lista_numeros;
}

function ordenarNumerosCarton(numeros_carton) {
    numeros_carton.sort(deMenorAMayor); //orden total
    //numeros_carton.sort();//orden natural
}

function dibujarNumerosCarton(numeros_carton) {
    let array_tds = document.getElementsByTagName("td");
    for (let index = 0; index < array_tds.length; index++) {
        array_tds[index].innerHTML = numeros_carton[index];
    }
}

function rellenarCarton() {

    let numero_aleatorio;
    numeros_carton = generarNumerosCarton();
    // ordenarNumerosCarton(numeros_carton);
    dibujarNumerosCarton(numeros_carton);
    bomboArray();

    /* comprobarCartonLuisa (numeros_carton);
     var array_no_estan = obtenerNumerosQueNoEstan (numeros_carton);
     console.log (array_no_estan);
     console.log ("longi no están " + array_no_estan.length);*/

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

//está mal, no uso parámetro
function devolverMenor(array_numeros) {
    let num_menor;
    let num_mayor;

    num_menor = numeros_carton.sort(deMenorAMayor);

    num_mayor = num_menor[num_menor.length - 1];

    console.log("Número mayor con length: " + num_mayor)

    return num_menor[0];
}

function devolverMayor(array_numeros) {
    let num_mayor;

    num_mayor = numeros_carton.sort(deMayoraMenor);

    return num_mayor[0];
}

function jugar() {
    //sacarbola

    sacarBola(bombo);
    //comprobarbola
}

function sacarBola(num){

    let bola_sacada;
    bola_sacada =  bombo[pos_bombo];
    document.getElementById.("bola").innerHTML = bombo[pos_bombo];
    pos_bombo++;
    return bola_sacada;

}

function comprobarBola(bola, num_carton){
    if (num_carton.includes(bola)){
        //tachar quitarlo del array
        //comprobar si bingo
            //si bingo felicitar y reiniciar
            //si no bingo jugar
    } else{
        jugar();
    }
}

function bomboArray() {

    for (var i = 1; i <= 90; i++) {
        bombo.push(i);
        i++;
    }

    //Shuffle el array cuan lista de spotify
    console.log(bombo);
    shuffle(bombo);
    console.log(bombo);
    console.log("Bombo barajado");
}

/*function shuffle(array) {
  array.sort(() => Math.random() - 0.5);
  return array;
}*/

function shuffle(a) {
    var j, x, i;
    for (i = a.length - 1; i > 0; i--) {
        j = Math.floor(Math.random() * (i + 1));
        x = a[i];
        a[i] = a[j];
        a[j] = x;
    }
    return a;
}



function pintarBola(bombo) {

}