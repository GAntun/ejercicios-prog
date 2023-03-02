let prompt = require("prompt-sync")();


function sumatoria (numeros) {
    numeros = numeros.split("")
    // 12345
    // [1,2,3,4,5];
    
    let sumatoria = 0;
    for (let numero of numeros){
        numero = parseInt(numero);
        sumatoria += numero;
    }
    
    return sumatoria;
}

let numero = prompt("tirame un numero, capo: ")

while(numero != 100) {
    console.log(sumatoria(numero));
    numero = prompt("dame otro numero, capo: ");    
}
