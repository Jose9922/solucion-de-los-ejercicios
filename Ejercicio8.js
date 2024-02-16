// Encontrar el máximo y el mínimo de un array
// Crea un array con números.
// Encuentra el valor máximo y mínimo del array.
// Imprime el valor máximo y mínimo.

function encontrarMaximoYMinimo(array) {
    let maximo = array[0];
    let minimo = array[0];
  
    for (let i = 1; i < array.length; i++) {
      if (array[i] > maximo) {
        maximo = array[i]; 
      }
      if (array[i] < minimo) {
        minimo = array[i]; 
      }
    }
  
    return {
      maximo: maximo,
      minimo: minimo
    };
  }
  
  let numeros = [23, 45, 12, 67, 9, 54, 32, 76];
  
  let resultados = encontrarMaximoYMinimo(numeros);
  
  console.log("El valor máximo del array es:", resultados.maximo);
  console.log("El valor mínimo del array es:", resultados.minimo);
  