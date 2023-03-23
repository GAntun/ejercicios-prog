/* 40
Escribí un programa que permita al usuario ingresar títulos de libros por teclado, finalizando el ingreso al leerse el string “*” (asterisco).
Cada vez que el usuario ingrese un string de longitud 1 que contenga sólo una barra “/” se considera que termina una línea. 
Por cada línea completa, informar cuántos dígitos numéricos (del 0 al 9) aparecieron en total 
(en todos los títulos de libros que componen en esa línea). Finalmente, informar cuántas líneas completas se ingresaron.s
Solución:
Ejemplo de ejecución:
    Cadena: Don Quijote de La Mancha
    Cadena: Los 3 mosqueteros
    Cadena: Historia de 2 ciudades
    Cadena: /
    Aparecen 2 dígitos en la línea
    Cadena: 20000 leguas de viaje submarino
    Cadena: El señor de los anillos
    Cadena: Alicia en el país de las maravillas
    Cadena: 1984
    Cadena: El hobbit
    Cadena: /
    Aparecen 9 dígitos en la línea
    Cadena: Divina comedia
    Cadena: Drácula
    Cadena: /
    Aparecen 0 dígitos en la línea
    Cadena: 20 años después
    Cadena: Los viajes de Gulliver
    Cadena: *
    Se leyeron 3 líneas completas
 */
let prompt = require("prompt-sync")();

let libro = prompt("Escribi algo:");
let arregloNum = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
let libros = [];
let contDigitos = 0
let contLineas = 0


while (libro != "*") {
    if (libro != "/") {
        libros.push(libro);
        libro = prompt("Escribi algo:");
    } else {
        for (const libro of libros) {
            for (const letra of libro.toString().split("")) {
                for (num of arregloNum) {
                    if (letra == num) {
                        contDigitos++;
                    }
                }
            }
        } console.log(`Tenemos ${contDigitos} digitos en la liñita`);
        libro = prompt("Escribi algo:");
        contLineas++;
        libros = []
        contDigitos = 0
    }
}
console.log(`Se leyeron ${contLineas} lineas`);