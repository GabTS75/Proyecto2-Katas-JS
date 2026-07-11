/*
Se pide lo siguiente:

1.1 Basandote en el array siguiente, crea una lista ul > li
dinámicamente en el html que imprima cada uno de los paises.
const countries = ['Japón', 'Nicaragua', 'Suiza', 'Australia', 'Venezuela'];
1.2 Elimina el elemento que tenga la clase .fn-remove-me.
1.3 Utiliza el array para crear dinamicamente una lista ul > li de elementos
en el div de html con el atributo data-function="printHere".
const cars = ['Mazda 6', 'Ford fiesta', 'Audi A4', 'Toyota corola'];
1.4 Crea dinamicamente en el html una serie de divs que contenga un elemento
h4 para el titulo y otro elemento img para la imagen.
const countries = [
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=1'},
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=2'},
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=3'},
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=4'},
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=5'}
];
1.5 Basandote en el ejercicio anterior. Crea un botón que elimine el último
elemento de la serie de divs.
1.6 Basandote en el ejercicio anterior. Crea un botón para cada uno de los
divs que elimine ese mismo elemento del html.
*/

// DESARROLLO DEL EJERCICIO 3

// 1.1
const countries = ['Japón', 'Nicaragua', 'Suiza', 'Australia', 'Venezuela'];
const ulCountries = document.createElement('ul'); // Creamos <ul>
countries.forEach((country) => { // Recorremos el array con un forEach
    const li = document.createElement('li'); // Creamos un <li> en cada vuelta
    li.textContent = country; // Cada país de la lista lo metemos al <li>
    ulCountries.appendChild(li); // y vamos agregando a la lista <ul>
});
document.body.appendChild(ulCountries); // Finalmente lo metemos al body
// -----------------------------------------------------------------------------

// 1.2
const elementoAEliminar = document.querySelector('.fn-remove-me');
// con .querySElector buscamos y seleccionamos la clase (se encuentra en un <p>)
if (elementoAEliminar) { // Usamos if por seguridad, y si lo encuentra
    elementoAEliminar.remove(); // lo borra
}
// -----------------------------------------------------------------------------

// 1.3
const cars = ['Mazda 6', 'Ford fiesta', 'Audi A4', 'Toyota corola'];
const contenedorCoches = document.querySelector('[data-function="printHere"]');
// Buscamos y seleccionamos el <div> con el atributo data-function="printHere"
const ulCars = document.createElement('ul'); // Creamos <ul>
cars.forEach((car) => {
    const li = document.createElement('li');
    li.textContent = car;
    ulCars.appendChild(li);
});
contenedorCoches.appendChild(ulCars);
// Metemos el <ul> dentro del contenedor <div> que buscamos anteriormente
// -----------------------------------------------------------------------------

// 1.4
const countryObjects = [
    {title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=1'},
    {title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=2'},
    {title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=3'},
    {title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=4'},
    {title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=5'}
];

countryObjects.forEach((item) => {
    const cardDiv = document.createElement('div'); // Creamos el elemento <div>
    cardDiv.classList.add('country-card'); // añadimos una clase a ese <div>
    const h4 = document.createElement('h4'); // Creamos el <h4>
    h4.textContent = item.title;
    const img = document.createElement('img'); // Creamos la imagen
    img.src = item.imgUrl; // Le asignamos el url de la imagen
    img.alt = item.title; // Asignamos "alt" del title, es buena practica

//* 1.6 (aprovechamos el bucle para este punto)
    const btnEliminarEste = document.createElement('button');
    // Cada botón es para eliminarse a sí mismo, se pide en el punto 1.6
    btnEliminarEste.textContent = 'Eliminar esta tarjeta'; // Texto del botón
    btnEliminarEste.addEventListener('click', () => { // "sensor" del botón
        // Al hacer clic en ese botón, borramos el cardDiv correspondiente
        // JavaScript sabrá qué tarjeta generó este botón.
        cardDiv.remove();
    });
    cardDiv.appendChild(h4); // Metemos el <h4> dentro del <div>
    cardDiv.appendChild(img); // El <img>, también dentro del <div> y además,
    cardDiv.appendChild(btnEliminarEste); //* Metemos el botón del punto 1.6
    document.body.appendChild(cardDiv); // Por último, metemos ese <div> al body
});
// -----------------------------------------------------------------------------

// 1.5
const btnEliminarUltimo = document.createElement('button');
btnEliminarUltimo.textContent = 'Eliminar el ÚLTIMO elemento de la lista';
document.body.appendChild(btnEliminarUltimo); // Ponemos en botón dentro del body
btnEliminarUltimo.addEventListener('click', () => { // usa su "sensor" propio
    const todasLasTarjetas = document.querySelectorAll('.country-card');
    // Busca y selecciona la lista actualizada cada vez que pulsamos el botón    
    if (todasLasTarjetas.length > 0) { // Preguntamos si queda alguna tarjeta
        const ultimaTarjeta = todasLasTarjetas[todasLasTarjetas.length - 1];
        // Para saber cuantas tarjetas quedan después de cada clic
        ultimaTarjeta.remove(); // Se va eliminando cada tarjeta, hasta la última
    } else {
        alert('¡Ya no quedan más tarjetas!');
        // Si ya no quedan ( 0 > 0 es false), entonces activamos una alerta
    }
});

// EXTRA:

// .className : Esta propiedad ve todas las clases del elemento como una sola
// cadena de texto (string), es decir, sobreescribe por completo, eliminando
// (si lo tuviera) alguna clase anterior.

// .classList.add() : Uso esta propiedad moderna .classList porque no ve las
// clases como un texto plano, sino como un listado de elementos independientes.
// en este caso .add() simplemente lo agrega al final.

// Además con .classList tenemos una variedad de métodos, como .add() que agrega,
// .remove() elimina la clase específica sin tocar las demás (si existen),
// . contains() que devuelve "true" o "false" si el elemento tiene o no la clase
// (idóneo para consutlas if) o también .toggle que hace "según se necesite", es
// decir, si la clase no está, entonces la pone, pero si está, la quita.
