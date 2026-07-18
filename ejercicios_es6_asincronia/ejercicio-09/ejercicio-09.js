// EJERCICIO 9

// Ahora realizaremos una petición a la PokeAPI, queremos mostrar al entrar en la página
// la imagen de un Pokemon, la magia estará en que cada vez que recargues la página, será
// un nuevo Pokemon dentro de la primera generación de Pokemon, es decir, del 1 al 151.

// Los Pokemon no solo tienen una imagen, si no que tendrán muchas, hay que hallar la
// manera de encontrar la que más os guste.

// Para ello el HTML será muy sencillo (index.html), y la URL esta vez os la aportaremos
// directamente, aunque os aconsejamos echarle un ojo a la documentación ya que es muy
// completa.

// - Documentación: https://pokeapi.co/
// - URL: https://pokeapi.co/api/v2/pokemon/1

// Tened en cuenta que esta URL se refiere al pokemon número 1, que es bulbasaur, debemos
// hallar la manera de con una URL similar ir consiguiendo pokemons aleatorios dentro de
// unos límites.

const BASE_URL = "https://pokeapi.co/api/v2/pokemon/";

// FUNCIÓN ALEATORIA: Generar un número aleatorio entre 1 y 151 (inclusive)
// -----------------------------------------------------------------------------
const getRandomId = () => {
  // Math.random() da un número entre 0 y 0.999...
  // Lo multiplicamos por 151 y con Math.floor() eliminamos los decimales (da de 0 a 150)
  // Le sumamos 1 para que el rango final sea estrictamente de 1 a 151
  return Math.floor(Math.random() * 151) + 1;
};

// ASINCRONÍA: Vamos a la API a por el Pokémon aleatorio
// -----------------------------------------------------------------------------
const fetchRandomPokemon = async () => {
  const pokemonId = getRandomId();

  try {
    // Insertamos el ID aleatorio directamente en la URL
    const response = await fetch(`${BASE_URL}${pokemonId}`);
    const pokemonData = await response.json();

    // Le pasamos los datos a la función encargada de rellenar la pantalla
    renderPokemon(pokemonData);
  } catch (error) {
    console.error("Error al obtener el Pokémon:", error);
  }
};

// DISEÑAMOS: Ponemos la imagen y los datos en el HTML
// -----------------------------------------------------------------------------
const renderPokemon = (pokemon) => {
  // A) Capturamos la etiqueta <img> que ya existe en el HTML
  const pokemonImage = document.querySelector(".random-image");

  // B) Buscamos la mejor imagen en la PokeAPI; los sprites oficiales suelen guardarse
  // en esta ruta .sprites.other["official-artwork"].
  const officialArtwork = pokemon.sprites.other["official-artwork"].front_default;
  
  // Si ese Pokémon no tuviera esa imagen, usamos el sprite clásico por defecto
  pokemonImage.src = officialArtwork || pokemon.sprites.front_default;
  pokemonImage.alt = `Imagen de ${pokemon.name}`;

  // C) Crearemos elementos adicionales <h2> y <p> para mostrar el Nombre y Tipo(s)
  // Ponemos la primera letra en mayúscula para que quede mejor
  const capitalizedName = pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1);
  
  const pokemonNameHeading = document.createElement("h2");
  pokemonNameHeading.textContent = `Nº ${pokemon.id} - ${capitalizedName}`;

  // Usando .map() extraemos los nombres de los tipos y luego integrarlos en una sola
  // cadena de texto separada por comas con .join()
  const pokemonTypes = pokemon.types.map(item => item.type.name).join(", ");
  
  const pokemonTypesParagraph = document.createElement("p");
  pokemonTypesParagraph.textContent = `Tipo(s): ${pokemonTypes}`;

  // D) Finalmente, introducimos todo en el body usando .append() (versión moderna)
  document.body.append(pokemonNameHeading, pokemonTypesParagraph);
};

// EJECUTAMOS:
// -----------------------------------------------------------------------------
fetchRandomPokemon();

// EXTRA:

// ".random-image" y .other["official-artwork"], ambos con "guion medio"

// El primero es un "string" y JavaScript no busca interpretarlo, simplemente toma el
// texto entre comillas y se lo entrega al CSS. En CSS las clases se escriben con un
// punto y se permiten los guiones.

// El segundo es un objeto de JavaScript, aquí si lee las palabras (contenido) como
// parte del código, en JavaScript la regla nos OBLIGA a usar corchetes con comillas
// al tener un guion medio, de lo contrario JavaScript puede volverse loco al intentar
// "restar" la palabra official - artwork. Por lo tanto:
// INCORRECTO   --> other.official-artwork
// CORRECTO     --> .other["official-artwork"]
// -----------------------------------------------------------------------------

// Función "Tradicional" y "Arrow Funtions" asíncronas

// async function fetchRandomPokemon() {
// -- Aquí va el código asíncrono --
// }

// const fetchRandomPokemon = async () => {
// -- Aquí va el código asíncrono --
// }
