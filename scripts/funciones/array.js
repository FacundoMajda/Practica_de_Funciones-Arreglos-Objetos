//Ejercicio 1 Obtener Suma
let numeros = [1, 2, 3, 4, 5];
function obtenerSuma(arreglo) {
  let suma = 0;
  for (let i = 0; i < arreglo.length; i++) {
    suma += arreglo[i];
  }
  return suma;
}
console.log(obtenerSuma(numeros)); // debería devolver 15

//Ejercicio 2

function obtenerPares(arreglo) {
  let pares = [];
  for (let i = 0; i < arreglo.length; i++) {
    if (arreglo[i] % 2 === 0) {
      pares.push(arreglo[i]);
    }
  }
  return pares;
}

let numeros = [1, 3, 4, 6, 7, 99, 8, 10, 12];
console.log(obtenerPares(numeros));
