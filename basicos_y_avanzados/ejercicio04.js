// EJERCICIO 04

// Dado el siguiente array:
const aldeanos = ["Fibrilio", "Narciso", "Vacarena", "Tendo", "Nendo"];

/*
Instrucciones:
4.1 - Saca a "Tendo" por consola atacando su posición.
4.2 - Coloca en el último lugar de este array a "Cervasio".
4.3 - Cambia el primer elemento de este array por "Bambina".
4.4 - Dale la vuelta a este array.
4.5 - Cambia a "Narciso" por "Canela" haciendo uso de un método de array.
4.6 - Imprime por consola el último elemento de este array sin atacar a la posición explicitamente
Pista: puedes usar el método length con algo más para ello.
*/

//4.1
console.log(aldeanos); // Muestra el array inicial completo
console.log(aldeanos[3]); // Ataca la posición 3 para mostrar "Tendo"

//4.2
aldeanos.push("Cervasio"); // Agrega a "Cervasio" al final del array
console.log(aldeanos); // Muestra el array actualizado

//4.3
aldeanos[0] = "Bambina"; // Cambia el primer elemento (Fibrilio) por "Bambina"
console.log(aldeanos); // Muestra el array actualizado

//4.4
aldeanos.reverse(); // Da la vuelta al array
console.log(aldeanos); // Muestra el array actualizado

//4.5
aldeanos.splice(aldeanos.indexOf("Narciso"), 1, "Canela"); // indexOf busca a "Narciso" y luego lo cambia por "Canela" usando el método splice
console.log(aldeanos); // Muestra el array actualizado

//4.6
console.log(aldeanos[aldeanos.length - 1]); // Mostrará el último elemento sin atacar la posición explícitamente, es decir, usando length para calcular la posición del último elemento, osea length cuenta que son 6 elementos y le resta 1 para atacar la posición 5 (el último)
