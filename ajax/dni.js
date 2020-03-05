     // window.onload = prueba;

     //http://192.168.3.89:8080/saludos/LetraDni?numerodni=5
     //Añadir parámetros a la URL con &

     const URL = "http://192.168.3.89:8080/saludos/LetraDni?numerodni=";
     var num_dni = new XMLHttpRequest();
     var num_introducido;
     var string_dni;

     function validar(dni){
        var re_ok = /^[X-Z]?\d{7,8}$/i;
        var formato_dni = new RegExp(re_ok);
        var num_ok = formato_dni.test(dni);
        var correcto = false;
         if (num_ok) {
             console.log("Número correcto");
             correcto = true;
         } else { //este else podría ir también en el if de obtenerLetraDni()
             console.log("Número incorrecto");
             alert("Número introducido no válido");
             var resultado = document.getElementById("resultadoLetra").innerHTML = "Introduce un número válido."
         }
         return correcto;

     }

     function obtenerLetraDni() {
        string_dni = document.getElementById("numeroDni").value;
        if(validar(string_dni)){
            let url_completa = obtenerUrl(string_dni);

            num_dni.open("GET", url_completa, true);
            num_dni.onreadystatechange = consultaEstado;
            num_dni.send();
        }
    }

    function obtenerUrl(num){
        let url_completa="";
        var inicio_cadena = num.charAt(0);
         
         if (!isNaN(inicio_cadena)) {
             console.log("DNI")
             url_completa = URL + num;
             document.getElementById("chip").innerHTML = "DNI";

         } else {
             console.log("NIE")
             num = num.substring(1);
             console.log(num);
             inicio_cadena = inicio_cadena.toUpperCase();
             url_completa = URL + num + "&prefijo=" + inicio_cadena;
             document.getElementById("chip").innerHTML = "NIE";
         }
 
        console.log(url_completa);

        return url_completa;
    }


     function consultaEstado() {
         if (num_dni.readyState === 4) { //en lugar de 4 también puede ser num_dni.DONE
             console.log("La comunicación ha terminado con estatus: " + num_dni.status);
             if (num_dni.status === 200) {
                 console.log("La comunicación ha terminado");
                 console.log("Cuerpo de la respuesta " + num_dni.responseText);
                 pintarLetra();
                 document.getElementById("numcarnet").innerHTML= string_dni + num_dni.responseText;
             }
         }
     }

     function pintarLetra() {
         document.getElementById("resultadoLetra").innerHTML = "El dni es: " + num_dni.responseText;
         //Rellenar carnét css
         var apellido1 = document.getElementById("inpAp1").value;
         document.getElementById("ap1_input").innerHTML = apellido1;
         var apellido2 = document.getElementById("inpAp2").value;
         document.getElementById("ap2_input").innerHTML = apellido2;
         var nombre = document.getElementById("inpNom").value;
         document.getElementById("nom_input").innerHTML = "<p>" + nombre + "</p>";
         document.getElementById("firma").innerHTML = "<p>" + nombre + "</p>"
         document.getElementById("firma").style.fontFamily = 'Rock Salt';


     }


     function anadirLetraDni() {
         

         //Declarar y almacenar número como str
         var num_introducido = document.getElementById("numeroDni").value;
         var num = num_introducido.toUpperCase();
         //var re_nie = /^[X-Z]{1}\d{7}$/i;
         //var re_dni = /^\d{8}$/;

         //PROBLEMA:Se pueden meter 7 digitos y te devuelve letra. ERROR.
         var re_ok = /^[X-Z]?\d{7,8}$/i;
         const letras = "TRWAGMYFPDXBNJZSQVHLCKE";
         var inicio_cadena = num.charAt(0);
         console.log(num);

         //Cotejar num con REGEXP mediante test
         var formato_dni = new RegExp(re_ok);
         var num_ok = formato_dni.test(num);
         if (num_ok) {
             console.log("Número correcto");
             comprobarNumero();
             obtenerLetraFinal();

         } else {
             console.log("Número incorrecto")
             alert("Número introducido no válido");
             var resultado = document.getElementById("resultadoLetra").innerHTML = "Introduce un número válido."
         }


         //Patrón de expresión regular: 8 numeros o 7 num y letra inicial
         //Versión chunguer
         /*if (num.match(re_dni) || num.match(re_nie)){
           console.log("Número correcto");
           comprobarNumero();
           obtenerLetraFinal();
         }
           else {
             console.log("Número incorrecto")
             alert("Número introducido no válido");
             var resultado = document.getElementById("resultadoLetra").innerHTML = "Introduce un número válido."
           }*/

         //Comprobar si hay letra inicial
         function comprobarNumero() {
             if (!isNaN(inicio_cadena)) {
                 console.log("DNI")
             } else {
                 console.log("NIE")
                 convertirLetra(inicio_cadena);
             }
         }
         //Si hay letra inicial, convertirla y añadirla al num  X-0, Y-1, Z-2
         function convertirLetra(letra) {
             if (inicio_cadena == ("Y")) {
                 console.log("Letra Y");
                 num = num.replace("Y", "1");
                 console.log(num);
             } else if (inicio_cadena == ("Z")) {
                 console.log("Letra Z");
                 num = num.replace("Z", "2");
                 console.log(num);
             } else {
                 console.log("Letra X");
                 num = num.replace("X", "0");
                 console.log(num);
             }
             return (num);
         }

         function obtenerLetraFinal() {
             //Convertir a INT
             var dividendo_int = parseInt(num);
             //Dividir el num entre 23 y obtener el resto
             var resto = (num % 23);
             console.log(resto);


             //Devolver una letra
             var letra_suma = letras.charAt(resto);
             console.log(letra_suma);

             //Imprimir DNI + letra
             var dni = (num_introducido + letra_suma).toUpperCase();
             var resultado = document.getElementById("resultadoLetra").innerHTML = "El dni es: " + dni;
             console.log(dni)
         }

         //Sigo sin entender el return.
         //return dni;
     }