/* 38
Escribí un programa que solicite al usuario una cadena de caracteres (que puede contener letras, números o símbolos).
Analizar la cadena para mostrar: cuántas letras del abecedario (minúsculas y mayúsculas) contiene,
cuántos símbolos (caracteres que no son ni letras ni números), cuántos dígitos numéricos y, de los dígitos, cuántos son múltiplos de 4.
Solución:
Ejemplo de ejecución:
    Cadena de caracteres: 1984 (novela de George Orwell)
    Cantidad de letras: 20
    Cantidad de dígitos numéricos: 4
    Cantidad de símbolos: 6
    Cantidad de múltiplos de 4: 2
 */
let prompt = require("prompt-sync")();

let cad = prompt("Cadena de caracteres:");

let letrita = 0;
let digNum = 0;
let multD4 = 0;
const abecedario = "abcdefghijklmnopqrstuvwxyz";
const numerito = "1234567890";

for (const caracter of cad.toString().split("")) {
    for (const caracterabc of abecedario.split("")) {
        if (caracter == caracterabc) {
            letrita++;
        }
    }
    if (parseInt(caracter) % 4 == 0) {
        multD4++;
    }
    for (const carcaternum of numerito.toString().split("")) {
        if (caracter == carcaternum) {
            digNum++;
        }
    }
}
console.log(`Cantidad de letras :${letrita}`);
console.log(`Cantidad de numeros :${digNum}`);
console.log(`Cantidad de multiplos de 4:${multD4}`);
