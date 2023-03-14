let prompt=require("prompt-sync")();

let frase = prompt("Frase:");

let reverse = frase.split(``).reverse().join(``);

console.log(reverse)
