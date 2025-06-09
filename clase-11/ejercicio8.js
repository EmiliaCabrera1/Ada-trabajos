/*Ejercicio 8: Encuentra los múltiplos de un número
Escribe un programa que le pida al usuario un número entero positivo y muestre todos 
los múltiplos de ese número entre 1 y 100. Utiliza un ciclo for para resolverlo.*/

const prompt = require("prompt-sync")();
let numero = parseInt(prompt("Introduce un número entero positivo: "));
if (isNaN(numero) || numero <= 0) {
  console.log("Por favor, introduce un número entero positivo válido.");
} else {
  console.log(`Múltiplos de ${numero} entre 1 y 100:`);
  for (let i = 1; i <= 100; i++) {
    if (i % numero === 0) {
      console.log(i);
    }
  }
}
