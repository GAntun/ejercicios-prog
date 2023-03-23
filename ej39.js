/* 39
Escribí un programa que permita al usuario ingresar números que serán leídos como string (no como int o float) 
hasta que ingrese uno que sea múltiplo de 10 ó menor que 0 (que no será procesado). 
Se formarán dos strings, en los cuales se concatenarán los números ingresados, 
según el siguiente criterio: en un string se concatenarán todos los números que el usuario ingrese cuya cantidad de dígitos sea un múltiplo de 3. 
En el otro, se concatenarán todos los números que contengan el dígito 0. Si un número cumple ambas condiciones, debe concatenarse en ambos strings. 
En cada string, después de cada número concatenado debe colocarse el carácter “-”. Al finalizar, mostrar en pantalla ambos strings.
Solución: 
Ejemplo de ejecución:
    Número: 829
    Número: 102834
    Número: 6
    Número: 4307
    Número: 23
    Número: 1602357
    Número: 5896
    Número: 720
    Números cuya cantidad de dígitos es múltiplo de 3: 829-102834-
    Números que contienen el 0: 102834-4307-1602357-
 */
let prompt = require("prompt-sync")();

let num = prompt("Numero:");

let mult3 = [];
let numC0 = [];

while (num != 0 || (num % 10 == 0 && num != 0)) {
    if (num % 3 == 0) {
        mult3.push(num);
    } else if (num.toString().split("").includes("0")) {
        numC0.push(num);
    }
    num = prompt("Numero:")
}
console.log(`Numeros multiplos de 3:${mult3.join("-")}`);
console.log(`Numeros con 0:${numC0.join("-")}`);