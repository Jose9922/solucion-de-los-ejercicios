// Convertir un array en un objeto
// Crea un array con elementos de diferentes tipos.
// Convierte el array en un objeto, donde cada elemento del array sea una propiedad del objeto.

const array = ["jose", 19, true, { ciudad: "ARMENIA" }, ["rojo", "verde", "azul"]];

const objeto = {};

array.forEach((elemento, indice) => {
    objeto[`propiedad${indice + 1}`] = elemento;
});

console.log("Objeto creado a partir del array:", objeto);
