// EJERCICIO 34

/*
Escribe una función que calcule el promedio de duración de una lista de películas.

Recibe un array de películas, cada una con su duración en minutos.

La función debe devolver el promedio de duración de todas las películas.
*/

const movies = [
  { title: 'Inception', duration: 148 },
  { title: 'The Dark Knight', duration: 152 },
  { title: 'Interstellar', duration: 169 },
  { title: 'Dunkirk', duration: 106 },
  { title: 'The Prestige', duration: 130 },
  { title: 'Memento', duration: 113 },
  { title: 'Batman Begins', duration: 140 },
  { title: 'The Dark Knight Rises', duration: 164 },
  { title: 'Tenet', duration: 150 },
  { title: 'Insomnia', duration: 118 }
];

function averageMovieDuration(movies) { // Función para calcular el promedio de duración de todas las películas
  const totalDuration = movies.reduce((sum, movie) => sum + movie.duration, 0);
  // Usando el método .reduce() podemos sumar la duración de todas las películas, iniciandolo en 0
  return totalDuration / movies.length;
  // Aquí tenemos la variable totalDuration con la sumatoria que nos da .reduce(), para obtener el promedio
  // dividiendolo entre la cantidad de películas con la propiedad .length del array (10 películas)
  // 0 + 148 = 148, 148 + 152 = 300, . . . 1272 + 118 = 1390, entonces 1390 / 10 = 139
}

console.log(`El promedio de duración de todas las películas es: ${averageMovieDuration(movies)} minutos.`);
