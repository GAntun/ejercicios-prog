/* 37
Escribí un programa para solicitar al usuario que ingrese números enteros positivos (la cantidad que ingresará no se conoce y la decide el usuario).
 La lectura de números finalizará cuando el usuario ingrese el número -1. Por cada número ingresado, 
 mostrar la cantidad de dígitos pares y la cantidad de dígitos impares que tiene. 
 Al finalizar, mostrar cuántos números múltiplos de 3 ingresó el usuario.
Solución:
Ejemplo de ejecución:
    Número (-1 para terminar el programa): 123
    Dígitos pares: 1
    Dígitos impares: 2
    Número (-1 para terminar el programa): 44
    Dígitos pares: 2
    Dígitos impares: 0
    Número (-1 para terminar el programa): 9
    Dígitos pares: 0
    Dígitos impares: 1
    Número (-1 para terminar el programa): -1
    Se ingresaron 2 múltiplos de 3.
 */

let prompt = require("prompt-sync")();

let num = prompt("Nùmero (-1 para finalizar):");

let diPar = 0
let diImpar = 0
let mult = 0

while (num != -1) {
    console.log(num.toString().split(""));
    for (const numero of num.toString().split("")) {
        if (parseInt(numero) % 2 == 0) {
            diPar++;
        } else {
            diImpar++;
        }
    }
    for (const numero of num.toString().split("")) {
        if (parseInt(numero) % 3 == 0) {
            mult++;
        }
    }
    console.log(`Digitos pares:${diPar}`);
    console.log(`Digitos impares:${diImpar}`);
    num = prompt("Nùmero (-1 para finalizar):");


}
console.log(`Se ingresaron ${mult} multiplos de 3`);
