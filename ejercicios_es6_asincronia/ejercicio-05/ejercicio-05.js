// EJERCICIO 5

// Dado el siguiente javascript, utiliza .filter() para mostrar por consola
// los streamers que incluyan la palabra introducida en el input. De esta forma,
// si introduzco 'Ru' me deberia de mostrar solo el streamer 'Rubius'. Si
// introduzco 'i', me deberia de mostrar el streamer 'Rubius' e 'Ibai'.

const streamers = [
    { name: 'Rubius', age: 32, gameMorePlayed: 'Minecraft' },
    { name: 'Ibai', age: 25, gameMorePlayed: 'League of Legends' },
    { name: 'Reven', age: 43, gameMorePlayed: 'League of Legends' },
    { name: 'AuronPlay', age: 33, gameMorePlayed: 'Among Us' }
];

const filterInput = document.querySelector('[data-function="toFilterStreamers"]');
// Buscamos y seleccionamos el input usando su atributo personalizado 'data-function'

filterInput.addEventListener('input', (event) => {
// Escuchar el input (se activa cada vez que el usuario escribe o borra una letra)
  
  const searchWord = event.target.value.toLowerCase();
  // Aquí vamos a pasarlo a minúsculas y lo guardamos

  const filteredStreamers = streamers.filter((streamer) => {
   // Filtramos los streamers que coincidan con la búsqueda

    const streamerNameLower = streamer.name.toLowerCase();
    // Pasamos también el nombre del streamer a minúsculas para una comparación justa
 
    return streamerNameLower.includes(searchWord);
    // Comprobamos si el nombre contiene la palabra buscada
  });

  console.clear(); // Mostramos el resultado, pero antes limpiamos consola
  console.log(filteredStreamers);
});

// EXTRA:

// 'change' solo se dispara cuando el usuario escribe algo y luego hace clic
// fuera del input (pierde el foco). No nos sirve para buscar en tiempo real.

// 'keyup' se dispara al soltar una tecla, pero tiene fallas (por ejemplo, si el
// usuario pega texto con el ratón o usa el autocompletar, no se activa).

// 'input' es el evento perfecto y moderno. Se dispara ante cualquier cambio en
// el valor del cuadro de texto, ya sea escribiendo, borrando, pegando o usando
// dictado de voz.

// Por tal motivo se recomienda el uso de 'input' preferentemente.