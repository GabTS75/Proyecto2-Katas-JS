// EJERCICIO 3

// 3.1
// Dado el siguiente array, devuelve un array con sus nombres
// utilizando .map().

const users1 = [
	{id: 1, name: 'Abel'},
	{id: 2, name: 'Julia'},
	{id: 3, name: 'Pedro'},
	{id: 4, name: 'Amanda'}
];
// Con .map() recorremos el array users1 y tomamos cada "user"
// retornando únicamente su "user.name"
const userNames = users1.map((user) => {
    return user.name;
});
console.log("--- Ejercicio 3.1 ---");
console.log(userNames); // Mostramos el nuevo array
// ---------------------------------------------------------------------------

// 3.2
// Dado el siguiente array, devuelve una lista que contenga los valores
// de la propiedad .name y cambia el nombre a 'Anacleto' en caso de que
// empiece por 'A'.

const users2 = [
	{id: 1, name: 'Abel'},
	{id: 2, name: 'Julia'},
	{id: 3, name: 'Pedro'},
	{id: 4, name: 'Amanda'}
];
// Mapeamos el array users2 y cogemos cada "user"
const customizedNames = users2.map((user) => {
    // Si el nombre empieza por "A" (mayúscula)
    if (user.name.startsWith('A')) {
        return 'Anacleto';
    }
    // Si no, devolvemos su nombre original
    return user.name;
});
console.log("--- Ejercicio 3.2 ---");
console.log(customizedNames);
// ---------------------------------------------------------------------------

// 3.3
// Dado el siguiente array, devuelve una lista que contenga los valores
// de la propiedad .name y añade al valor de .name el string ' (Visitado)'
// cuando el valor de la propiedad isVisited = true.

const cities = [
	{isVisited: true, name: 'Tokyo'},
	{isVisited: false, name: 'Madagascar'},
	{isVisited: true, name: 'Amsterdam'},
	{isVisited: false, name: 'Seul'}
];
// Usamos un operador ternario
const visitedStatusCities = cities.map((city) => {
    return city.isVisited ? `${city.name} (Visitado)` : city.name;
});
console.log("--- Ejercicio 3.3 ---");
console.log(visitedStatusCities);
// Veremos por consola:
// ['Tokyo (Visitado)', 'Madagascar', 'Amsterdam (Visitado)', 'Seul']
// ---------------------------------------------------------------------------

// EXTRA:

// Aprendí tres reglas del uso de .map():

// Mismo tamaño: Si el array original tiene 4 elementos, el array resultante
// tendrá exactamente 4 elementos. Ni uno más, ni uno menos.

// Transformación: No modifica el array original. Te devuelve uno completamente
// nuevo con las transformaciones aplicadas.

// Retorno obligatorio: Dentro de la función .map(), si usas el "retorno
// explícito" (con llaves) siempre, siempre, siempre se debe usar la palabra
// clave return para decirle qué elemento debe colocar para retornar, sin
// embargo, si usas el "retorno implícito" (sin llaves) es porque la función
// "hace una sola cosa y devuelve el resultado inmediato"
