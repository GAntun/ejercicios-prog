//29
//Escribí un programa que permita al usuario ingresar 6 números enteros,
//que pueden ser positivos o negativos. 
//Al finalizar, mostrar la sumatoria de los números negativos 
//y el promedio de los positivos. 
//No olvides que no es posible dividir por cero,
//por lo que es necesario evitar que el programa arroje un error si no
//se ingresaron números positivos.
//Ejemplo de ejecución:
//Número: 15
//Número: -12
//Número: 5
//Número: 10
//Número: -3
//Número: 9
//Sumatoria de los negativos: -15
//Promedio de los positivos: 9.75
let prompt = require("prompt-sync")();

let numero = 0;

let negativos = [];

let positivos = [];

for (let i = 0; i < 6; i++) {
    numero = parseInt(prompt("Introduzca un numerito:"));
    if (enteros(numero) == false){
    negativos.push(numero)
}else {
    positivos.push(numero)
}
}

function enteros(numero){
    if (numero > 0 ){
    return true}
else {
    return false
}
}

let sumatoria = 0
for (let numero of negativos) {
    sumatoria += numero
}

let promedio = 0
for (let numero of positivos) {
    promedio += numero
    promedio /= numero
}


console.log(`La suma de los negativos es: ${sumatoria}`)
console.log(`El promedio de los positivos es: ${promedio}`)