/*Ejercicio 4 – Tipo de Datos: 
Declarar 4 variables utilizando la palabra reservada let y asignarles valores según el tipo de dato que sugiera su nombre. Además, realizar operaciones y validaciones adicionales sobre estos valores.

Pasos a seguir:
Declaración de Variables:
1.	Declara una variable llamada verdadero y asígnale un dato de tipo booleano (true o false).
2.	Declara una variable llamada texto y asígnale un string de tu elección (puedes usar cualquier mensaje que prefieras).
3.	Declara una variable llamada numero y asígnale un dato numérico (puedes usar cualquier número entero o decimal).
4.	Declara una variable llamada nada y asígnale un valor que represente la ausencia de valor en JavaScript.

Operaciones y Validaciones:

1.	Realiza una operación matemática usando la variable número, por ejemplo, suma o resta con otro número de tu elección.
2.	Concatena el “string” de la variable texto con otro mensaje adicional.
3.	Verifica si la variable “verdadero” es true o false y muestra un mensaje diferente según el resultado.
4.	Implementa una condición para verificar si la variable nada es null y muestra un mensaje si es así.

*/
const prompt = require("prompt-sync")();

let verdadero = true;
let texto = "Soy un texto!";
let numero = 33;
let nada = null;

let operacionMatematica = numero + 10;
let concatenacionTexto = texto + " ¡Y estoy probando JS!";
let mensajeVerdadero = verdadero
  ? "La variable 'verdadero' es true."
  : "La variable 'verdadero' es false.";
let mensajeNada =
  nada === null
    ? "La variable 'nada' es null."
    : "La variable 'nada' tiene un valor.";

console.log(`Operación matemática: ${operacionMatematica}`);
console.log(`Concatenación de texto: ${concatenacionTexto}`);
console.log(mensajeVerdadero);
console.log(mensajeNada);
