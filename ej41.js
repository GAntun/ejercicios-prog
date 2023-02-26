let prompt = require("prompt-sync")();

let numero = 0;

let arregloPar = []

let arregloImpar = []


for (let i = 0; i < 10; i++) {
    numero = parseInt(prompt("decime un numero:"))
    //console.log(esPar(numero))
    if (esPar(numero) == true) {
        arregloPar.push(numero)
    } else {
        arregloImpar.push(numero)
    }
}

let sumatoriaPares = 0;
for (let numero of arregloPar) {
    sumatoriaPares += numero
}

let sumatoriaImpares = 0;
for (let numero of arregloImpar) {
    sumatoriaImpares += numero
}

console.log(`cantidad de numeros pares:${sumatoriaPares}`)

console.log(`cantidad de numeros impares:${sumatoriaImpares}`)


function esPar(numero) {
    if (numero % 2 == 0) {
        return true
    } else {
        return false
    }
}

