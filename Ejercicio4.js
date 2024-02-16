// Ejercicio 4:Ordenar un array
// Crea un array con números aleatorios.
// Ordena el array de forma ascendente.
// Ordena el array de forma descendente.
// Imprime el array antes y después de ordenarlo.

// Función para generar un array con números aleatorios
function generarArrayAleatorio(longitud) {
    let array = [];
    for (let i = 0; i < longitud; i++) {
      array.push(Math.floor(Math.random() * 100) + 1); // Números aleatorios entre 1 y 100
    }
    return array;
  }
  
  // Función para ordenar un array de forma ascendente
  function ordenarAscendente(array) {
    return array.slice().sort((a, b) => a - b);
  }
  
  // Función para ordenar un array de forma descendente
  function ordenarDescendente(array) {
    return array.slice().sort((a, b) => b - a);
  }
  
  // Función para imprimir un array
  function imprimirArray(array, mensaje) {
    console.log(mensaje + ": " + array.join(", "));
  }
  
  // Crear un array con números aleatorios
  let array = generarArrayAleatorio(10);
  
  // Imprimir el array original
  imprimirArray(array, "Array original");
  
  // Ordenar el array de forma ascendente
  let arrayAscendente = ordenarAscendente(array);
  imprimirArray(arrayAscendente, "Array ascendente");
  
  // Ordenar el array de forma descendente
  let arrayDescendente = ordenarDescendente(array);
  imprimirArray(arrayDescendente, "Array descendente");
  