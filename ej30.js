/* 30
Escribí un programa que permita al usuario ingresar una frase y luego un carácter 
(string de longitud 1) y luego muestre la frase ingresada, pero con todas las ocurrencias del carácter indicado por el usuario reemplazadas por “*”.
Solución:
Ejemplo de ejecución:
    Frase: Aquí me pongo a cantar al compás de la vigüela_
    Carácter: o
    Aquí me p*ng* a cantar al c*mpás de la vigüela
 */
let prompt = require("prompt-sync")();

let frase = prompt("Frase:");

let caracter = prompt("Caracter:");

/* var re = new RegExp(caracter, "g");


console.log(frase.replace( re , "*")); */



console.log(frase.replaceAll(caracter , "*" ));

