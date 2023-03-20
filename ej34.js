/* 34
Escribí un programa que pregunte al usuario si desea analizar calificaciones de alumnos y,
 sólo si responde “S” comenzará el procesamiento de los datos, 
 hasta que el usuario ingrese algo diferente de “S”. Por cada alumno,
  permitir ingresar su calificación. Si es mayor a 4 el alumno está aprobado.
   Finalmente, mostrar “Porcentaje de alumnos aprobados: x %” 
   (donde x es el porcentaje de aprobados sobre el total de calificaciones procesadas). 
   También se debe imprimir “Promedio de los aprobados: y” (donde y es la calificación promedio, sólo de los alumnos aprobados).
Solución: 
Ejemplo de ejecución:
    ¿Analizar calificaciones? ‘S’ para ‘sí’: S
    Calificación de un alumno: 9
    ¿Continuar? ‘S’ para ‘sí’: S
    Calificación de un alumno: 4
    ¿Continuar? ‘S’ para ‘sí’: S
    Calificación de un alumno: 8
    ¿Continuar? ‘S’ para ‘sí’: N
    Porcentaje de alumnos aprobados: 66.66666666666667 %
    Promedio de los aprobados: 8.5
 */

let prompt = require("prompt-sync")();

let confirmacion = prompt("¿Analizar calificaciones? S/N:");

let notas = [];

while (confirmacion.toUpperCase() != "N") {
    notas.push(prompt("Poneme una nota gato:"));
    confirmacion = prompt("¿Continuar? S/N:");
}

let aprobados = 0;
let sumAprobados = 0;
for (const numero of notas) {
    if (numero > 4){
        sumAprobados += parseInt(numero);
        aprobados++;
    }
}

const porcentajeAprobados = ( aprobados * 100) / notas.length;

const promedioAprobados = ( sumAprobados / notas.length);

console.log(`Los alumnos aprobados son: ${aprobados}`);
console.log(`El porcentaje de alumnos aprobados es: ${porcentajeAprobados}`);
console.log(`El promedio de aprobados es: ${promedioAprobados}`);