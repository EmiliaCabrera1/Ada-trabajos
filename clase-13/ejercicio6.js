/*Ejercicio 6: Convertir a minutos 
Crea una función declarada llamada convertirHorasAMinutos que reciba un 
número de horas como parámetro y devuelva el total en minutos.  */
const prompt = require("prompt-sync")();
const inputHoras = prompt(`Por favor, ingresa el número de horas: `);
let horas = parseFloat(inputHoras);
function convertirHorasAMinutos(horas) {
  return horas * 60;
}
console.log(`El total de minutos es: ${convertirHorasAMinutos(horas)} minutos`);
