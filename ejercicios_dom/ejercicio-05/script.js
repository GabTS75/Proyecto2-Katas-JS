/*
Se pide lo siguiente:

Basandote en el array siguiente, crea una lista ul > li dinámicamente en el html que
imprima cada uno de los albums. Que tenga la apariencia de una web completa dentro de
lo posible.
*/

const albums = [
    "De Mysteriis Dom Sathanas",
    "Reign of Blood",
    "Ride the Lightning",
    "Painkiller",
    "Iron Fist",
];

// DESARROLLO DEL EJERCICIO 5

const mainContainer = document.querySelector('main');
// Buscamos y seleccionamos el contenedor <main> en el que meteremos los álbumes

const ulAlbums = document.createElement('ul');
// Creamos el elemento <ul>, es el elemento general de toda la lista

ulAlbums.classList.add('albums-grid');
// Le añadimos una clase para poder darle diseño de "rejilla" (grid) en CSS

albums.forEach((albumName) => { // Recorremos el array para crear tarjetas
    const liAlbum = document.createElement('li');
    // Creamos el elemento <li>, que será una tarjeta para cada álbum
    liAlbum.classList.add('album-card');
    // Le agregamos también una clase para el diseño

    const albumTitle = document.createElement('h3');
    // Creamos este elemento para el texto interno de cada tarjeta, permite una
    // mejor manipulación en CSS (opcional)
    albumTitle.textContent = albumName; // Metemos los nombres de cada álbum

    // Puedes simular un icono o decoración metalera dentro de la tarjeta
    const decoration = document.createElement('span');
    // Creamos una decoración para el elemento <span>
    decoration.textContent = "⚡"; // Le metemos el rayo
    decoration.classList.add('card-icon'); // y le ponemos una clase para su diseño

    liAlbum.appendChild(decoration); // Metemos el rayo (decoración) y los nombres
    liAlbum.appendChild(albumTitle); // de los álbumes dentro del <li> (tarjeta)

    ulAlbums.appendChild(liAlbum); // Luego metemos el <li> dentro del <ul>
});

mainContainer.appendChild(ulAlbums);
// Finalmente, introducimos la lista completa (el <ul>) con todas sus tarjetas
// (los <li>) dentro del <main>

// CONTADOR DINÁMICO
const counterSpan = document.querySelector('#album-counter');
// Buscamos y seleccionamos el id="album-counter" dentro del <span> que creamos en
// el <footer> del HTML

counterSpan.textContent = albums.length;
// Le asignamos el total de elementos del array usando .length
// De tal manera que, si mañana añadimos 10 álbumes más al array, el número total
// de álbumes se actualizará solo.
