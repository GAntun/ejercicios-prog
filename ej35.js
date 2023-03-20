/* 35
Escribí un programa que solicite al usuario el ingreso de strings de longitud 1 (un solo carácter), 
uno por vez. La repetición finalizará cuando se ingrese un string que no tenga longitud 1,
 o cuando el string ingresado corresponda al dígito numérico 0. Al finalizar, 
 mostrar el string completo que se formó con todos los caracteres ingresados y qué porcentaje de caracteres del total fueron la letra “a”.
Solución: 
Ejemplo de ejecución:
    Escribí un carácter: L
    Escribí un carácter: 9
    Escribí un carácter: a
    Escribí un carácter: 4
    Escribí un carácter: A
    Escribí un carácter: 0
    Escribí un carácter: N
    Escribí un carácter: a
    Escribí un carácter: a
    Escribí un carácter: 5
    El string completo es: L9a4A0Naa
    Porcentaje de letras ‘a’: 33.333333333333336
 */
let prompt = require("prompt-sync")();

let completa = prompt("Escribi un carater:");

let arreglito = [];

while (completa.length == 1) {
    arreglito.push(completa);
    completa = prompt("Escribi un caracter:");
}

let contador = 0
for (const caracter of arreglito) {
    if (caracter == "a") {
        contador++
    }
}
const porcentaje = (contador * 100) / arreglito.length

console.log(`El string completo es: ${arreglito.join("")}`);
console.log(`Porcentaje de letras "a": ${porcentaje}`);