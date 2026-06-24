// EJERCICIO 11

/* Calcular promedio mezclado: Crea una función que reciba por parámetro un array y cuando es un valor number lo sume y de lo contrario cuente la longitud del string y lo sume.

Es un poco locura, pero podremos ejercitar nuestra lógica con este ejercicio.

Puedes usar este array para probar tu función (mezcla de números y strings):
*/

const mixedElements = [
    6,
    1,
    "Marvel",
    1,
    "hamburguesa",
    "10",
    "Prometeo",
    8,
    "Hola mundo",
];

// Función para calcular el promedio mezclado
function averageWord(list) {
    let total = 0;
    for (const item of list) { // Recorremos el array con un bucle for...of
        if (typeof item === "number") { // Si el elemento es un número, lo sumamos al total
            total += item; // Sumamos el número al total (total = total + item)
        } else { // Aquí entendemos que, si no es "number", entonces será un "string" y por lo tanto
                 // sumamos su longitud al total, también podemos usar else if (typeof item === "string")
                 // pero no es necesario para este array, ya que contiene números y strings.
            total += item.length;
        }
    }
    return total / list.length;
    // Devolvemos el promedio dividiendo el total entre la longitud del array (9 en este caso)
}

// Probamos la función del array mezclado
const result = averageWord(mixedElements);
console.log(`El promedio mezclado es: ${result}`); // Imprime el resultado del promedio mezclado
