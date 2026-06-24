// EJERCICIO 10

// Calcular un promedio es una tarea extremadamente común, así que prueba a implementar esa funcionalidad en la siguiente función.

const numbers = [12, 21, 38, 5, 45, 37, 6];

function average(numberList) {
    let contador = 0; // Inicializamos a cero
    for (const number of numberList) { // Recorremos el array con un for...of
        contador += number; // Sumamos cada número al contador
    }
    return contador / numberList.length; // Dividimos la sumatoria total por la cantidad de números para obtener el promedio
}

console.log(`La sumatoria de numbers es: ${average(numbers) * numbers.length}`);
// Multiplicamos el resultado de average por la longitud del array para obtener la sumatoria total de los números

console.log(`El promedio de numbers es: ${average(numbers)}`);
// Llamamos a la función average con el array numbers y mostramos el resultado en la consola

// EXTRA: Utilizando arrow functions

// const average = numberList => numberList.reduce((sum, num) => sum + num, 0) / numberList.length;
// console.log(`La sumatoria de numbers es: ${average(numbers) * numbers.length}`);
// console.log(`El promedio de numbers es: ${average(numbers)}`);
