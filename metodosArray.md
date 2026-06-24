# Algunos métodos Array

let array = [1,2,3,4,5];

// 1. push(): Añade uno o más elementos al final del array y devuelve la nueva longitud del array.
array.push(6);

// 2. pop(): Elimina el último elemento de un array y lo devuelve.
let ultimoElemento = array.pop();

// 3. shift(): Elimina el primer elemento de un array y lo devuelve.
let primerElemento = array.shift();

// 4. unshift(): Añade uno o más elementos al inicio de un array y devuelve la nueva longitud del array.
array.unshift(0);

// 5. slice(): Devuelve una copia de una parte del array dentro de un nuevo array.
let subArray = array.slice(2,4);

// 6. splice(): Cambia el contenido de un array eliminando elementos existentes y/o agregando nuevos elementos.
array.splice(2,1,'a','b','c');

// 7. concat(): Retorna un nuevo array que resulta de la concatenación de dos o más arrays.
let array2 = ['x','y','z'];
let newArray = array.concat(array2);

// 8. indexOf(): Devuelve el primer índice en el que se puede encontrar un elemento dado en el array, o -1 si no está presente.
let indice = array.indexOf(3);

// 9. forEach(): Ejecuta una función dada una vez por cada elemento del array.
array.forEach((elemento) => {
  console.log(elemento);
});

// 10. map(): Crea un nuevo array con los resultados de llamar a una función dada en cada elemento del array.
let nuevoArray = array.map((elemento) => elemento * 2);

// 11. filter(): Crea un nuevo array con todos los elementos que cumplan una condición dada.
let arrayFiltrado = array.filter((elemento) => elemento > 3);

// 12. reduce(): Aplica una función a un acumulador y a cada elemento (de izquierda a derecha) para reducirlo a un solo valor.
let suma = array.reduce((acumulador, elemento) => acumulador + elemento,0);

// 13. find(): Devuelve el valor del primer elemento del array que cumple la función de prueba proporcionada.
let encontrado = array.find((elemento) => elemento > 3);

// 14. sort(): Ordena los elementos de un array localmente y devuelve el array ordenado.
array.sort();

// 15. reverse(): Invierte el orden de los elementos de un array in-place.
array.reverse();
