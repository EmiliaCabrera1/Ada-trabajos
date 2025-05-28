/*Ejercicio 6:  
Pide al usuario que ingrese su edad y verifica si es mayor o menor de 
edad. Muestra un mensaje personalizado según el caso.*/

const prompt = require("prompt-sync")();
const input = prompt("Por favor, ingresa tu edad: ");

let edad = parseInt(input);

if (isNaN(edad)) {
  console.log("Por favor, ingresa un número válido para la edad.");
} else if (edad >= 18) {
  console.log(`Eres mayor de edad, tienes ${edad} años.`);
} else {
  console.log(`Eres menor de edad, tienes ${edad} años.`);
}
