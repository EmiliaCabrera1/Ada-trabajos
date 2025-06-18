/* Ejercicio 8: Convertir grados Celsius a Fahrenheit (Ejercicio entrevista) 
Crea una función expresada llamada convertirCelsiusAFahrenheit que reciba 
una temperatura en grados Celsius y devuelva la temperatura en Fahrenheit. */
const prompt = require("prompt-sync")();
const inputCelsius = prompt(
  `Por favor, ingresa la temperatura en grados Celsius: `
);
let celsius = parseFloat(inputCelsius);
const convertirCelsiusAFahrenheit = (celsius) => (celsius * 9) / 5 + 32;
const fahrenheit = convertirCelsiusAFahrenheit(celsius);
console.log(`${celsius} grados Celsius son ${fahrenheit} grados Fahrenheit.`);
