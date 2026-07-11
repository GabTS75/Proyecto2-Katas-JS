/*
Se pide lo siguiente:

1.1 Añade un botón a tu html con el id btnToClick y en tu javascript añade el
evento click que ejecute un console log con la información del evento del click
1.2 Añade un evento 'focus' que ejecute un console.log con el valor del input.
1.3 Añade un evento 'input' que ejecute un console.log con el valor del input.
*/

// DESARROLLO DEL EJERCICIO 4

// 1.1
const miBoton = document.createElement('button'); // Creamos el botón
miBoton.id = 'btnToClick'; // Le asignamos el id btnToClick que se nos pide
miBoton.textContent = '¡Hazme Click!'; // Le ponemos un texto adecuado

document.body.prepend(miBoton);
// Ahora lo ponemos en el body pero en esta ocasión, arriba del todo

miBoton.addEventListener('click', (event) => {
// Le añadimos el "sensor" y dentro de la función escribimos (event), que es el
// objeto con la que JavaScript rellena automáticamente todo el "informe" del clic,
// por convención también se puede usar la letra 'e'.
    console.log("1.1 BOTÓN — Informe completo del evento click:", event);
    // Al presionar F12 o darle al botón derecho y luego a 'inspeccionar', se puede
    // ver la consola en el navegador y desplegar este objeto, ahí verás todas las
    // propiedades, como por ejemplo:
    // event.type (el tipo de evento)
    // event.target (quién recibió el click)
    // event.clientX (posición X del ratón), etc.
});
// -----------------------------------------------------------------------------

// 1.2
const inputFocus = document.querySelector('input.focus');
// Aquí buscamos y seleccionamos el input que tenga la clase .focus
// ¡Ojo! El input, siempre se activará cuando se entra en el evento, es decir,
// cuando haces clic o llegas a través del tabulador.

inputFocus.addEventListener('focus', (e) => {
    console.log("1.2 FOCUS — El usuario ha entrado al input. Valor actual:", e.target.value);
    // Usamos la propiedad .value para saber qué hay escrito dentro de un input y
    // usamos e.target, que significa: "quién activó este evento", es decir, para
    // saber quién activó este input.
});
// -----------------------------------------------------------------------------

// 1.3
const inputTexto = document.querySelector('input.value');
// Aquí vamos a buscar y seleccionar el input con la clase .value

inputTexto.addEventListener('input', (e) => {
    console.log("1.3 INPUT — El usuario está escribiendo...", e.target.value);
    // Y luego iremos mostrando el valor exacto en el momento en que se escribe
});

// NOTA: 'focus' vs 'input' (Lo que aprendí)
// 'focus' solo avisa cuando entras al campo (una sola vez).
// 'input' te avisa de forma constante cada vez que el texto cambia, es decir, si
// escribes "Hola", se ejecutará 4 veces, una por cada letra.
// -----------------------------------------------------------------------------

// EXTRA: input CLICK
const inputClick = document.querySelector('input.click');
// busco y selecciono el input con la clase .click
miBoton.addEventListener('click', (event) => {
    console.log("EXTRA — Texto dentro del input .click:", inputClick.value);
    // Vamos a usar ese input.click, mostrando en consola el contenido (si se
    // ha escrito algo) "cada vez" que se haga clic en el botón que hemos creado
    // antes, si no tiene nada, mostrará = Texto dentro del input .click: 'vacio'
});
