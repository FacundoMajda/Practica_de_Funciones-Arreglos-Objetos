//Ejercicio 1 Obtener Suma
// let numeros = [1, 2, 3, 4, 5];
function obtenerSuma(arreglo) {
  let suma = 0;
  for (let i = 0; i < arreglo.length; i++) {
    suma += arreglo[i];
  }
  return suma;
}
console.log(obtenerSuma(numeros)); // debería devolver 15

//Ejercicio 2 Numeros pares de un array
function obtenerPares(arreglo) {
  let pares = [];
  for (let i = 0; i < arreglo.length; i++) {
    if (arreglo[i] % 2 === 0) {
      pares.push(arreglo[i]);
    }
  }
  return pares;
}

// let numeros = [1, 3, 4, 6, 7, 99, 8, 10, 12];
console.log(obtenerPares(numeros));

//Ejercicio 3 promedio ponderado (???)
function obtenerPromedioPonderado(notas, pesos) {
  if (notas.length !== pesos.length) {
    throw new Error("Los arreglos deben tener la misma longitud");
  }
  let sumaProductos = 0;
  let sumaPesos = 0;
  for (let i = 0; i < notas.length; i++) {
    sumaProductos += notas[i] * pesos[i];
    sumaPesos += pesos[i];
  }
  let promedioPonderado = sumaProductos / sumaPesos;

  return promedioPonderado;
}

//Ejercicio 4
function obtenerMaximo(arreglo) {
  let maximo = arreglo[0];

  for (let i = 1; i < arreglo.length; i++) {
    if (arreglo[i] > maximo) {
      maximo = arreglo[i];
    }
  }

  return maximo;
}
console.log("El número máximo es: " + maximoNumero);
