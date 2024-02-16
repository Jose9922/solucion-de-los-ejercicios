// Ejercicio 1: Crear un array de nombres y recorrerlo
// Crea un array con al menos 5 nombres de personas.
// Recorre el array e imprime cada nombre en la consola.
// Imprime la longitud del array.

const nombres = ["Juan", "María", "Pedro", "Ana", "Luisa"];

console.log("Nombres en el array:");
nombres.forEach(nombre => {
    console.log(nombre);
});

console.log("Longitud del array:", nombres.length);
