/*Ejercicio 10:  
Pide al usuario que ingrese un número del 1 al 7 y muestra el día de la 
semana correspondiente. Si el número no está dentro de ese rango, 
muestra un mensaje de error.*/

const prompt = require("prompt-sync")();
const input = prompt("Por favor, ingresa un número del 1 al 7: ");

let numero = parseInt(input);

if (isNaN(numero) || numero < 1 || numero > 7) {
  console.log("Error: Por favor, ingresa un número válido del 1 al 7.");
} else {
  switch (numero) {
    case 1:
      console.log("El numero 1 corresponde al dia Lunes");
      break;
    case 2:
      console.log("El numero 2 corresponde al dia Martes");
      break;
    case 3:
      console.log("El numero 3 corresponde al dia Miércoles");
      break;
    case 4:
      console.log("El numero 4 corresponde al dia Jueves");
      break;
    case 5:
      console.log("El numero 5 corresponde al dia Viernes");
      break;
    case 6:
      console.log("El numero 6 corresponde al dia Sábado");
      break;
    case 7:
      console.log("El numero 7 corresponde al dia Domingo");
      break;
  }
}
