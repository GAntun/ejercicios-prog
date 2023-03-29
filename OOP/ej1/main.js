/* Ejercicio básico de programación orientada a objetos en Java
Escribe una clase Cuenta para representar una cuenta bancaria. Los datos de la cuenta son: nombre del cliente (String), número de cuenta (String), 
tipo de interés (double) y saldo (double).
La clase contendrá los siguientes métodos:
Constructor por defecto
Constructor con todos los parámetros
Constructor copia.
Métodos setters/getters para asignar y obtener los datos de la cuenta.
Métodos ingreso y reintegro. Un ingreso consiste en aumentar el saldo en la cantidad que se indique. Esa cantidad no puede ser negativa. 
Un reintegro consiste en disminuir el saldo en una cantidad pero antes se debe comprobar que hay saldo suficiente. 
La cantidad no puede ser negativa. Los métodos ingreso y reintegro devuelven true si la operación se ha podido realizar o false en caso contrario.
Método transferencia que permita pasar dinero de una cuenta a otra siempre que en la cuenta de origen haya dinero suficiente para poder hacerla. 
Ejemplo de uso del método transferencia:
cuentaOrigen.transferencia(cuentaDestino, importe);
que indica que queremos hacer una transferencia desde cuentaOrigen a cuentaDestino del importe indicado.  */
import Prompt from "prompt-sync";

let prompt = new Prompt();

import Cuenta from "./Cuenta.js";

let cuentaOrigen = new Cuenta();
cuentaOrigen.setNombre("Pepaso");
cuentaOrigen.setCuenta(1);
cuentaOrigen.setInteres(0);
cuentaOrigen.setSaldo(50000);

/* let usuario = prompt("Introduzca su nombre:") */

let comando = prompt("Ingrese un comando entre estos: transferir, ingresar, reintegrar, consultarSaldo, salir para finalizar: ");

while (comando != "salir") {
    switch (comando) {
        case ingresar:
            let saldoIngresar = prompt("Saldo a ingresar:");
            cuentaOrigen.ingresar(saldoIngresar);
            console.log(`Su saldo ahora es:${cuentaOrigen.consultarSaldo}`)
            break;
        case reintegrar:
            let saldoReintegrar = prompt("Cantidad a reintegrar:");
            cuentaOrigen.reintegro(saldoReintegrar)
            console.log(`Su saldo ahora es:${cuentaOrigen.consultarSaldo}`)
            break;
        case consultarSaldo:
            console.log(`Su saldo es de:${cuentaOrigen.consultarSaldo}`)
            break;
        default:
            break;
    }
    comando = prompt("¿Desea hacer otra accion?:");
}
