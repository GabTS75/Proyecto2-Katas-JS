// EJERCICIO 19

/*
Mixed For...of e includes: Usa un bucle (for...of) para recorrer todos los juguetes y elimina los que incluyan la palabra "gato" (también podéis crear uno nuevo con solo los que NO incluyan esa palabra).

Recuerda usar la función .includes() para comprobar la palabra.

Puedes usar este array:
*/

const toys = [
    {id: 5, name: 'Transformers'},
    {id: 11, name: 'LEGO'},
    {id: 23, name: 'Hot Wheels'},
    {id: 40, name: 'Rascador de gato'},
    {id: 40, name: 'FurReal Friends gato interactivo'},
    {id: 60, name: 'Nerf Blaster'},
    {id: 71, name: 'Sylvanian Families - Familia gato'}
];

for (let i = toys.length - 1; i >= 0; i--) {
// Similar al ejercicio-18, recorremos el array al revés para evitar problemas al eliminar elementos
    if (toys[i].name.includes('gato')) {
    // Usamos .includes() para comprobar si el nombre del juguete contiene la palabra "gato"
        toys.splice(i, 1);
        // Si lo encuentra, elimina ese juguete del array
    }
}

console.log("El array resultante es:", toys);

// EXTRA: Ejemplo de un nuevo array con solo los juguetes que NO incluyen la palabra "gato"

// const toysWithoutGato = toys.filter(toy => !toy.name.includes('gato'));
// Aquí usamos primero ! para negar la condición, así obtenemos los juguetes que NO incluyen
// la palabra "gato", luego usamos .filter() para crear un nuevo array (toyWithoutGato) con esos juguetes.

// console.log("Nuevo array sin juguetes que incluyan 'gato':", toysWithoutGato);
