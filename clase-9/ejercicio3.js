/*Ejercicio 3: 
Declara dos variables booleanas condicion1 y condicion2. Pide al 
usuario que ingrese dos valores booleanos (true o false) y muestra el 
resultado de diversas combinaciones lógicas.*/
const prompt = require("prompt-sync")();
let input1 = prompt(
  "Por favor, ingresa el primer valor booleano (true o false) con minuscula: "
);
let input2 = prompt(
  "Por favor, ingresa el segundo valor booleano (true o false) con minuscula: "
);

let condicion1 = input1 === "true";
let condicion2 = input2 === "true";

console.log(`Condición 1: ${condicion1}`);
console.log(`Condición 2: ${condicion2}`);
console.log(`Condición 1 AND Condición 2: ${condicion1 && condicion2}`);
console.log(`Condición 1 OR Condición 2: ${condicion1 || condicion2}`);
console.log(`NOT Condición 1: ${!condicion1}`);
console.log(`NOT Condición 2: ${!condicion2}`);
