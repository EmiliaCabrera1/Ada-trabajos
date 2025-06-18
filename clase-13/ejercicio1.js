/*Ejercicio 1: Área de un triángulo (función declarada) (Ejercicio entrevista) 
Crea una función declarada llamada calcularAreaTriangulo que reciba dos 
parámetros: la base y la altura de un triángulo. La función debe devolver el 
área del triángulo. */

let base = 20;
let altura = 5;

function calcularAreaTriangulo(base, altura) {
  return (base * altura) / 2;
}
console.log("El área del triángulo es: " + calcularAreaTriangulo(base, altura));

// const calcularAreaTrinangulo = (base, altura) => {(base * altura) / 2 }
