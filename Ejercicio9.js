// Agrupar elementos de un array por una propiedad
// Crea un array con objetos que tengan una propiedad en común (por ejemplo, color, tamaño, tipo).
// Agrupa los elementos del array por el valor de la propiedad común.

// Creamos un array de objetos que representan frutas
let frutas = [
    { nombre: "Manzana", tipo: "Fruta", color: "Rojo" },
    { nombre: "Plátano", tipo: "Fruta", color: "Amarillo" },
    { nombre: "Naranja", tipo: "Fruta", color: "Naranja" },
    { nombre: "Uva", tipo: "Fruta", color: "Morado" },
    { nombre: "Pera", tipo: "Fruta", color: "Verde" },
    { nombre: "Fresa", tipo: "Fruta", color: "Rojo" }
  ];
  
  function agruparPorPropiedad(array, propiedad) {
    let grupos = {};
  
    array.forEach(elemento => {
      let valorPropiedad = elemento[propiedad];
  
      if (!grupos[valorPropiedad]) {
        grupos[valorPropiedad] = [];
      }
  
      grupos[valorPropiedad].push(elemento);
    });
  
    return grupos;
  }
  
  let frutasAgrupadasPorTipo = agruparPorPropiedad(frutas, "tipo");
  
  console.log("Frutas agrupadas por tipo:", frutasAgrupadasPorTipo);
  