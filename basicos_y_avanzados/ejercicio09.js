// EJERCICIO 09

// Completa la función denominada sumNumbers que toma un array de números como argumento y devuelve la suma de todos los números del array.

const numbers = [1, 2, 3, 5, 45, 37, 58];

function sumNumbers(numberList) {
  let sum = 0;
  for (let i = 0; i < numberList.length; i++) {
    sum += numberList[i]; // es lo mismo que -> sum = sum + numberList[i];
  }
  // Se puede usar un console.log("La sumatoria es: " + sum) dentro de la función; Sin embargo, como nos dice Antonio y Alberto en uno de los vídeos, es mejor práctica retornar el resultado para que la función sea más flexible y reutilizable.
  return sum;
  // Devuelve la suma de los números del array al llamar a la función sumNumbers(numbers);
}

console.log(`La suma total es: ${sumNumbers(numbers)}`);
// Muestra el resultado de la función.. La suma total es: 151


// EXTRA: Utilizando arrow functions
// const sumNumbers = numberList => numberList.reduce((sum, num) => sum + num, 0);
// console.log(`La suma total es: ${sumNumbers(numbers)}`);

// Al tener un solo parámetro (numberList), se puede quitar los paréntesis.
// También, Si no se usa las llaves {} en la flecha, JavaScript entiende que se retorna directamente el resultado de esa línea (un retorno implícito).
// El 0 del final es el valor inicial de sum.