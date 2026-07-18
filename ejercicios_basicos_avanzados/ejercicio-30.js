// EJERCICIO 30

/*
Dada una lista de canciones, clasifícalas en un objeto donde las claves sean los géneros y los valores sean arrays de canciones de ese género.

Utiliza bucles para estructurar este objeto e imprime el resultado por consola.
*/

const tracks = [
  { title: 'Enter Sandman', genre: 'Metal' },
  { title: 'Back in Black', genre: 'Rock' },
  { title: 'Bohemian Rhapsody', genre: 'Rock' },
  { title: 'Blinding Lights', genre: 'Pop' },
  { title: 'Old Town Road', genre: 'Country' },
  { title: 'Smells Like Teen Spirit', genre: 'Grunge' },
  { title: 'Bad Guy', genre: 'Pop' },
  { title: 'Thunderstruck', genre: 'Rock' },
  { title: 'Hotel California', genre: 'Rock' },
  { title: 'Stairway to Heaven', genre: 'Rock' }
];

const tracksByGenre = {};

tracks.forEach((track) => {
  const { genre } = track; // Desestructuramos el objeto track para obtener el género de la canción

  if (!tracksByGenre[genre]) {
  // Si no existe la clave del género en el objeto, la creamos con un array vacío, similar al anterior ejercicio
    tracksByGenre[genre] = [];
  }

  tracksByGenre[genre].push(track); // Agregamos la canción a su repectivo array por género
  
});

console.log('Clasificación de las canciones por género:');
console.log(tracksByGenre);
