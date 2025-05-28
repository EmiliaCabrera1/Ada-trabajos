/*Ejercicio 5: 
Escribe un programa que pida al usuario que ingrese tres números y 
determine cuál es el mayor de los tres.*/

const prompt = require("prompt-sync")();

const input1 = prompt("Por favor, ingresa el primer número: ");
const input2 = prompt("Por favor, ingresa el segundo número: ");
const input3 = prompt("Por favor, ingresa el tercer número: ");

let numero1 = parseFloat(input1);
let numero2 = parseFloat(input2);
let numero3 = parseFloat(input3);

if (numero1 >= numero2 && numero1 >= numero3) {
  console.log(`El número mayor es: ${numero1}`);
} else if (numero2 >= numero1 && numero2 >= numero3) {
  console.log(`El número mayor es: ${numero2}`);
} else {
  console.log(`El número mayor es: ${numero3}`);
}
