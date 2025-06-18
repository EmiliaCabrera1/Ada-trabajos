/*Ejercicio 2: Número mayor (función expresada) 
Crea una función expresada llamada encontrarMayor que reciba dos 
números como parámetros y devuelva el número mayor.*/
let numero1 = 21;
let numero2 = 20;

const encontrarMayor = (num1, num2) => {
  if (num1 > num2) {
    return num1;
  } else if (num2 > num1) {
    return num2;
  } else {
    return "Los números son iguales";
  }
};
console.log("El número mayor es: " + encontrarMayor(numero1, numero2));
