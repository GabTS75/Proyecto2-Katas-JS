// EJERCICIO 41

/*
Crea una función llamada rollDice() que reciba como parámetro el numero de caras que queramos que tenga el dado que deberá simular el codigo dentro de la función.

Que la función use el parametro para simular una tirada de dado y retornar el resultado.

Si no se te ocurre como hacer un numero aleatorio no te preocupes. Busca información sobre la función de JavaScript Math.random()
*/

function rollDice(sides) {
    return Math.floor(Math.random() * sides) + 1;
    // Math.random() genera un número aleatorio entre 0 (inclusive) y 1 (exclusivo).
    // Multiplicamos ese número por el número de caras del dado (sides) para obtener un rango de 0 a sides (exclusivo).
    // Math.floor() redondea hacia abajo al número entero más cercano.
    // Sumamos 1 para que el rango sea de 1 a sides (inclusive).
}

console.log("Ejemplo de tirada de un dado de 8 caras:", rollDice(8));
console.log("Ejemplo de tirada de un dado de 12 caras:", rollDice(12));
console.log("-----------------------------------------------");

// Simulando 10 tiradas de un dado de 8 caras
console.log("Simulación de 10 tiradas de un dado de 8 caras:");
for (let i = 0; i < 10; i++) {
    console.log(`Tirada ${i + 1}:`, rollDice(8));
}
