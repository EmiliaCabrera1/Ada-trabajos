/*Ejercicio 2: Verificar si un número es positivo, negativo o cero 
Enunciado: 
En este ejercicio, practicarás el uso de condicionales (if, else). Escribe un 
programa en JavaScript que: 
1. Pida al usuario que ingrese un número. 
2. Verifique si el número es positivo, negativo o igual a cero. 
3. Muestre un mensaje indicando cuál es el caso. 
Requisitos: 
• Utiliza una estructura de control de flujo (if, else if, else) para hacer las 
verificaciones. 
• Usa parseFloat() para convertir la entrada del usuario a un número.*/

//RESOLUCION
const prompt = require("prompt-sync")();
const input = prompt("Por favor, ingresa un número:");
const numero = parseFloat(input);

if (!isNaN(numero)) {
  if (numero > 0) {
    console.log(`El número ${numero} es positivo.`);
  } else if (numero < 0) {
    console.log(`El número ${numero} es negativo.`);
  } else {
    console.log("El número es cero.");
  }
} else {
  console.log("Por favor, ingresa un número válido.");
}
