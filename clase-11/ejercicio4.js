/*Ejercicio 4: ¿Es par o impar?
Los números pueden ser pares o impares. Escribe un programa que le pida al usuario un número 
y determine si es par o impar. Muestra un mensaje explicativo indicando qué significa cada caso.*/

const prompt = require("prompt-sync")();
let numero = parseInt(prompt("Introduce un número: "));
if (isNaN(numero)) {
  console.log("Por favor, introduce un número válido.");
} else if (numero % 2 === 0) {
  console.log(`El número ${numero} es par.`);
} else {
  console.log(`El número ${numero} es impar.`);
}
