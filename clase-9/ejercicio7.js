/*Ejercicio 7:  
Pide al usuario que ingrese su peso en kilogramos y conviértelo a 
libras. Muestra el resultado con un mensaje. (Averigua como pasar de 
kg a libras, Pista: 2.20462) */

const prompt = require("prompt-sync")();

const input = prompt("Por favor, ingresa tu peso en kilogramos: ");
let pesoKg = parseFloat(input);

if (isNaN(pesoKg)) {
  console.log("Por favor, ingresa un número válido para el peso.");
} else {
  let pesoLibras = pesoKg * 2.20462;
  console.log(`Tu peso en libras es: ${pesoLibras} lbs`);
}
