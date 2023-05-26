// Ejercicio 1 Objeto Producto y función calcularTotal
let producto = {
  nombre: "Camisa",
  precio: 25,
  cantidad: 2,
};

function calcularTotal(producto) {
  return producto.precio * producto.cantidad;
}

let totalAPagar = calcularTotal(producto);
console.log("Total a pagar:", totalAPagar);

// Ejercicio 2 Objeto Persona y función presentarPersona
let persona = {
  nombre: "Juan",
  edad: 30,
  profesion: "Ingeniero",
};

function presentarPersona(persona) {
  console.log("Nombre:", persona.nombre);
  console.log("Edad:", persona.edad);
  console.log("Profesión:", persona.profesion);
}

presentarPersona(persona);

// Ejercicio 3 Función esMayorEdad
function esMayorEdad(persona) {
  return persona.edad >= 18;
}

let esMayor = esMayorEdad(persona);
console.log("¿Es mayor de edad?", esMayor);
