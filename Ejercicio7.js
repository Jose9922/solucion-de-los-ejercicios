// Eliminar elementos duplicados de un array
// Crea un array con elementos duplicados.
// Elimina los elementos duplicados del array.

const arrayConDuplicados = [1, 2, 3, 4, 5, 1, 2, 3];

const arraySinDuplicados = Array.from(new Set(arrayConDuplicados));

console.log("Array sin duplicados:", arraySinDuplicados);