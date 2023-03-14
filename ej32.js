/* 
Escribí un programa que permita al usuario ingresar los montos de las compras de un cliente (se desconoce la cantidad de datos que cargará,
     la cual puede cambiar en cada ejecución), cortando el ingreso de datos cuando el usuario ingrese el monto 0. 
     Si ingresa un monto negativo, no se debe procesar y se debe pedir que ingrese un nuevo monto. 
     Al finalizar, informar el total a pagar teniendo que cuenta que, si las ventas superan el monto total de 1000, 
     se le debe aplicar un 10% de descuento.
Solución:
Ejemplo de ejecución:
    Monto de una venta: $ 100
    Monto de una venta: $ 300
    Monto de una venta:$ -1
    Monto no válido.
    Monto de una venta: $ 2000
    Monto de una venta: $ 0
    Monto total a pagar: $ 2160.0
 */
let prompt = require("prompt-sync")();

let monto = parseInt(prompt("Monto de venta inicial:"));
let sumatoria = 0;

while (monto != 0) {   
    
    if (monto > 0){
        sumatoria += monto
        monto=parseInt(prompt("Monto de venta:"))
}  else {
    
    monto=parseInt(prompt("Tu monto no es valido,introduzca otro:"))
}
 
}

if (sumatoria > 1000){
    sumatoria = (sumatoria*0.9)
} 

console.log(`Monto a pagar: ${sumatoria}`)