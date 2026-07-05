// EJERCICIO 40

/*
Parte 1: Crea una función llamada findArrayIndex que reciba como parametros un array de textos y un texto y devuelve la posición del array cuando el valor del array sea igual al valor del texto que enviaste como parámetro.

Haz varios ejemplos y compruébalos.

Parte 2: Usando la función anterior benefíciate de poder conocer el indice del array para crear una función llamada removeItem que, pasándole un array y un texto como parámetros (los mismos parámetros que en el anterior ejercicio), llame a la función anteriormente creada findArrayIndex y obtén el indice para posteriormente usar la función de javascript .splice() para eliminar el elemento del array.
Es decir, tienes que crear una función que elimine elementos del array y retorne el nuevo array sin el elemento, apoyándote en findArrayIndex.

Finalmente retorna el array.

De nuevo haz varios ejemplos para practicar y comprueba que funcionan correctamente.
*/

const mainCharacters = [
  "Luke", // Posición 0
  "Leia", // 1
  "Han Solo", // 2
  "Chewbacca", // 3
  "Rey", // 4
  "Anakin", // 5
  "Obi-Wan", // 6
];

// Parte 1: Función findArrayIndex
function findArrayIndex(array, text) {
    return array.indexOf(text);
    // El método indexOf devuelve el índice que coincida con el valor especificado, o -1 si no se encuentra.
}

console.log("Todos los personajes del array 'mainCharacters':");
console.log(mainCharacters);
console.log("------------------------------------------------------");

console.log("Ejemplos del uso de findArrayIndex:");
console.log("Posición de 'Leia':", findArrayIndex(mainCharacters, "Leia")); // 1
console.log("Posición de 'Han Solo':", findArrayIndex(mainCharacters, "Han Solo")); // 2
console.log("Posición de 'Obi-Wan':", findArrayIndex(mainCharacters, "Obi-Wan")); // 6
console.log("Posición de 'Yoda':", findArrayIndex(mainCharacters, "Yoda")); // -1, porque no existe en el array
console.log("------------------------------------------------------");

// Parte 2: Función removeItem
function removeItem(array, text) { // Recibe un array y texto como parámetros
    const index = findArrayIndex(array, text); // Se llama a findArrayIndex para obtener el indice del elemento a eliminar
    if (index !== -1) { // Si el indice es diferente de -1, entonces el elemento existe en el array y se puede eliminar
        array.splice(index, 1); // Se elimina el elemento usando el método .splice()
    }
    return array;
}

console.log("Ejemplos del uso de removeItem:");
console.log("Array después de intentar eliminar 'Dart Vader':", removeItem(mainCharacters, "Dart Vader"));
// Devuelve el array original porque "Dart Vader" no existe en el array
console.log("Array después de eliminar 'Han Solo':", removeItem(mainCharacters, "Han Solo"));
// Devuelve el array sin "Han Solo"
console.log("Array después de intentar eliminar 'Yoda':", removeItem(mainCharacters, "Yoda"));
// Devuelve el array sin cambios adicionales porque "Yoda" no existe en el array
