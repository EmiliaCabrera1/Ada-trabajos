/*Ejercicio 8:  
Pide al usuario que ingrese las longitudes de los tres lados de un 
triángulo. Determina y muestra si el triángulo es equilátero, isósceles o 
escaleno. (Investiga sobre los triángulos para determinar la formula) */

const prompt = require("prompt-sync")();
const lado1 = prompt(
  "Por favor, ingresa la longitud del primer lado de un triangulo en cm: "
);
const lado2 = prompt(
  "Por favor, ingresa la longitud del segundo lado de un triangulo en cm: "
);
const lado3 = prompt(
  "Por favor, ingresa la longitud del tercer lado de un triangulo en cm: "
);

if (lado1 === lado2 && lado2 === lado3) {
  console.log("El triángulo es equilátero.");
} else if (lado1 === lado2 || lado2 === lado3 || lado1 === lado3) {
  console.log("El triángulo es isósceles.");
} else {
  console.log("El triángulo es escaleno.");
}
