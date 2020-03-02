    window.onload = funciones;

    function funciones() {
        let resultado_mayor = ordenarArraySinSort(array);
        console.log(resultado_mayor);
        let resultado_reves = arrayReves(array);
        console.log(resultado_reves);
        //palabraPara();
        let resultado_suma = sumaArray(array);
        console.log(resultado_suma);
        let resultado_impares = devolverImpares(array);
        console.log(resultado_impares);
    }

    var array = [1, 2, 13, 11];
//-2)ORDENAR UN ARRAY DADO DE MAYOR A MENOR, SIN EL SORT.
//https://khan4019.github.io/front-end-Interview-Questions/sort.html#insertionSort bubble sort
    function ordenarArraySinSort(array) {
       /*for (var i = array.length-1; i>=0; i--){
         for(var j = 1; j<=i; j++){
           if(array[j-1]>array[j]){
               var temp = array[j-1];
               array[j-1] = array[j];
               array[j] = temp;
            }
         }
       }*/

       var minimo, actual;
       for (var i = 0; i < array.length; i++) {
         minimo = i;
             for (var j = i+1; j < array.length; j++) {
                   if(array[j] < array[minimo]){
                    minimo = j;
                   }
             }
         actual = array[i];
         array[i] = array[minimo];
         array[minimo] = actual;
       } 
        return array;
}
//- Hacer una función que recibe un array y devuelve otro array que es el recibido, pero dado la vuelta. Al revés.
    function arrayReves(array) {
        let verres = [];
        for (var i = 0; i < array.length; i++) {
            verres.unshift(array[i]);
        }
        return verres;
    }
//- hacer una página que pida al usuario palabras hasta que introduzca la palabra "para"
  function palabraPara(){
    let condicion = false;
    let comparacion = "para";
    do { 
      let palabra =  prompt("Introduce una palabra").toUpperCase();
        if (palabra == comparacion.toUpperCase()){
          condicion = true;
        }
    } while (condicion != true);
  }

  //- hacer una función que reciba un array de números y devuelva la suma de todos ellos
function sumaArray(array){
  let suma = 0;
  for (var i = 0; i < array.length; i++) {
    //actual = array[i];
    suma += array[i];
  }
  return suma;
}

//- hacer una función que reciba un array de números y devuelva otro array sólo con los impares que tenía el recibido.
function devolverImpares(array){
  let impares= [];
  for (var i = 0; i < array.length; i++) {
    if ((array[i] % 2) != 0){
      impares.push(array[i]);
    }
  }
  return impares;
}
