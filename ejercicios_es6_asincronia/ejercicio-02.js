// EJERCICIO 2

// 2.1
// Dado el siguiente array, crea una copia usando spread operators.

const pointsList = [32, 54, 21, 64, 75, 43]
// Abrimos corchetes nuevos y volcamos el contenido de pointsList
const pointsListCopy = [...pointsList];

console.log("--- Ejercicio 2.1 ---");
console.log(pointsListCopy); // [32, 54, 21, 64, 75, 43]
// Mostramos en consola esta copia totalmente independiente.
// ---------------------------------------------------------------------------

// 2.2
// Dado el siguiente objeto, crea una copia usando spread operators.

const toy1 = {name: 'Bus laiyiar', date: '20-30-1995', color: 'multicolor'};
// Abrimos llaves nuevas y volcamos las propiedades de toy1
const toy1Copy = { ...toy1 };

console.log("--- Ejercicio 2.2 ---");
console.log(toy1Copy); 
// Mostramos por consola la copia del objeto, es decir, el mismo contenido
// de toy1
// ---------------------------------------------------------------------------

// 2.3
// Dado los siguientes arrays, crea un nuevo array juntandolos usando
// spread operatos.

const pointsList1 = [32, 54, 21, 64, 75, 43];
const pointsList2 = [54, 87, 99, 65, 32];
// Vamos a volcar ambos arrays en uno nuevo
const allPoints = [...pointsList, ...pointsList2];

console.log("--- Ejercicio 2.3 ---");
console.log(allPoints); 
// Mostramos en consola ambos arrays
// ---------------------------------------------------------------------------

// 2.4
// Dado los siguientes objetos. Crea un nuevo objeto fusionando los dos
// con spread operators.

const toy2 = {name: 'Bus laiyiar', date: '20-30-1995', color: 'multicolor'};
const toy2Update = {lights: 'rgb', power: ['Volar like a dragon', 'MoonWalk']}
// Fusionamos ambos juguetes en uno solo que tenga todo.
const fullToy = { ...toy2, ...toy2Update };

console.log("--- Ejercicio 2.4 ---");
console.log(fullToy);
// Mostrará en consola todo el contenido de ambos objetos.
// ---------------------------------------------------------------------------

// 2.5
// Dado el siguiente array. Crear una copia de él eliminando la posición 2
// pero sin editar el array inicial. De nuevo, usando spread operatos.

const colors = ['rojo', 'azul', 'amarillo', 'verde', 'naranja'];

// Cortamos y cogemos los trozos excepto el índice 2
const colorsWithoutYellow = [
  ...colors.slice(0, 2), // Coge ['rojo', 'azul'], posición 0 y 1, menos la 2
  ...colors.slice(3) // Coge ['verde', 'naranja'], posición 3 hasta el final
];

console.log("--- Ejercicio 2.5 ---");
console.log("Original intacto:", colors); // Array original
console.log("Copia modificada:", colorsWithoutYellow); 
// Array modificado sin el color 'amarillo'
