// EJERCICIO 22

/*
Usa un for para remplazar todas las comidas que no sean veganas con las frutas del array de frutas.

Recuerda no usar frutas duplicadas.

Finalmente, imprime el array resultante.
*/

const fruits = ["Strawberry", "Banana", "Orange", "Apple"];

const foodSchedule = [
  { name: "Heura", isVegan: true },
  { name: "Salmon", isVegan: false },
  { name: "Tofu", isVegan: true },
  { name: "Burger", isVegan: false },
  { name: "Rice", isVegan: true },
  { name: "Pasta", isVegan: true },
];

let fruitIndex = 0; // Ésta variable sirve para saber "qué fruta toca usar", inicializamos en la posición 0

for (let i = 0; i < foodSchedule.length; i++) { // Aquí usamos un bucle for para recorrer el array foodSchedule
  if (!foodSchedule[i].isVegan) { // Si la comida (!) NO es vegana, entramos en el if
    foodSchedule[i].name = fruits[fruitIndex]; // Aquí se reemplazamos la comida no vegana con la fruta que toca
    foodSchedule[i].isVegan = true; // Ahora marcamos la comida como vegana
    fruitIndex++; // Avanzamos a la siguiente fruta para no repetirla
  }
}
console.log(foodSchedule);
