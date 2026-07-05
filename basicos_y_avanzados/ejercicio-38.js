// EJERCICIO 38

/*
Dado el siguiente código usa for...of y for...in para hacer la media del volumen de todos los sonidos favoritos que tienen los usuarios.

Es decir, la media de volumen de todos los volumenes juntos.
*/

const users = [
  {
    name: "Alberto",
    favoritesSounds: {
      waves: { format: "mp3", volume: 50 },
      rain: { format: "ogg", volume: 60 },
      firecamp: { format: "mp3", volume: 80 },
    },
  },
  {
    name: "Antonio",
    favoritesSounds: {
      waves: { format: "mp3", volume: 30 },
      shower: { format: "ogg", volume: 55 },
      train: { format: "mp3", volume: 60 },
    },
  },
  {
    name: "Santiago",
    favoritesSounds: {
      shower: { format: "mp3", volume: 50 },
      train: { format: "ogg", volume: 60 },
      firecamp: { format: "mp3", volume: 80 },
    },
  },
  {
    name: "Laura",
    favoritesSounds: {
      waves: { format: "mp3", volume: 67 },
      wind: { format: "ogg", volume: 35 },
      firecamp: { format: "mp3", volume: 60 },
    },
  },
];

let totalVolume = 0;
let countSounds = 0;

for (const user of users) { // Bucle for...of para recorrer el array de usuarios
    for (const sound in user.favoritesSounds) { // Bucle for...in para recorrer los sonidos favoritos de cada usuario
        totalVolume += user.favoritesSounds[sound].volume; // Sumamos el volumen de cada sonido a totalVolume
        countSounds++; // Contabilizamos el número de sonidos para calcular la media
    }
}

const averageVolume = totalVolume / countSounds;
// Calculamos la media dividiendo totalVolume entre countSounds (número total de sonidos favoritos)

console.log('La sumatoria de todos los volúmenes de los sonidos favoritos es:', totalVolume);
console.log('El número total de sonidos favoritos es:', countSounds);
console.log('La media del volumen de todos los sonidos favoritos es:', averageVolume);
