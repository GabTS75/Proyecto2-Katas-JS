// EJERCICIO 42

/*
Crea una función llamada swap que reciba un array y dos parametros que sean indices del array.

La función deberá intercambiar la posición de los valores de los indices que hayamos enviado como parametro. Es decir, intercambiar el lugar de un elemento por otro dentro del array.

Retorna el array resultante.
*/

const fantasticFour = [
  "La antorcha humana", // Posición 0
  "Mr. Fantástico", // 1
  "La mujer invisible", // 2
  "La cosa", // 3
];

function swap(array, index1, index2) {
    // Guardamos temporalmente el valor del primer índice
    const temp = array[index1];
    // Asignamos el valor del segundo índice al primer índice
    array[index1] = array[index2];
    // Asignamos el valor temporal al segundo índice
    array[index2] = temp;
    return array; // Obtenemos el array con los elementos intercambiados
}

console.log("Array original 'fantasticFour':");
console.log(fantasticFour);
console.log("-------------------------------------------------------");

console.log("Ejemplos del uso de swap:");
console.log("Intercambiamos los elementos en las posiciones 0 y 2:", swap(fantasticFour, 0, 2));
console.log("Intercambiamos los elementos en las posiciones 1 y 3:", swap(fantasticFour, 1, 3));
