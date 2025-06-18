/*Ejercicio 10: Factorial de un número (Ejercicio entrevista) 
Crea una función expresada llamada calcularFactorial que reciba un número 
y devuelva su factorial.*/
const prompt = require("prompt-sync")();
const inputNumero = prompt(`Por favor, ingresa un número: `);
let numero = parseInt(inputNumero);
const calcularFactorial = (numero) => {
  for (let i = numero - 1; i >= 1; i--) {
    numero = numero * i;
  }
  return numero;
};

console.log(`El factorial de ${numero} es ${calcularFactorial(numero)}.`);
