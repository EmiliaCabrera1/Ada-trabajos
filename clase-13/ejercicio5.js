/*Ejercicio 5: Concatenar nombres (función expresada) 
Crea una función expresada llamada concatenarNombres que reciba dos 
nombres (nombre y apellido) como parámetros y devuelva el nombre 
completo concatenado. */

const prompt = require("prompt-sync")();
const inputNombre = prompt(`Por favor, ingresa tu nombre: `);
const inputApellido = prompt(`Por favor, ingresa tu apellido: `);
let nombre = inputNombre;
let apellido = inputApellido;

const concatenarNombres = (nombre, apellido) => {
  return `Tu nombre completo es ${nombre} ${apellido}`;
};
console.log(concatenarNombres(nombre, apellido));
