/*Para este ejercicio vamos a generar dos funciones: 
a) Una va a sumar los valores en la diagonal marcada en rojo. 
b) La otra va a marcar los valores de la diagonal marcada en verde. 
Ambas funciones deben devolver un resultado único. Rojo: 505 
Verde 505 
IMPORTANTE: Para hacer este ejercicio, tendrán que investigar sobre el 
método “push” en los Arrays. ¡Este método lo veremos en las próximas clases, 
pero si desean pueden investigarlo para resolver este desafío!*/
function crearMatriz() {
  let matriz = [];
  for (let i = 0; i < 10; i++) {
    matriz[i] = [];
    for (let j = 0; j < 10; j++) {
      matriz[i][j] = i * 10 + j + 1;
    }
  }
  return matriz;
}

function sumarDiagonalRoja(matriz) {
  let suma = 0;
  for (let i = 0; i < 10; i++) {
    let j = i;
    suma = suma + matriz[i][j];
  }
  console.log("Suma de la diagonal roja: " + suma);
}

function sumarDiagonalVerde(matriz) {
  let suma = 0;
  for (let i = 0; i < 10; i++) {
    let j = 9 - i;
    suma = suma + matriz[i][j];
  }
  console.log("Suma de la diagonal verde: " + suma);
}

sumarDiagonalRoja(crearMatriz());
sumarDiagonalVerde(crearMatriz());
