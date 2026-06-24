// EJERCICIO 08

// Buscar la palabra más larga: Completa la función que tomando un array de strings como argumento devuelva el más largo, en caso de que dos strings tenga la misma longitud deberá devolver el primero.

const avengers = [
    "Hulk",
    "Thor",
    "Iron Man",
    "Captain A.",
    "Spiderman",
    "Captain M.",
];

// La siguiente función debe retornar la palabra más larga de un array de strings.

function findLongestWord(stringList) {

    let palabraMasLarga = "";
    // Inicializamos la variable con una cadena vacía para asegurarnos de que cualquier palabra encontrada sea la más larga, ese será nuestro criterio inicial.

    // Recorremos cada palabra en el array utilizando un bucle for...of.
    for (const palabra of stringList) {
        if (palabra.length > palabraMasLarga.length) {
            // Irá comparando la longitud de la palabra actual con la longitud de la palabra más larga encontrada hasta ahora.
            palabraMasLarga = palabra;
            // Si la palabra actual es más larga, actualizamos la variable palabraMasLarga con esta nueva palabra.
        }
    }
    return palabraMasLarga;
}

console.log(`La palabra más larga de Avengers es: ${findLongestWord(avengers)}`);

//EXTRA: Si tenemos varias palabras de la misma longitud, se puede modificar la función para que muestre todas las palabras que sean iguales en longitud en lugar de solo una.

// else if (palabra.length === palabraMasLarga.length) {
//     console.log(`${palabra} es igual a ${palabraMasLarga}`);
// }
