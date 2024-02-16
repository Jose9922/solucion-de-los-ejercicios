// Ejercicio 3: Buscar un elemento en un array
// Crea un array con al menos 10 elementos de diferentes tipos (números, strings, booleanos).
// Busca un elemento específico en el array por su valor.
// Imprime la posición (índice) del elemento encontrado o un mensaje si no se encuentra.
// Bonus: Usa diferentes métodos para realizar la búsqueda (por ejemplo, indexOf, find).

let elementos = [5, 6, "gato", "perro", "luz", "oscuridad", true, false, 22, 8];

const elementoABuscar = "perro";

const indiceUsandoIndexOf = elementos.indexOf(elementoABuscar);
console.log(indiceUsandoIndexOf !== -1 ? `El elemento "${elementoABuscar}" se encuentra en el índice ${indiceUsandoIndexOf}.` :
    `El elemento "${elementoABuscar}" no se encuentra en el array.`);

const indiceUsandoFindIndex = elementos.findIndex(item => item === elementoABuscar);
console.log(indiceUsandoFindIndex !== -1 ? `El elemento "${elementoABuscar}" se encuentra en el índice ${indiceUsandoFindIndex}.` :
    `El elemento "${elementoABuscar}" no se encuentra en el array.`);
