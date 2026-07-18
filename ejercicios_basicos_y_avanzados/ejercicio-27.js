// EJERCICO 27

/*
Utiliza un bucle para encontrar la serie de dibujos animados más antigua en el array y guarda su nombre en una variable.

Imprime el nombre por consola.
*/

const cartoons = [
  { name: 'Bugs Bunny', debut: 1938 },
  { name: 'SpongeBob SquarePants', debut: 1999 },
  { name: 'Tom and Jerry', debut: 1940 },
  { name: 'Mickey Mouse', debut: 1928 },
  { name: 'Scooby-Doo', debut: 1969 },
  { name: 'The Flintstones', debut: 1960 },
  { name: 'Batman: The Animated Series', debut: 1992 },
  { name: 'The Simpsons', debut: 1989 },
  { name: 'Pokémon', debut: 1997 },
  { name: "Dexter's Laboratory", debut: 1996 }
];

let oldestCartoon = cartoons[0]; // Inicializamos la variable con el primer elemento del array

for (let i = 1; i < cartoons.length; i++) {
  // Comenzamos el bucle desde el segundo elemento para comparar con el primero
  if (cartoons[i].debut < oldestCartoon.debut) {
  // Va a comparar en cada iteración si el año de debut es menor
  // Y si es así, lo guarda en la variable oldestCartoon
    oldestCartoon = cartoons[i];
  }
}
console.log('La serie de dibujos animados más antigua es:', oldestCartoon.name);
// Mostramos por consola, la variable con el nombre de la serie de dibujos animados más antigua.
