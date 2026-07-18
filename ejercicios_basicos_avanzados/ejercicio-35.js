// EJERCICIO 35

/*
Desarrolla una función que busque en un array de objetos representando mutantes si existe alguno con un poder específico y retorne un mensaje indicando si fue encontrado o no.

Considera el caso de múltiples mutantes con el mismo poder.
*/

const mutants = [
  { name: 'Wolverine', power: 'regeneration' },
  { name: 'Magneto', power: 'magnetism' },
  { name: 'Professor X', power: 'telepathy' },
  { name: 'Jean Grey', power: 'telekinesis' },
  { name: 'Rogue', power: 'power absorption' },
  { name: 'Storm', power: 'weather manipulation' },
  { name: 'Mystique', power: 'shape-shifting' },
  { name: 'Beast', power: 'superhuman strength' },
  { name: 'Colossus', power: 'steel skin' },
  { name: 'Nightcrawler', power: 'teleportation' },
  { name: 'Deeadpool', power: 'regeneration' }, // Mutante agregado para probar función
];

function findMutantByPower(mutants, power) {

    const foundMutants = mutants.filter(mutant => mutant.power === power);
    // método .filter() para obtener todos los mutantes que tengan el poder especificado

    if (foundMutants.length > 0) {
        return `Se encontraron ${foundMutants.length} mutante(s) con el poder "${power}": ${foundMutants.map(m => m.name).join(', ')}`;
        // método .map() para obtener los nombres de los mutantes encontrados y .join() para unirlos en una cadena separada por comas
    } else {
        return `No se encontró ningún mutante con el poder "${power}".`;
    }
}

console.log(findMutantByPower(mutants, 'telepathy'));
// Retornará "Se encontraron 1 mutante(s) con el poder "telepathy": Professor X"
console.log(findMutantByPower(mutants, 'regeneration'));
// Retornará "Se encontraron 2 mutante(s) con el poder "regeneration": Wolverine, Deeadpool"
