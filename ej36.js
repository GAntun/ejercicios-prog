/* 36
Escribí un programa que, dado un número entero por el usuario (guardado como int), 
muestre la suma de todos sus dígitos. Recordá que vas a necesitar obtener cada uno de los dígitos por separado para poder sumarlos entre sí.
Solución: 
Ejemplo de ejecución:
    Escribí un número: 7124
    Suma de los dígitos: 14
 */
let prompt=require("prompt-sync")();

let cuerda = prompt("Numèro dame vos:");

let suma = cuerda.split("");

let total= 0;

for (const numero of suma) {
    total += parseInt(numero);
}

console.log(`Sumatoria de los digitos:${total}`);