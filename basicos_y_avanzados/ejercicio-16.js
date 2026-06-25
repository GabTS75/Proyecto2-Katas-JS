// EJERCICIO 16

/*
For...of: Usa un bucle (for...of) para recorrer todos los destinos del array.

Imprime en un *console.log* cada uno de sus valores.
*/

const placesToTravel = [
  "Japon",
  "Venecia",
  "Murcia",
  "Santander",
  "Filipinas",
  "Madagascar",
];

for (const place of placesToTravel) {
// Aquí declaramos la variable (place) la cual tomará el valor de cada elemento del array en cada vuelta del bucle

    console.log(place);
}
