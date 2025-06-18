/*Ejercicio 7: Mensaje según la hora 
Declara una variable global llamada horaActual (puedes asignarle un valor 
f
 ijo). Crea una función declarada llamada mostrarSaludo que imprima 
"Buenos días" si la hora es menor a 12, "Buenas tardes" si es menor a 18, o 
"Buenas noches" en cualquier otro caso.*/

const prompt = require("prompt-sync")();
const inputHora = prompt(`Por favor ingresa la hora: `);
let horaActual = parseInt(inputHora);
function mostrarSaludo() {
  if (horaActual < 12) {
    console.log("Buenos días");
  } else if (horaActual < 18) {
    console.log("Buenas tardes");
  } else {
    console.log("Buenas noches");
  }
}
mostrarSaludo();
