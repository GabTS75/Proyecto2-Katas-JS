// EJERCICIO 4
// Haremos uso de arrow funtions de retorno implícito

// 4.1
// Dado el siguiente array, utiliza .filter() para generar un nuevo array
// con los valores que sean mayor que 18

const ages = [22, 14, 24, 55, 65, 21, 12, 13, 90];

// Dejamos pasar solo si 'age' es mayor que 18
const adults = ages.filter(age => age > 18);
console.log("--- Ejercicio 4.1 ---");
console.log(adults); // Mostrará: [22, 24, 55, 65, 21, 90]
// ---------------------------------------------------------------------------

// 4.2
// Del mismo array anterior (4.1), utiliza .filter() para generar un nuevo array
// con los valores que sean par.

const evenAges = ages.filter(age => age % 2 === 0);
// Calculamos el residuo, si es igual a 0 entonces será número par
// Estamos usando el mismo array 'ages' del ejercicio anterior
console.log("--- Ejercicio 4.2 ---");
console.log(evenAges); // Mostrará el array de pares [22, 14, 24, 12, 90]
// ---------------------------------------------------------------------------

// 4.3
// Dado el siguiente array, utiliza .filter() para generar un nuevo array
// con los streamers que tengan el gameMorePlayed = 'League of Legends'.

const streamers = [
	{name: 'Rubius', age: 32, gameMorePlayed: 'Minecraft'},
	{name: 'Ibai', age: 25, gameMorePlayed: 'League of Legends'},
	{name: 'Reven', age: 43, gameMorePlayed: 'League of Legends'},
	{name: 'AuronPlay', age: 33, gameMorePlayed: 'Among Us'}
];

// Comparamos la propiedad del objeto con el texto exacto
const lolStreamers = streamers.filter(
    streamer => streamer.gameMorePlayed === 'League of Legends'
);
console.log("--- Ejercicio 4.3 ---");
console.log(lolStreamers); // Devuelve los objetos de Ibai y Reven
// ---------------------------------------------------------------------------

// 4.4
// Del mismo array anterior (4.3), utiliza .filter() para generar un nuevo array
// con los streamers que incluyan el caracter 'u' en su propiedad .name. Recomendamos
// usar la funcion .includes() para la comprobación.

const streamersWithU = streamers.filter(streamer => streamer.name.includes('u'));
// Filtramos los streamers cuyo nombre incluya la letra 'u'

console.log("--- Ejercicio 4.4 ---");
console.log(streamersWithU);
// Devuelve los objetos de Rubius y AuronPlay (ambos tienen 'u' en su nombre)
// ---------------------------------------------------------------------------

// 4.5
// Del mismo array del punto 4.3, utiliza .filter() para generar un nuevo array con
// los streamers que incluyan el caracter 'Legends' en su propiedad .gameMorePlayed
// Recomendamos usar la funcion .includes() para la comprobación.
// Además, pon el valor de la propiedad .gameMorePlayed a MAYUSCULAS cuando .age sea
// mayor que 35.

const legendsStreamers = streamers
  .filter(streamer => streamer.gameMorePlayed.includes('Legends'))
  .map(streamer => { // Mapeamos y si cumple la condición, generamos una copia
    if (streamer.age > 35) {
      // Devolvemos la copia del streamer con el juego modificado
      return { ...streamer, gameMorePlayed: streamer.gameMorePlayed.toUpperCase() };
      // Usando el "Spread Operator"
    }
    return streamer;
  });
console.log("--- Ejercicio 4.5 ---");
console.log(legendsStreamers);
console.log("--- Array original ---");
console.log(streamers);
