/* Se está realizando el desarrollo de una aplicación para control de gastos. Cada 
día, el usuario ingresa sus gastos cotidianos. 
La idea es solo registrar el total de los gastos, al finalizar la jornada. 
Para simplificar, vamos a considerar que todos los meses tienen cuatro 
semanas. 
Los gastos estarán en una matriz de 4x7, cada fila representa una semana y 
cada columna un día. Es decir, fila 0, semana 1, fila 1, semana 2, etc. Columna 
0, día 1, columna 1, día 2, etcétera.  
a) Lo que nos solicitan es dar el total de gastos en una semana. Recordemos 
que cada fila representa una semana, es decir, si nos indican semana 2 
tenemos que sumar la fila 1 de la matriz. Recordar que las matrices 
comienzan siempre en posición 0.  
b) La aplicación también tendrá una parte de estadísticas, para esto nos 
solicitan dar el total de un día en particular, por ejemplo del día 3, acá 
también tengamos en cuenta lo que ocurre con las filas, ya que las 
columnas también comienzan en 0. 
c) Por último, es necesario tener el total de gastos realizados en el mes. 
✔ Pregunta para pensar, ¿es lo mismo recorrer por filas o por columnas para 
resolver este último punto? 
d) Obtener cuál fue la semana que más gastos se realizaron. Indicar el día 
que más gastos se realizaron.  */

const matriz = [
  [1135, 2500, 1800, 920, 1254, 700, 6000],
  [420, 830, 1250, 540, 8023, 4500, 52],
  [582, 4156, 125, 9854, 541, 12589, 258],
  [8961, 145, 2587, 9874, 3698, 540, 8745],
];
function totalGastosSemana(matriz, semana) {
  let totalSemana = 0;
  for (let i = 0; i < matriz[semana].length; i++) {
    totalSemana += matriz[semana][i];
  }
  return totalSemana;
}

function totalGastosDia(matriz, dia) {
  let totalDia = 0;
  for (let i = 0; i < matriz.length; i++) {
    totalDia += matriz[i][dia];
  }
  return totalDia;
}
function totalGastosMes(matriz) {
  let totalMes = 0;
  for (let i = 0; i < matriz.length; i++) {
    for (let j = 0; j < matriz[i].length; j++) {
      totalMes += matriz[i][j];
    }
  }
  return totalMes;
}

function semanaMasGastos(matriz) {
  const totalSemana = matriz.map((semana) => semana.reduce((a, b) => a + b, 0));
  const maxGastos = Math.max(...totalSemana);
  const semana = totalSemana.indexOf(maxGastos);
  console.log(
    `La semana con más gastos es la semana ${
      semana + 1
    } con un total de ${maxGastos}`
  );
}

semanaMasGastos(matriz);
