// Decidi resolver todos los ejercicios en el mismo archivo.js, sus respectivas salidas se encuentran al final del documento (console.log)

// Ejercicio 1: esMayorEdad
function esMayorEdad(edad) {
  if (edad >= 18) {
    return true;
  } else {
    return false;
  }
}

// Ejercicio 2: calcularAreaRectangulo
function calcularAreaRectangulo(base, altura) {
  return base * altura;
}

// Ejercicio 3: esPalindromo
function esPalindromo(cadena) {
  var cadenaInvertida = cadena.split("").reverse().join("");
  return cadena === cadenaInvertida;
}

// Ejercicio 4: generarNumeroAleatorio
function generarNumeroAleatorio() {
  var numero = Math.floor(Math.random() * 10) + 1;
  return numero;
}
// Ouput de las funciones

console.log(esMayorEdad(20)); // true
console.log(esMayorEdad(15)); // false
console.log(calcularAreaRectangulo(5, 3)); // 15

console.log(esPalindromo("radar")); // true
console.log(esPalindromo("hello")); // false

console.log(generarNumeroAleatorio()); // número aleatorio entre 1 y 10
