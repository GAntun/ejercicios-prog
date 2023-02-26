let prompt = require("prompt-sync")();

let numeros = prompt("decime un numero, capo:");

let patatas = prompt("ingresa patatas:");

console.log(sumatoria(numeros));
console.log(sumatoria(patatas));
console.log(sumatoria("123"));



function sumatoria(numeros) {
    numeros = numeros.split("")
    let sumatoria = 0
    for (let numero of numeros) {
        numero = parseInt(numero)
        sumatoria += numero;
    }
    return sumatoria

} 