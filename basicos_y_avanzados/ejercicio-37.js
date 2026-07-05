// EJERCICIO 37

/*
Dado el siguiente código, usa for...of para recorrer el array de películas, genera un nuevo array con las categorías de las películas e imprime por consola el array de categorías.

Ten en cuenta que las categorías no tienen que repetirse.

Es decir, const categorias = ["comedia", "aventura", "acción", "thriller", "animación"]

Para filtrar las categorías puedes ayudarte de la función .includes().
*/

const movies = [
  {
    title: "Bracula: Condemor II",
    duration: 192,
    categories: ["comedia", "aventura"],
  },
  {
    title: "Spider-Man: No Way Home",
    duration: 122,
    categories: ["aventura", "acción"],
  },
  {
    title: "The Voices",
    duration: 223,
    categories: ["comedia", "thriller"],
  },
  {
    title: "Shrek",
    duration: 111,
    categories: ["comedia", "aventura", "animación"],
  },
];

const categorias = []; // Nuevo array para categorías únicas

for (const movie of movies) { // Bucle for...of para el array de películas
  for (const category of movie.categories) { // Bucle for...of para las categorías de cada película
    if (!categorias.includes(category)) {
      // Aquí usamos .includes() para verificar (filtrando) si la categoría ya está en el array de categorías 
      // Si no está incluida en el array de categorías, entonces se agrega al array de categorías
      categorias.push(category);
    }
  }
}

console.log('Las categorías de las películas son:', categorias);
