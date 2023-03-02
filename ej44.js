/* 44
Escribí una función que reciba un string y retorne 
True si es un palíndromo (esto es, si se lee igual de izquierda a derecha o de derecha a izquierda), False en caso contrario. 
Utilizar est a función en un programa que permita al usuario ingresar palabras hasta que ingrese la palabra “fin” 
(suponer que todas las palabras son en minúsculas o todas en mayúsculas, de forma consistente).
Al finalizar, mostrar la cantidad de palíndromos ingresados.
Solución:
Ejemplo de ejecución:

    Cadena: abba
    Cadena: m
    Cadena: luz
    Cadena: reconocer
    Cadena: golondrina
    Cadena: fin
    Cantidad de palíndromos: 3
 */
let prompt =require("prompt-sync")() 
console.log(esPalindromo("ala"))
console.log(esPalindromo("pepo"))

let palindromos = []
let palabra = prompt("Dame una palabra: ")

while (palabra != "fin") {
     palindromos.push(palabra)
     palabra = prompt("dame otra palabra: ")
    }
 let contador = 0
    for (let palabra of palindromos) {
        
        if (esPalindromo(palabra) == true ){
        contador ++ 
        }
        
    }

console.log(`Cantidad de palindromos: ${contador} `)    
        
console.log(palindromos);

function esPalindromo(palabra) {
    palabra.split("").reverse().join("")

    if (palabra == palabra.split("").reverse().join("")){
        return true
    } else {
        return false
    }

}

