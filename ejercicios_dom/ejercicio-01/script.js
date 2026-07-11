/*
Se pide lo siguiente:

1.1 Usa querySelector para mostrar por consola el botón con la clase .showme
1.2 Usa querySelector para mostrar por consola el h1 con el id #pillado
1.3 Usa querySelector para mostrar por consola todos los p
1.4 Usa querySelector para mostrar por consola todos los elementos con la clase.pokemon
1.5 Usa querySelector para mostrar por consola todos los elementos con el atributo data-function="testMe".
1.6 Usa querySelector para mostrar por consola el 3 personaje con el atributo data-function="testMe".
*/

// DESARROLLO DEL EJERCICIO 1

const botonShowMe = document.querySelector('.showme');
// Buscamos la clase .showme usando querySlector y almecenamos en la variable botonShowMe
console.log("1.1 Botón encontrado:", botonShowMe);
// Mostramos por consola la etiqueta encontrada completa (el botón "Pillame!")

const h1Pillado = document.querySelector('#pillado');
// Buscamos el id #pillado y almacenamos en h1Pillado, similar al anterior
console.log("1.2 H1 encontrado:", h1Pillado);
// Mostramos en consola la etiqueta H1 (el H1 "Aqui estoy 8)")

const todosLosP = document.querySelectorAll('p');
// querySelector nos daría el primero que encuentra, por eso usaremos querySelectorAll, para obtener a todos "los párrafos"
console.log("1.3 Todos los <p>:", todosLosP);
// Mostraremos por consola a todas las etiquetas <p> directamente (también sirve para cualquier etiqueta directamente)

const todosLosPokemon = document.querySelectorAll('.pokemon');
// Similar al anterior, pero esta vez busca por clase .pokemon
console.log("1.4 Todos los Pokémon:", todosLosPokemon);
// Encuentra que son las etiquetas <h4> y las muestra en consola

const elementosTestMe = document.querySelectorAll('[data-function="testMe"]');
// Aquí usamos querySelectorAll para buscar todos los elementos con el atributo exacto data-funtion="testMe"
console.log("1.5 Elementos con data-function:", elementosTestMe);
// Los encuentra en las etriquetas <span> y lo muestra en consola

const tercerPersonaje = elementosTestMe[2];
// Al tener todos los elementos con el atributo data-funtion="testMe" almacenados en elementosTestMe del ejemplo anterior
// Podemos usarlo porque lo devuelve en una lista (NodeList) que empieza por 0, por lo tanto, buscamos la posición 2
console.log("1.6 El tercer personaje es:", tercerPersonaje);
// Mostramos en consola el tercer personaje que se encuentra en la posicion 2
