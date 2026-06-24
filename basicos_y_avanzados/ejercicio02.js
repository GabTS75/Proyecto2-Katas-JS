// EJERCICIO 02

/*
Instrucciones:

1. Luke Skywalker cumple años:
Modifica el siguiente código JS para actualizar la edad de Luke Skywalker a 25 años.
*/

const jedi = { nombre: "Luke Skywalker", edad: 19 };

jedi.edad = 25; // Actualiza la edad a 25
console.log(`La edad actual de ${jedi.nombre} es: ${jedi.edad} años.`);
// en pantalla vemos: La edad actual de Luke Skywalker es: 25

/*
2. Presentación al estilo Leia Organa:
- Crea tres variables con la siguiente información:
nombre: "Leia"
apellido: "Organa"
edad: 20
- Muestra un mensaje por consola que siga la siguiente estructura:
"Soy Leia Organa, tengo 20 años y soy una princesa de Alderaan."
- Utiliza la concatenación para ello.
*/

let nombre = "Leia";
let apellido = "Organa";
let edad = 20;
console.log(`Soy ${nombre} ${apellido}, tengo ${edad} años y soy una princesa de Alderaan.`);
// mostará por consola: Soy Leia Organa, tengo 20 años y soy una princesa de Alderaan.

/*
3. Calculando el coste total de sables de luz:
- Obtén el precio total de dos sables de luz: "Shoto de Yoda" y "sable de Darth Vader".
- Imprime el resultado por consola utilizando console.log.
*/

const sable1 = { nombre: "Shoto de Yoda", precio: 1500 };
const sable2 = { nombre: "Sable de Darth Vader", precio: 2000 };

const precioTotal = sable1.precio + sable2.precio;
console.log(`El precio total de los sables de luz es: ${precioTotal} créditos.`);
// resultado por consola: El precio total de los sables de luz es: 3500

/*
4. Actualizando el precio final de las naves:
- Modifica el valor de la variable global precioBaseGlobal a 25.000 créditos.
- Actualiza el precio final (precioFinal) de dos naves ("Ala-X" y "Halcón Milenario") sumando el valor de precioBaseGlobal a su precio base (precioBase).
*/

let precioBaseGlobal = 10000;

// Cambia el precio base en esta linea modificando la variable

const nave1 = { nombre: "Ala-X", precioBase: 50000, precioFinal: 60000 };
const nave2 = { nombre: "Halcón Milenario", precioBase: 70000, precioFinal: 80000 };

let nuevoPrecioBaseGlobal = 25000; // Actualiza el precio base global a 25.000 créditos

nave1.precioFinal = nave1.precioBase + nuevoPrecioBaseGlobal;
nave2.precioFinal = nave2.precioBase + nuevoPrecioBaseGlobal;
console.log(`El precio final de la nave ${nave1.nombre} es: ${nave1.precioFinal} créditos.`);
// veremos: El precio final de la nave Ala-X es: 75000 créditos.
console.log(`El precio final de la nave ${nave2.nombre} es: ${nave2.precioFinal} créditos.`);
// veremos: El precio final de la nave Halcón Milenario es: 95000 créditos.
