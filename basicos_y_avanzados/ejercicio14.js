// EJERCICIO 14

/*
Contador de repeticiones: Crea una función que nos devuelva el número de veces que se repite cada una de las palabras que lo conforma.

Por ejemplo, que devuelva: code:4, repeat: 1, eat: 1,...

Podéis conformar el formato que queráis para la devolución del resultado siempre y cuando sea claro.

Puedes usar este array para probar tu función:
*/

const words = [
    'code',
    'repeat',
    'eat',
    'sleep',
    'code',
    'enjoy',
    'sleep',
    'code',
    'enjoy',
    'sleep',
    'code'
];

function repeatCounter(list) {

    const counter = {}; // Creamos un objeto vacío para guardar los resultados

    for (const word of list) {
        // Si la palabra ya existe en el objeto, le sumamos 1
        if (counter[word]) {
            counter[word]++;
        } else {
            // Si no existe, la inicializamos en 1
            counter[word] = 1;
        }
    }
    return counter;
}

const result = repeatCounter(words);
console.log(result);

// EXTRA:
// Otra forma de hacerlo es usando el método reduce, el cual nos permite reducir un array
// a un solo valor (en este caso, un objeto con el contador de repeticiones).

/*
function repeatCounterWithReduce(list) {
    return list.reduce((acc, word) => {
        acc[word] = (acc[word] || 0) + 1;
        return acc;
    }, {});
}
const resultWithReduce = repeatCounterWithReduce(words);
console.log(resultWithReduce);
*/

// acc (el acumulador): Es la variable donde estamos guardando el conteo.
// En la primera vuelta, este acumulador empieza siendo el objeto vacío {} que se ve
// al final de la función ", {});" (está después de la coma).
// Y esto: acc[word] = (acc[word] || 0) + 1; significa que si la palabra ya existe en el objeto,
// le sumamos 1, y si no existe, la inicializamos en 1.
// Con el return acc; retornamos el objeto acumulador en cada vuelta del bucle, es obligatorio 
// retornar el acumulador modificado. Si no se hace, la siguiente palabra recibirá un acumulador
// vacío o roto (undefined).
// Cuando el bucle termina, nos quedamos con el objeto final con el conteo de todas las palabras.
