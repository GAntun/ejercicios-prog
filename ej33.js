/* 33
Escribí un programa que permita al usuario ingresar una cantidad de números positivos indefinida 
(la cantidad que ingresará no se conoce y puede cambiar en cada ejecución), finalizando cuando ingresa el número 0 
(que no se tendrá en cuenta). Una vez terminada la lectura de números, informar cuál fue el mayor de los números ingresados.
Solución:
Ejemplo de ejecución:
    Número: 6
    Número: 9
    Número: 2
    Número: 12
    Número: 0
    Mayor número ingresado: 12
 */
let prompt = require("prompt-sync")();

let numero = prompt("Decime un numero para iniciar:");

let maximus = 0;

while (numero != 0) {

    if (numero > maximus) {
        maximus = numero;
    }

    numero = prompt("Dame otro numerito:");
}

console.log(`El numero mas porongudo es: ${maximus}`);