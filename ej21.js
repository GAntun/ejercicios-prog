/* 21
Escribí un programa que solicite ingresar un nombre de usuario y una contraseña.
 Si el nombre es “Gwenevere” y la contraseña es “excalibur”, mostrar en pantalla 
 “Usuario y contraseña correctos. Puede ingresar a Camelot”. 
 Si el nombre o la contraseña no coinciden, mostrar “Acceso denegado”.
Solución:
Ejemplo de ejecución:
    Nombre de usuario: gwen
    Contraseña: excalibur
    Acceso denegado
 */

let prompt = require("prompt-sync")()

let usuario = prompt("Declara tu nombre:")
let contraseña = prompt("Clave secreta:")

if (usuario == "Pipo" && contraseña == "Contigo"){
    console.log(`Bienvenido`)
} else {
    console.log("Raja de aca nieri")
}


/* if (usuario != "Pipo" || contraseña != "Contigo"){
    console.log("DENIEEDDDD")
} else {
    console.log(`The Matrix Has You ${usuario}`);
}`
 */