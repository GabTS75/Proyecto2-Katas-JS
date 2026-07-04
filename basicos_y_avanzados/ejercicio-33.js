// EJERCICIO 33

/*
Desarrolla una función que reciba un país por parámetro y devuelva su capital.

Utiliza un objeto para almacenar los países y sus capitales.

La función debe manejar casos en los que el país no esté en la lista, devolviendo un mensaje adecuado.
*/

const capitals = {
  Spain: 'Madrid',
  France: 'Paris',
  Italy: 'Rome',
  Germany: 'Berlin',
  Portugal: 'Lisbon',
  Poland: 'Warsaw',
  Greece: 'Athens',
  Austria: 'Vienna',
  Hungary: 'Budapest',
  Ireland: 'Dublin'
};

function getCapital(country) { // Función para obtener la capital de un país
  if (capitals[country]) { // Si el país existe en el objeto
    return capitals[country]; // Entonces retorna su capital
  } else { // Si no
    return `No se encontró la capital del país: ${country}`; // Retorna un mensaje indicando que no lo econtró
  }
}

console.log(getCapital('Spain')); // Madrid
console.log(getCapital('Austria')); // Vienna
console.log(getCapital('Perú')); // No se encontró la capital del país: Perú
console.log(getCapital('Canada')); // No se encontró la capital del país: Canadá
