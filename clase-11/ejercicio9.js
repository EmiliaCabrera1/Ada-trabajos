/*Ejercicio 9: Cuenta regresiva para el despegue
Crea un programa que simule la cuenta regresiva para el lanzamiento de un cohete. 
El programa debe contar desde 10 hasta 0 e imprimir "¡Despegue!" al final. Usa un ciclo 
for para realizar la cuenta regresiva.
*/

const prompt = require("prompt-sync")();
let cuentaRegresiva = 10;
for (let i = cuentaRegresiva; i >= 1; i--) {
  console.log(i);
}
console.log("¡Despegue!");
