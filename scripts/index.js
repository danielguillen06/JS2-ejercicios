//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////EJERCICIOS:
/* 
Ejercicio: Nivel 1

- Declare una variable llamada desafío y asígnele un valor inicial 'Largos días de JavaScript'.
- Imprime la cadena en la consola del navegador usando console.log()
- Imprime la longitud de la cadena en la consola del navegador usando console.log()
- Cambie todos los caracteres de la cadena a letras mayúsculas usando el método toUpperCase()
- Cambie todos los caracteres de la cadena a letras minúsculas usando el método toLowerCase()
- Corta (segmenta) la primera palabra de la cadena usando el método substr() o substring()
- Corta la frase Days Of JavaScript de Long Days Of JavaScript.
- Verifique si la cadena contiene una palabra Script usando el método include ()
- Divida la cadena en una matriz usando el método split ()
- Divida la cadena Long Days Of JavaScript en el espacio usando el método split ()
- 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon' divide la cadena en la coma y la cambia a una matriz.
- Cambie Long Days Of JavaScript a Long Days Of Python usando el método replace().
- ¿Qué es el carácter en el índice 15 en la cadena 'Long Days Of JavaScript'? Utilice el método charAt().
- ¿Cuál es el código de carácter de J en la cadena 'Long Days Of JavaScript' usando charCodeAt()?
- Use indexOf para determinar la posición de la primera aparición de a en Long Days Of JavaScript
- Utilice lastIndexOf para determinar la posición de la última aparición de a en Long Days Of JavaScript.
- Use indexOf para encontrar la posición de la primera aparición de la palabra porque en la siguiente oración: 'No puede terminar una oración con porque porque porque es una conjunción'
- Use lastIndexOf para encontrar la posición de la última aparición de la palabra porque en la siguiente oración: 'No puede terminar una oración con porque porque porque es una conjunción'
- Use la búsqueda para encontrar la posición de la primera aparición de la palabra porque en la siguiente oración: 'No puede terminar una oración con porque porque porque es una conjunción'
- Use trim() para eliminar cualquier espacio en blanco final al principio y al final de una cadena. Por ejemplo, ' Long Days Of JavaScript '.
- Use el métodostartWith() con la cadena Long Days Of JavaScript y haga que el resultado sea verdadero
- Use el método EndsWith() con la cadena Long Days Of JavaScript y haga que el resultado sea verdadero
- Use el método match () para encontrar todas las a en Long Days Of JavaScript
- Use concat() y combine 'Long Days of' y 'JavaScript' en una sola cadena, 'Long Days Of JavaScript'
- Use el método repeat () para imprimir Long Days Of JavaScript 2 veces
*/

let desafio = "Largos dias de JavaScript"; //Declare una variable llamada desafío y asígnele un valor inicial 'Largos días de JavaScript'.
console.log(desafio); //Imprime la cadena en la consola del navegador usando console.log()
console.log("longitud:",desafio.length); //Imprime la longitud de la cadena en la consola del navegador usando console.log()
console.log("Mayuscula:", desafio.toUpperCase("Largos dia de JavaScript")); //Cambie todos los caracteres de la cadena a letras mayúsculas usando el método toUpperCase()
console.log("Minuscula:", desafio.toLowerCase("Largos dia de JavaScript")); //Cambie todos los caracteres de la cadena a letras minúsculas usando el método toLowerCase()
console.log("Cortar palabra:", desafio.substring(7 , 24)); //Corta (segmenta) la primera palabra de la cadena usando el método substr() o substring()
console.log("Cortar la frase despues de largo:", desafio.substring(0,5)); //Corta la frase Days Of JavaScript de Long Days Of JavaScript.
console.log("Esta la palabra Script:", desafio.includes("Script")); //Verifique si la cadena contiene una palabra Script usando el método include ()
console.log("Matriz:",desafio.split("")); //Divida la cadena en una matriz usando el método split ()
console.log("Dividir:", desafio.split(" ")); //Divida la cadena Long Days Of JavaScript en el espacio usando el método split ()

let programas = "Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon";
console.log("dividir la cadena en comas:", programas.split(" ") ); //'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon' divide la cadena en la coma y la cambia a una matriz.

console.log("Cambiar una palabra:", desafio.replace("JavaScript", "Phyton")); //Cambie Long Days Of JavaScript a Long Days Of Python usando el método replace().
console.log("cual es el caracter en el indice 15:", desafio.charAt(15)); //Qué es el carácter en el índice 15 en la cadena 'Long Days Of JavaScript'? Utilice el método charAt().
console.log("cual es el codigo de J:", desafio.charCodeAt("J"));  //¿Cuál es el código de carácter de J en la cadena 'Long Days Of JavaScript' usando charCodeAt()?
console.log("posicion de la primera letra a:", desafio.indexOf("a")); //Use indexOf para determinar la posición de la primera aparición de a en Long Days Of JavaScript
console.log("Ultima aparacion de la letra a:", desafio.lastIndexOf("a")); //Utilice lastIndexOf para determinar la posición de la última aparición de a en Long Days Of JavaScript.

let palabra = "No puede terminar una oración con porque porque porque es una conjunción";
console.log("posición de la primera palabra porque:", palabra.indexOf("porque")); //Use indexOf para encontrar la posición de la primera aparición de la palabra porque en la siguiente oración: 'No puede terminar una oración con porque porque porque es una conjunción'
console.log("posición de la última la palabra porque:", palabra.lastIndexOf("porque")); //Use lastIndexOf para encontrar la posición de la última aparición de la palabra porque en la siguiente oración: 'No puede terminar una oración con porque porque porque es una conjunción'
console.log("busqueda de posicion de la la primera palabra porque:", palabra.search("porque")); //Use la búsqueda para encontrar la posición de la primera aparición de la palabra porque en la siguiente oración: 'No puede terminar una oración con porque porque porque es una conjunción'

let desafio2 = "  Largos dias de JavaScript   "
console.log("con espacios:", desafio2);
console.log("eliminar espacios:",desafio2.trim());// Use trim() para eliminar cualquier espacio en blanco final al principio y al final de una cadena. Por ejemplo, ' Long Days Of JavaScript '.

console.log("resultado:", desafio.startsWith("L"));// Use el métodostartWith() con la cadena Long Days Of JavaScript y haga que el resultado sea verdadero
console.log("resultado 2:", desafio.endsWith("t")); //Use el método EndsWith() con la cadena Long Days Of JavaScript y haga que el resultado sea verdadero
console.log("encontrar a:", desafio.match("a")); //Use el método match () para encontrar todas las a en Long Days Of JavaScript

let frase = "largos dias de ";
console.log("concatener las frases:", frase.concat("JavaScript ", "con ", "Pedro ")); //Use concat() y combine 'Long Days of' y 'JavaScript' en una sola cadena, 'Long Days Of JavaScript'

console.log("Repetir la frase 2 veces:", desafio.repeat(2)); //Use el método repeat () para imprimir Long Days Of JavaScript 2 veces
console.log(" ");
/*
Ejercicio: Nivel 2

1. Usando console.log() imprima la siguiente declaración:
    La cita 'No hay mejor ejercicio para el corazón que agacharse y levantar a la gente.' de John Holmes nos enseña a ayudarnos unos a otros.
    
2. Usando console.log() imprima la siguiente cita de la Madre Teresa:
    "El amor no es condescendiente y la caridad no se trata de lástima, se trata de amor. La caridad y el amor son lo mismo: con la caridad das amor, así que no solo des dinero, sino que tiendes la mano".
    
3. Compruebe si typeof '10' es exactamente igual a 10. Si no, hágalo exactamente igual.  
4. Compruebe si parseFloat('9.8') es igual a 10, si no, hágalo exactamente igual a 10. 
5. Verifique si 'on' se encuentra tanto en Python como en la jerga
6. _Espero que este curso no esté lleno de jerga_. Compruebe si _jargon_ está en la oración. 
7. Genere un número aleatorio entre 0 y 100 inclusive.
8. Genere un número aleatorio entre 50 y 100 inclusive.
9. Genere un número aleatorio entre 0 y 255 inclusive.
10. Acceda a los caracteres de la cadena 'JavaScript' utilizando un número aleatorio.
11. Use console.log() y caracteres de escape para imprimir el siguiente patrón.
    
    1 1 1 1 1
    2 1 2 4 8
    3 1 3 9 27
    4 1 4 16 64
    5 1 5 25 125
    
12. Use **substr** para separar la frase **porque porque porque** de la siguiente oración:**'No puede terminar una oración con porque porque porque es una conjunción'**
*/

console.log("IMPRIMIR: ", "No hay mejor ejercicio para el corazón que agacharse y levantar a la gente" ); //Usando console.log() imprima la siguiente declaración: La cita 'No hay mejor ejercicio para el corazón que....
console.log("");
console.log("IMRPIMIR: ", "El amor no es condescendiente y la caridad no se trata de lástima, se trata de amor. La caridad y el amor son lo mismo: con la caridad das amor, así que no solo des dinero, sino que tiendes la mano"); //Usando console.log() imprima la siguiente cita de la Madre Teresa

let numerito = "10";
console.log("es igual:",typeof("10") === typeof(10)); //Compruebe si typeof '10' es exactamente igual a 10. Si no, hágalo exactamente igual. 
let numeritoInt = parseInt(numerito); /// convierto el string en numero
console.log("ahora si:",typeof(numeritoInt) === typeof(10)); 
console.log("");

let numer = "9.8";
console.log("es igual:", parseFloat(numer) === typeof(10));
let numerInt = parseInt(numer); //convierto el float en numero int
console.log("ahora si:", typeof(numerInt) === typeof(10)); //Compruebe si parseFloat('9.8') es igual a 10, si no, hágalo exactamente igual a 10. 