// Filtrar elementos de un array
// Crea un array con nombres de personas y sus edades.
// Filtra el array para obtener solo los nombres de las personas mayores de edad (por ejemplo, usando filter).
// Imprime los nombres de las personas que cumplen con el criterio.
// Usa un bucle para recorrer el array filtrado y realizar alguna acción con cada elemento (por ejemplo, mostrar un mensaje).

// Creamos el array con nombres y edades de personas
const personas = [
    { nombre: "Juan", edad: 25 },
    { nombre: "María", edad: 18 },
    { nombre: "Pedro", edad: 30 },
    { nombre: "Ana", edad: 16 },
    { nombre: "Luis", edad: 20 }
];

// Filtramos el array para obtener solo las personas mayores de edad (mayores o iguales a 18)
const personasMayores = personas.filter(persona => persona.edad >= 18);

// Imprimimos los nombres de las personas que cumplen con el criterio
console.log("Personas mayores de edad:");
personasMayores.forEach(persona => console.log(persona.nombre));

// Usamos un bucle para recorrer el array filtrado y mostrar un mensaje con cada elemento
console.log("\nMensaje para cada persona mayor de edad:");
personasMayores.forEach(persona => {
    console.log(`${persona.nombre} es mayor de edad.`);
});
