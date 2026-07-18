// EJERCICIO 24

/*
Utiliza un bucle para filtrar personajes de Star Wars por la especie "Human" y guárdalos en un nuevo array llamado humanCharacters.

Imprime este nuevo array por consola.
*/

const characters = [
  { name: 'Luke Skywalker', species: 'Human' },
  { name: 'Darth Vader', species: 'Human' },
  { name: 'Chewbacca', species: 'Wookiee' },
  { name: 'Leia Organa', species: 'Human' },
  { name: 'R2-D2', species: 'Droid' },
  { name: 'C-3PO', species: 'Droid' },
  { name: 'Obi-Wan Kenobi', species: 'Human' },
  { name: 'Yoda', species: 'Unknown' },
  { name: 'Han Solo', species: 'Human' }
];
const humanCharacters = [];

for (const character of characters) { // Recorremos el array de personajes con un bucle for...of
  if (character.species === 'Human') { // Buscamos si la especie del personaje es "Human"
    humanCharacters.push(character); // Si es así, lo agregamos al array humanCharacters
  }
}

console.log("PERSONAJES HUMANOS:");
console.log(humanCharacters);
