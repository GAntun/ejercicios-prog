/* 20
Escribí un programa para solicitar al usuario tres números y mostrar en pantalla al menor de los tres.
Solución:
Ejemplo de ejecución:
    Primer número: 20
    Segundo número: 30
    Tercer número: 10
    Menor: 10
 */
let prompt = require("prompt-sync")()

let num1 = prompt("Primer numero:")
let num2 = prompt("Segundo numero:")
let num3 = prompt("Tercer numero:")

// num1 < num2 
// num1 < num3

if (num1 < num2 && num1 < num3){
    console.log(`numero 1 es el menor: ${num1}`)
} else if (num2 < num3) {
    console.log(`numero 2 es el menor: ${num2}`)
} else if (num1 == num2 && num1 == num3) {
    console.log(`son todos iguales pedazo de trolo`)
} else {
    console.log(`numero 3 es el menor: ${num3}`)
}



/* 
if (num1 < num2 && num1 < num3) {
    console.log(`Menor:${num1}`)
}
if (num2 < num1 && num2 < num3) {
    console.log(`Menor:${num2}`)
}
if (num3 < num2 && num3 < num1) {
    console.log(`Menor:${num3}`)
}
if (num1==num2 && num1== num3){
    console.log("Flaco, el concepto de numeros distintos no te lo enseñaron en casa no?")
} */