/* Escribí un programa que permita al usuario ingresar números enteros. 
La repetición terminará cuando el usuario ingrese un número para el 
cual la suma de sus dígitos sea mayor que 1000 ó múltiplo de 5. 
Finalmente, mostrar cuántos números impares ingresó el usuario antes de cortar la repetición. 
Reutilizar las funciones esPar y sumatoriaDigitos implementadas en los ejercicios anteriores.
Solución:
Ejemplo de ejecución:
    Escribí un número: 16
    Escribí un número: 922
    Escribí un número: 1513
    Escribí un número: 481
    Escribí un número: 90
    Cantidad de impares: 2
 */
let prompt = require("prompt-sync")();


let numero = prompt("decime un numero, capo:")
let arregloSumatorias = []
//console.log(sumatoria(numero) % 5);
while (sumatoria(numero) <= 1000 && sumatoria(numero) % 5 != 0) {
    arregloSumatorias.push(sumatoria(numero));
    numero = prompt("decime otro numero, capo:")

}

for (const numero of arregloSumatorias) {
    console.log(numero);
}
console.log(`hay ${sumatoriaImpares(arregloSumatorias)} numeros impares`)


function sumatoriaImpares(arreglo) {
    let counter = 0;
    for (let numero of arreglo) {
        if (esPar(numero)) {
            counter++
        }

    }

    return counter
}

function esPar(numero) {
    if (numero % 2) {
        return true
    } else {
        return false
    }
}



function sumatoria(numeros) {
    numeros = numeros.split("");
    let sumatoria = 0;
    for (let numero of numeros) {
        numero = parseInt(numero);
        sumatoria += numero;
    }

    return sumatoria;

}

