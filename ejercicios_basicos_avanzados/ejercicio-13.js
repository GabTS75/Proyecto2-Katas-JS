// EJERCICIO 13

/*
Buscador de nombres:
Crea una función que reciba por parámetro un array y el valor que desea comprobar que existe dentro de dicho array. Esta función comprueba si existe el elemento, y en caso de que exista nos devuelve un true y la posición de dicho elemento y por la contra un false.
*/

const names = [
    'Peter',
    'Steve',
    'Tony',
    'Natasha',
    'Clint',
    'Logan',
    'Xabier',
    'Bruce',
    'Peggy',
    'Jessica',
    'Marc'
];

function nameFinder(nameList, nameToSearch) {
    // Buscamos el índice del nombre en la lista
    const index = nameList.indexOf(nameToSearch);

    // Si el índice es diferente a -1, significa que existe
    if (index !== -1) {
        return { exists: true, position: index };
    } else {
        return { exists: false };
    }
}

// Ejemplo:
console.log(nameFinder(names, 'Gabriel')); // { exists: false }
console.log(nameFinder(names, 'Jessica')); // { exists: true, position: 9 }
