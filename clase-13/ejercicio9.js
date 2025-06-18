/*Ejercicio 9: Contar hasta un número 
Crea una función declarada llamada contarHasta que reciba un número y 
use un bucle para imprimir todos los números desde 1 hasta ese número. */
const prompt = require("prompt-sync")();
const inputNumero = prompt(`Por favor, ingresa un número: `);
let numero = parseInt(inputNumero);
function contarHasta(numero) {
  for (let i = 1; i <= numero; i++) {
    console.log(i);
  }
}
contarHasta(numero);
