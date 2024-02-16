// Un pequeño negocio necesita un sistema para gestionar su inventario de productos. El sistema debe permitir al usuario:
// Agregar nuevos productos: registrar nombre, descripción, precio, cantidad en stock y categoría.(crear array de objetos)
// Listar todos los productos: mostrar información completa de cada producto.
// Buscar un producto por nombre: mostrar información del producto si existe.
// Eliminar un producto: eliminar producto del inventario.
// Actualizar la cantidad en stock: modificar la cantidad disponible de un producto.

class Producto {
    constructor(nombre, descripcion, precio, cantidad, categoria) {
        this.nombre = nombre;
        this.descripcion = descripcion;
        this.precio = precio;
        this.cantidad = cantidad;
        this.categoria = categoria;
    }
}

let inventario = [];

function agregarProducto(nombre, descripcion, precio, cantidad, categoria) {
    const producto = new Producto(nombre, descripcion, precio, cantidad, categoria);
    inventario.push(producto);
}

function listarProductos() {
    console.log("Inventario de productos:");
    inventario.forEach(producto => {
        console.log("Nombre:", producto.nombre);
        console.log("Descripción:", producto.descripcion);
        console.log("Precio:", producto.precio);
        console.log("Cantidad:", producto.cantidad);
        console.log("Categoría:", producto.categoria);
        console.log("------------------------");
    });
}

function buscarProducto(nombre) {
    const productoEncontrado = inventario.find(producto => producto.nombre === nombre);
    if (productoEncontrado) {
        console.log("Información del producto encontrado:");
        console.log("Nombre:", productoEncontrado.nombre);
        console.log("Descripción:", productoEncontrado.descripcion);
        console.log("Precio:", productoEncontrado.precio);
        console.log("Cantidad:", productoEncontrado.cantidad);
        console.log("Categoría:", productoEncontrado.categoria);
    } else {
        console.log("El producto no se encontró en el inventario.");
    }
}

function eliminarProducto(nombre) {
    inventario = inventario.filter(producto => producto.nombre !== nombre);
    console.log("Producto eliminado correctamente del inventario.");
}

function actualizarCantidad(nombre, nuevaCantidad) {
    const producto = inventario.find(producto => producto.nombre === nombre);
    if (producto) {
        producto.cantidad = nuevaCantidad;
        console.log("Cantidad en stock actualizada correctamente.");
    } else {
        console.log("El producto no se encontró en el inventario.");
    }
}

agregarProducto("Camisa", "Camisa de algodón", 25, 50, "Ropa");
agregarProducto("Zapatillas", "Zapatillas deportivas", 50, 30, "Calzado");

listarProductos();
buscarProducto("Camisa");
eliminarProducto("Zapatillas");
actualizarCantidad("Camisa", 40);
listarProductos();

