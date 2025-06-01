/*Ejercicio 7 - Intercambio de Valores: Declara dos variables con valores iniciales y luego intercambia sus valores. Muestra los valores antes y después del intercambio en la consola.
Para intercambiar valores puedes usar varios métodos(usando una variable temporal, aritmética o asignación simultanea), eres libre de elegir el que desees, eso si, investiga sobre el que usaras.
*/
const prompt = require("prompt-sync")();
let primerValor = prompt("Ingresa el primer valor: ");
let segundoValor = prompt("Ingresa el segundo valor: ");
console.log(
  `Antes del intercambio: primerValor = ${primerValor}, segundoValor = ${segundoValor}`
);

//Asignacion sinmultanea, mas facil y limpio)

[segundoValor, primerValor] = [primerValor, segundoValor];
console.log(
  `Después del intercambio: primerValor = ${primerValor}, segundoValor = ${segundoValor}`
);
