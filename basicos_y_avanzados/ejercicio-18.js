// EJERCICIO 18

/*
Usa un bucle for para recorrer todos los destinos del array y elimina los elementos que tengan el id 11 y el id 40.

Imprime en un console log el array resultante.

Puedes usar este array:
*/

const placesToTravel = [
{id: 5,name: "Japan"}, // posición 0
{id: 11,name: "Venecia"}, // posición 1
{id: 23,name: "Murcia"}, // posición 2
{id: 40,name: "Santander"}, // posición 3
{id: 44,name: "Filipinas"}, // posición 4
{id: 59,name: "Madagascar"}, // posición 5
];

for (let i = placesToTravel.length - 1; i >= 0; i--) {
// Aquí vamos a recorrer el array al revés: empezamos en la última posición (length - 1) hasta la 0
  
  if (placesToTravel[i].id === 11 || placesToTravel[i].id === 40) {
  // Con esta consulta comprobamos si el id actual es 11 o es 40

    placesToTravel.splice(i, 1);
    // .splice(posición, cuántos_elementos_borrar), es el método para eliminar un elemento del array.
    // En este caso, eliminamos el elemento en la posición i (actual) y borramos 1 elemento.
  }
}

// Imprimimos el resultado final
console.log("El array resultante es:", placesToTravel);

//NOTA: Con este ejercicio aprendí que si recorremos un array de manera normal y eliminamos elementos,
// el índice (posición) cambia y nos saltaremos elementos. Por eso es mejor recorrer el array al revés,
// así no nos saltamos ningún elemento y podemos eliminar los que queramos sin problemas.
