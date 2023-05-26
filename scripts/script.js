// Ejercicio 1
function verificarNumero() {
  let numero = prompt("Ingrese un número:");

  if (numero > 0) {
    return "El número es positivo.";
  } else if (numero < 0) {
    return "El número es negativo.";
  } else {
    return "El número es 0.";
  }
}

console.log(verificarNumero());

// Ejercicio 2
function esPrimo(numero) {
  if (numero <= 1) {
    return false;
  }

  for (let i = 2; i <= Math.sqrt(numero); i++) {
    if (numero % i === 0) {
      return false;
    }
  }

  return true;
}

let numero = prompt("Ingrese un número para verificar si es primo:");
if (esPrimo(numero)) {
  console.log("El número es primo.");
} else {
  console.log("El número no es primo.");
}

// Ejercicio 3
function celsiusToFahrenheit(celsius) {
  return (celsius * 9) / 5 + 32;
}

function fahrenheitToCelsius(fahrenheit) {
  return ((fahrenheit - 32) * 5) / 9;
}

let temperatura = prompt("Ingrese una temperatura:");
let unidad = prompt(
  "Ingrese la unidad de temperatura (C para Celsius, F para Fahrenheit):"
);

if (unidad === "C") {
  console.log(celsiusToFahrenheit(temperatura) + "°F");
} else if (unidad === "F") {
  console.log(fahrenheitToCelsius(temperatura) + "°C");
} else {
  console.log("Unidad de temperatura inválida.");
}

// Ejercicio 4
function calcularTotalCompra() {
  let total = 0;
  let precio = prompt(
    "Ingrese el precio del producto (escriba 'total' para obtener el total de la compra):"
  );

  while (precio !== "total") {
    total += parseFloat(precio);
    precio = prompt(
      "Ingrese el precio del producto (escriba 'total' para obtener el total de la compra):"
    );
  }

  return total;
}

console.log("El total de la compra es: " + calcularTotalCompra());
