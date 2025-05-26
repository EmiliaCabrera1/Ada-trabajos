/*Ejercicio 1: Calcula el doble de un número 
Enunciado: 
En este ejercicio, practicarás el uso de variables y operadores aritméticos. Debes 
escribir un programa en JavaScript que: 
1. Solicite al usuario que ingrese un número cualquiera. 
2. Calcule el doble de ese número. 
3. Muestre el resultado en la consola. 
Requisitos: 
• Utiliza la función prompt() para solicitar el dato al usuario. 
• Almacena el número ingresado en una variable. 
• Utiliza un operador aritmético para calcular el doble del número.*/

//RESOLUCION
//prompt para que el usuario ingrese el numero
const prompt = require("prompt-sync")();
const input = prompt("Por favor, ingresa un número:");
const numero = parseFloat(input);
//verificamo si el numero es un numero, si es palabra avisaque no es valido
if (!isNaN(numero)) {
  let doble = numero * 2;
  console.log(`El doble de ${numero} es: ${doble}`);
} else {
  console.log("Por favor, ingresa un número válido.");
}
