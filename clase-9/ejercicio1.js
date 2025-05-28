/*Ejercicio 1:  
Declara dos variables numéricas numero1 y numero2. Pide al usuario 
que ingrese dos números y muestra cuál es mayor o si son iguales. */

const prompt = require("prompt-sync")();
const input1 = prompt("Por favor, ingresa el primer número:");
const input2 = prompt("Por favor, ingresa el segundo número:");
let numero1 = parseFloat(input1);
let numero2 = parseFloat(input2);

if (numero1 === numero2) {
  console.log(`Los números son iguales.`);
} else if (numero1 > numero2) {
  console.log(`El número mayor es: ${numero1}`);
} else {
  console.log(`El número mayor es: ${numero2}`);
}
