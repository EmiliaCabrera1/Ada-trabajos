/*Ejercicio 4:  
Declara una variable nombre y pide al usuario que ingrese su nombre. 
Verifica si el nombre ingresado es igual a tu nombre. */

const prompt = require("prompt-sync")();
const input = prompt("Por favor, ingresa tu nombre: ");

const miNombre = "Emilia";
let nombre = input.trim();

if (nombre === miNombre) {
  console.log(`¡Hola ${miNombre}! Tenenmos el mismo nombre!`);
} else {
  console.log(`Hola ${nombre}, no tenemos el mismo nombre.`);
}
