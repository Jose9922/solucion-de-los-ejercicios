// Ejercicio 2: Agregar y eliminar elementos de un array
// Crea un array vacío.
// Agrega al menos 3 elementos al array utilizando diferentes métodos (por ejemplo, push, unshift).
// Elimina el último elemento del array.
// Elimina un elemento específico del array por su índice.
// Imprime el array final después de las modificaciones.

let array =[]

array.push("manzana"); 
array.unshift("naranja"); 
array.splice(1, 0, "plátano"); 

array.pop()

const indiceAEliminar = 1; 
array.splice(indiceAEliminar, 1);

console.log("Array final después de las modificaciones:", array);

