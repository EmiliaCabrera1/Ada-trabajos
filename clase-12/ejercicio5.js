/*Crea un programa que solicite al usuario ingresar 5 nombres y los almacene en 
un array. Luego, solicita al usuario ingresar un nombre y verifica si ese nombre 
se encuentra en el array. (Pueden desglosar en pasos el código si eso les facilita 
su desarrollo)*/
const prompt = require("prompt-sync")();
let nombres = [];

for (let i = 0; i < 5; i++) {
  let nombre = prompt(`Ingresa el nombre ${i + 1}:`);
  nombres.push(nombre);
}

let nombreBuscado = prompt("Ingresa un nombre para buscar:");
if (nombres.includes(nombreBuscado)) {
  console.log("El nombre está en la lista.");
} else {
  console.log("El nombre NO está en la lista.");
}
