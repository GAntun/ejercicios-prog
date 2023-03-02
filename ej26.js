/* 26
Escribí un programa que, dada una frase por el usuario, muestre la cantidad total de vocales (tanto mayúsculas como minúsculas) 
que contiene.
Solución:
Ejemplo de ejecución:
    Frase: Verde que te quiero verde
    Vocales: 11
 */

let prompt = require("prompt-sync")()

 let frase = prompt("Frase: ") 
/* let frase = "Verde que te quiero verde" */
let letras = []

let contador = 0

for (let letra of frase.split("")) {
    letra = letra.toLowerCase();
    if (letra == "a" ||
        letra == "e" ||
        letra == "i" ||
        letra == "u" ||
        letra == "o") {
        contador++
    }
}
console.log(`vocales:${contador}` )

/* console.log(frase)
console.log(frase.split(""))
 */