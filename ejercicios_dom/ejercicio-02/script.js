/*
Se pide lo siguiente:

2.1 Inserta dinamicamente en un html un div vacio con javascript.
2.2 Inserta dinamicamente en un html un div que contenga una p con javascript.
2.3 Inserta dinamicamente en un html un div que contenga 6 p utilizando un loop con javascript.
2.4 Inserta dinamicamente con javascript en un html una p con el texto 'Soy dinámico!'.
2.5 Inserta en el h2 con la clase .fn-insert-here el texto 'Wubba Lubba dub dub'.
2.6 Basandote en el siguiente array crea una lista ul > li con los textos del array.
    const apps = ['Facebook', 'Netflix', 'Instagram', 'Snapchat', 'Twitter'];
2.7 Elimina todos los nodos que tengan la clase .fn-remove-me
2.8 Inserta una p con el texto 'Voy en medio!' entre los dos div.
    Recuerda que no solo puedes insertar elementos con .appendChild.
2.9 Inserta p con el texto 'Voy dentro!', dentro de todos los div con la clase .fn-insert-here
*/

// DESARROLLO DEL EJERCICIO 2

// 2.1
const divVacio = document.createElement('div');
// Haciendo uso de .createElement, creamos el elemento 'div' (etiqueta HTML) en la memoria de JS
// y almacenamos en la variable divVacio para su posterior uso
document.body.appendChild(divVacio);
// Usando .appendChild lo "empujaremos" al final del body para que se vea en el HTML
// ----------------------------------------------------------------------------------------------

// 2.2
const divConP = document.createElement('div'); // Creamos los elementos <div> y <p>
const pInterno = document.createElement('p'); // este <p> estará dentro del <div>
pInterno.textContent = "Hola, estoy dentro del div del punto 2.2";
// Incluimos un texto en el pInterno usando .textContent para "verlo" mejor
divConP.appendChild(pInterno);
// Aquí metemos ese <p> dentro de <div> en memoria
document.body.appendChild(divConP);
// seguidamente metemos ese <div> en el body (ya lleva el <p> dentro)
// ----------------------------------------------------------------------------------------------

// 2.3
const divContenedorSeis = document.createElement('div'); // Creamos <div>
for (let i = 0; i < 6; i++) { // Creamos el bucle for de 0 a 5 (6 vueltas)
    const pBucle = document.createElement('p'); // En cada vuelta creará el elemento <p>
    pBucle.textContent = `Párrafo número ${i + 1} creado`;
    // Agregamos un texto para cada vuelta, indicando el <p> creado
    divContenedorSeis.appendChild(pBucle); // Ahora lo meteremos dentro del <div>
}
document.body.appendChild(divContenedorSeis);
// Luego de tener los 6 párrafos dentro del <div>, agregamos ese <div> al body
// ----------------------------------------------------------------------------------------------

// 2.4
const pDinamico = document.createElement('p');
pDinamico.textContent = 'Soy dinámico!';
document.body.appendChild(pDinamico);
// Básicamente los mismos pasos anteriores, creamos <p>, le ponemos un texto y agregamos al body
// ----------------------------------------------------------------------------------------------

// 2.5
const h2Especifico = document.querySelector('h2.fn-insert-here');
// Aquí no creamos, solo buscamos la clase en el <h2>
h2Especifico.textContent = 'Wubba Lubba dub dub';
// Le ponemos el texto específico a esa etiqueta
// ----------------------------------------------------------------------------------------------

// 2.6
const apps = ['Facebook', 'Netflix', 'Instagram', 'Snapchat', 'Twitter']; // Array con apps
const ulApps = document.createElement('ul');
// Creamos el elemento <ul> que va a acontener la lista del array

apps.forEach((app) => { // Recorremos el array con un forEach
    const liApp = document.createElement('li');
    // Creamos "al hijo" <li> de la lista en cada vuelta
    liApp.textContent = app;
    // El asignamos a ese <li> el contenido, osea, el nombre de cada app (uno a uno del array)
    ulApps.appendChild(liApp); // y vamos metiéndolo dentro del elemento <ul>
});
document.body.appendChild(ulApps); // Finalmente, añadimos al body
// ----------------------------------------------------------------------------------------------

// 2.7
const elementosAEliminar = document.querySelectorAll('.fn-remove-me');
// Usamos querySelectorAll porque vamos a coger a todos los que tengan esa clase
elementosAEliminar.forEach((elemento) => {
    // Recorremos la lista (NodeList) con el forEach a cada elemento
    elemento.remove(); // y con el método .remove(), eliminamos cada uno de los elementos
});
// ----------------------------------------------------------------------------------------------

// 2.8
const pIntermedio = document.createElement('p'); // Creamos el elemento <p>
pIntermedio.textContent = 'Voy en medio!'; // Le ponemos el texto
const todosLosDivs = document.querySelectorAll('div');
// Buscamos todos los <div> en la página HTML
todosLosDivs[0].after(pIntermedio);
// Vamos a usar el método .after() para ubicarlo después de la posicón 0 del primer <div>
// encontrado, es decir, entre el primero y el segundo <div>
// Obs.: .appendChild() mete solo al final, con .after() podemos hacerlo "después de"
// ----------------------------------------------------------------------------------------------

// 2.9
const divsInsertHere = document.querySelectorAll('div.fn-insert-here');
// Buscamos y seleccionamos todos los <div> con la clase .fn-insert-here

divsInsertHere.forEach((div) => { // Bucle forEach para recorrer todos los <div>
    const pInternoDiv = document.createElement('p'); // Creamos <p> interno del <div>
    pInternoDiv.textContent = 'Voy dentro!'; // Ponemos el texto
    div.appendChild(pInternoDiv); // En cada vuelta, metemos el <p> dentro de cada <div>
});
// IMPORTANTE: Aquí aprendí que un elemento del DOM "es único", es decir, NO se puede meter el
// mismo objeto exacto en dos sitios a la vez (si se hace, se movería de un lado a otro). Por eso,
// es recomendable crear un <p> "nuevo" en cada vuelta del bucle para cada <div>
// ----------------------------------------------------------------------------------------------

// EXTRA:

// textContent: Extrae todo el texto de un nodo y sus hijos, incluyendo espacios y saltos de línea,
// pero ignora las etiquetas HTML y los elementos ocultos por CSS

// innerText: Devuelve solo el texto "visible" por el usuario. Tiene en cuenta el diseño, procesa
// estilos CSS y omite elementos ocultos (como los que tienen display: none)

// .innerHTML: Permite obtener o establecer el contenido con código HTML. Interpreta y renderiza
// las etiquetas HTML, pero es vulnerable a ataques de inyección de código (XSS) si el contenido
// proviene del usuario ¡ojo!

// Por lo tanto, siempre que se pueda, se recomienda usar .textContent
