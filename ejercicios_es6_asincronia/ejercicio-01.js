// EJERCICIO 1

// 1.1
// En base al siguiente javascript, crea variables en base a las propiedades 
// del objeto usando object destructuring e imprimelas por consola. Cuidado,
// no hace falta hacer destructuring del array, solo del objeto.

const game = {title: 'The Last of Us 2', gender: ['action', 'zombie', 'survival'], year: 2020}

// Aplicamos el destructuring del objeto:
const { title, gender, year } = game;
// Por ser un objeto, el orden no importa, buscará y cogerá el nombre exacto ¡ojo!
// Imprimimos en consola
console.log("--- Ejercicio 1.1 ---");
console.log(title);  // 'The Last of Us 2'
console.log(gender); // ['action', 'zombie', 'survival']
console.log(year);   // 2020
// ---------------------------------------------------------------------------

// 1.2
// En base al siguiente javascript, usa destructuring para crear 3 variables
// llamadas fruit1, fruit2 y fruit3, con los valores del array. Posteriormente
// imprimelo por consola.

const fruits = ['Banana', 'Strawberry', 'Orange'];

// Aplicamos el destructuring del array:
const [fruit1, fruit2, fruit3] = fruits;
// Siendo un array tomará en cuenta el orden de las variables ¡ojo!
console.log("--- Ejercicio 1.2 ---");
console.log(fruit1); // 'Banana'
console.log(fruit2); // 'Strawberry'
console.log(fruit3); // 'Orange'
// ---------------------------------------------------------------------------

// 1.3
// En base al siguiente javascript, usa destructuring para crear 2
// variables igualandolo a la función e imprimiendolo por consola.

const animalFunction = () => {
    return {nameanimal: 'Bengal Tiger', race: 'Tiger'} 
};

// Aquí llamamos a la función y aplicamos destructuring en su retorno
const { nameanimal, race } = animalFunction();

console.log("--- Ejercicio 1.3 ---");
console.log(nameanimal); // 'Bengal Tiger'
console.log(race); // 'Tiger'
// ---------------------------------------------------------------------------

// 1.4
// En base al siguiente javascript, usa destructuring para crear las
// variables name y itv con sus respectivos valores. Posteriormente crea
// 3 variables usando igualmente el destructuring para cada uno de los años
// y comprueba que todo esta bien imprimiendolo.

const car = {namecar: 'Mazda 6', itv: [2015, 2011, 2020] }

// Primero sacamos 'name' e 'itv' del objeto 'car'
const { namecar, itv } = car;

// Luego, como 'itv' es un array, aplicamos destructuring para los 3 años
const [year1, year2, year3] = itv;

console.log("--- Ejercicio 1.4 ---");
console.log(namecar);  // 'Mazda 6'
console.log(itv);   // [2015, 2011, 2020]
console.log(year1); // 2015
console.log(year2); // 2011
console.log(year3); // 2020
