/*Ejercicio 3: Suma de dos números ingresados por el usuario 
Enunciado: 
Este ejercicio te ayudará a practicar la entrada de datos y el uso de operadores 
aritméticos. Escribe un programa que: 
1. Pida al usuario que ingrese dos números. 
2. Sume ambos números. 
3. Muestre el resultado de la suma. 
Requisitos: 
• Utiliza prompt() para recibir los números. 
• Utiliza parseFloat() para convertir las entradas a números. 
• Almacena los resultados en variables adecuadas y muestra el resultado. */

//RESOLUCION
const prompt = require("prompt-sync")();
const input1 = prompt("Por favor, ingresa el primer número:");
const input2 = prompt("Por favor, ingresa el segundo número:");
const numero1 = parseFloat(input1);
const numero2 = parseFloat(input2);
if (!isNaN(numero1) && !isNaN(numero2)) {
  const suma = numero1 + numero2; // Suma de los dos números
  console.log(`La suma de ${numero1} y ${numero2} es: ${suma}`);
} else {
  console.log("Por favor, ingresa números válidos.");
}
