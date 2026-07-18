// EJERCICIO 12

/*
 Valores únicos: Crea una función que reciba por parámetro un array y compruebe si existen elementos duplicados, en caso que existan los elimina para retornar un array sin los elementos duplicados.

 Pista: puedes generar un nuevo array y devolverlo.

 Puedes usar este array para probar tu función:
*/

const duplicates = [
    'sushi',
    'pizza',
    'burger',
    'potatoe',
    'pasta',
    'ice-cream',
    'pizza',
    'chicken',
    'onion rings',
    'pasta',
    'soda'
];

function removeDuplicates(list) {
    const listaUnicos = [];
    // Creamos un nuevo array vacío para almacenar los elementos únicos

    for (const element of list) {

        if (!listaUnicos.includes(element)) {
            // Verificamos si el elemento 'no está' en el array de elementos únicos

            listaUnicos.push(element);
            // Y si el elemento no está, lo agregamos al array de elementos únicos
        }
    }
    return listaUnicos; // Retornamos el array con los elementos únicos
}

console.log("Array sin duplicados:", removeDuplicates(duplicates));
// Imprimimos el resultado para verificar que los elementos duplicados han sido eliminados

// EXTRA:
// Otra forma de hacerlo es usando Set, que es una estructura de datos que solo permite valores únicos.

// function removeDuplicatesWithSet(list) {
//    return [...new Set(list)];
// }
// console.log("Array sin duplicados (usando Set):", removeDuplicatesWithSet(duplicates));

// Creamos un nuevo Set a partir del array original, y luego lo convertimos de nuevo a un array
// usando el operador spread (...)
