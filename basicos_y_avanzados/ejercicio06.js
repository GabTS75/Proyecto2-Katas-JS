// EJERCICIO 06

/*
Instrucciones:

6.1 Crea un bucle for que vaya desde 0 a 9 y muestra el valor de i por consola.
6.2 Crea un bucle for que vaya desde 0 a 9 y muestra el valor de i por consola solo
cuando el resto del numero dividido entre 2 sea 0.
6.3 Crea un bucle para conseguir dormir contando ovejas.
Este bucle tiene que dar 10 vueltas, es decir, 10 console.log.
Muestra por consola un mensaje diciendo 'Intentando dormir 🐑' en cada vuelta del bucle
y cambia el mensaje en la décima vuelta a '¡Dormido!'.
*/

//6.1

for (let i = 0; i < 10; i++) {
    console.log(`vuelta: ${i}`); // Muestra el valor de i desde 0 hasta 9
}

//6.2
for (let i = 0; i < 10; i++) {
    if (i % 2 === 0) {
        console.log(`vuelta par: ${i}`); // Muestra el valor de i solo si es par (cuando el resto de la división entre 2 es 0)
    }
}

//6.3

let i = 1;

while (i <= 10) {
    if (i < 10) {
        console.log(`Intentando dormir.. ${i} vuelta 🐑`); // Muestra el mensaje para las primeras 9 vueltas
    } else {
        console.log(`${i}ma. vuelta, por fin ¡Dormido! 😴😴😴`); // Muestra el mensaje en la décima vuelta
    }
    i++;
}
