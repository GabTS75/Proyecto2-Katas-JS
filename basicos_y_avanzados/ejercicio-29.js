// EJERCICIO 29

/*
Agrupa las películas de Star Wars por década de lanzamiento en un objeto donde las claves son las décadas y los valores son arrays de películas.

Utiliza bucles para lograrlo e imprime el objeto final por consola.
*/

const starWarsMovies = [
  { title: 'A New Hope', releaseYear: 1977 },
  { title: 'The Empire Strikes Back', releaseYear: 1980 },
  { title: 'Return of the Jedi', releaseYear: 1983 },
  { title: 'The Phantom Menace', releaseYear: 1999 },
  { title: 'Attack of the Clones', releaseYear: 2002 },
  { title: 'Revenge of the Sith', releaseYear: 2005 },
  { title: 'The Force Awakens', releaseYear: 2015 },
  { title: 'The Last Jedi', releaseYear: 2017 },
  { title: 'The Rise of Skywalker', releaseYear: 2019 },
  { title: 'Rogue One', releaseYear: 2016 },
  { title: 'Solo', releaseYear: 2018 }
];


const moviesByDecade = {}; // Creamos el objeto vacío donde agruparemos todo

starWarsMovies.forEach((movie) => { // Iteramos con forEach sobre cada película del array

  const decade = Math.floor(movie.releaseYear / 10) * 10 + 's';
  // Calculamos la década y le añadimos una 's' para que quede '19XXs'
  // Math.floor redondea hacia abajo, y multiplicamos por 10 para obtener la década correcta
  // Ejemplo: 1977 / 10 = 197.7, Math.floor(197.7) = 197, 197 * 10 = 1970

  if (!moviesByDecade[decade]) { // El ! significa que si no existe la década en el objeto, entonces entra en el if
  // Y esto sirve para separar con un array vacío las películas de cada década
    moviesByDecade[decade] = [];
  }

  moviesByDecade[decade].push(movie); // Metemos la película en el array de su década correspondiente

});

console.log('Grupos de películas de Star Wars por década de lanzamiento:');
console.log(moviesByDecade); // Imprimimos el objeto final
