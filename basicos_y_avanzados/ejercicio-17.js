// EJERCICIO 17

/*
For...in: Usa un (for...in) para imprimir por consola los datos del alienígena.

Debería tener este formato cada uno de los console.log: "La propiedad ____ tiene cómo valor: ____"

Puedes usar este objeto:
*/

const alien = {
name: 'Xenomorph',
species: 'Xenomorph XX121',
origin: 'Unknown',
weight: 180
};

for (const key in alien) {
    // Uso el for...in para recorrer el objeto y obtener sus propiedades (keys) y los valores.
    console.log(`La propiedad ${key} tiene cómo valor: ${alien[key]}`);
}
