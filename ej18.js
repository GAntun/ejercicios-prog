/* 18
Escribí un programa que solicite al usuario el ingreso de dos números diferentes y 
muestre en pantalla al mayor de los dos.
Solución:
Ejemplo de ejecución:
    Un número: 592
    Otro número distinto: 1726
    1726 es mayor
 */
let prompt = (require("prompt-sync"))()
/* 
let num1 = prompt("Dame un numero:")
let num2 = prompt("Dame otro numero:") */

let num1 =  8;
let num2 = 7;

if (num1 > num2) {
    console.log(`${num1} es mayor`)
} else if (num1 == num2) {
    console.log("Te pedi otro capo, no el mismo")
} else {
    console.log(`${num2} es mayor`)
}

