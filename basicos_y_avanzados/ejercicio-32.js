// EJERCICIO 32

/*
Crea una función que reciba un array de objetos representando a varios miembros de los X-Men y su año de aparición. La función debe retornar el miembro más antiguo.

Utiliza este array para probar tu función.
*/

const xMen = [
  { name: 'Wolverine', year: 1974 },
  { name: 'Cyclops', year: 1963 },
  { name: 'Storm', year: 1975 },
  { name: 'Phoenix', year: 1963 },
  { name: 'Beast', year: 1963 },
  { name: 'Gambit', year: 1990 },
  { name: 'Nightcrawler', year: 1975 },
  { name: 'Magneto', year: 1963 },
  { name: 'Professor X', year: 1963 },
  { name: 'Mystique', year: 1978 }
];

function findOldestXMen(xMen) {
  let oldest = xMen[0];
  for (let i = 1; i < xMen.length; i++) {
    if (xMen[i].year < oldest.year) {
      oldest = xMen[i];
    }
  }
  return oldest;
}

console.log('Uno de los miembros más antiguos de los X-Men es:');
console.log(findOldestXMen(xMen)); // { name: 'Cyclops', year: 1963 }


// EXTRA:
// Se puede usar el metodo .reduce(), este permite comparar el elemento "acumulado" con el "actual"
// y retornar el que cumpla la condición, es decir, el año más bajo (el más antiguo)

// const findOldestXMen = (list) => {
//   return list.reduce((oldest, current) => { // Si el año es menor, pasa a ser el más antiguo
//     return current.year < oldest.year ? current : oldest;
//   });
// };
// console.log('El primero de los más antiguos:', findOldestXMen(xMen));

// Como sabemos que son 5 miembros los más antiguos (1963), también podemos filtrar y obtener a todos,
// por ejemplo, si usamos el método .filter():

// const oldestYear = xMen.reduce((min, current) => current.year < min ? current.year : min, xMen[0].year);
// const allOldestXMen = xMen.filter(mutant => mutant.year === oldestYear);
// console.log('Los fundadores de 1963 son:', allOldestXMen);
