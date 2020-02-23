       // window.onload = prueba;
      function añadirLetraDni () {
        //Declarar y almacenar número como str
        var num_introducido = document.getElementById("numeroDni").value;
        var num = num_introducido.toUpperCase();
        var re_nie = /^[X-Z]{1}\d{7}$/i;
        var re_dni = /^\d{8}$/;
        //  /([X-Z]{1})?/d{7,8}/i   (([X-Z]?)([0-9]{7}))|/[0-9]{8}/
        var inicio_cadena = num.charAt(0);
        console.log(num);
        
        //Patrón de expresión regular: 8 numeros o 7 num y letra inicial
          if (num.match(re_dni) || num.match(re_nie)){
            console.log("Número correcto");
            comprobarNumero();
            obtenerLetraFinal();
          }
            else {
              console.log("Número incorrecto")
              alert("Número introducido no válido");
              var resultado = document.getElementById("resultadoLetra").innerHTML = "Introduce un número válido."
            }
        //Comprobar si hay letra inicial
        function comprobarNumero(){
        if (!isNaN(inicio_cadena)){
          console.log("No hay letra")
        }
        else {
          console.log("DNI extranjero")
          convertirLetra(inicio_cadena);
        }
      }
        //Si hay letra inicial, convertirla y añadirla al num  X-0, Y-1, Z-2
        function convertirLetra(letra){
        if (inicio_cadena == ("Y")){
          console.log("Letra Y");
          num = num.replace("Y", "1");
          console.log(num);
        }
        else if (inicio_cadena == ("Z")){
          console.log("Letra Z");
          num = num.replace("Z", "2");
          console.log(num);
        }
        else {
          console.log("Letra X");
          num = num.replace("X", "0");
          console.log(num);
        }
        return (num);
      }

      function obtenerLetraFinal(){
        //Convertir a INT
        var dividendo_int = parseInt(num);
        //Dividir el num entre 23 y obtener el resto
        var resto = (num % 23);
        console.log(resto);
        //Asignar el resto a una letra con atChart
        var letras = "TRWAGMYFPDXBNJZSQVHLCKE";
        //Devolver una letra
        var letra_suma = letras.charAt(resto);
        console.log(letra_suma);

        //Imprimir DNI + letra
        var dni = (num_introducido + letra_suma);
        var resultado = document.getElementById("resultadoLetra").innerHTML = "El dni es: " + dni;
        console.log(dni)
      }

        //Sigo sin entender el return.
        //return dni;
      }

