// EJERCICIO 21

/*
Usa un bucle y dos condiciones para imprimir por consola el nombre de los usuarios que sean menor de edad precedidos del texto "Usuarios menores de edad:" y otro que imprima a los usuarios mayores de edad, precedido del texto "Usuarios mayores de edad:".
*/
const users=[
{name:"Tony",years:43},
{name:"Peter",years:18},
{name:"Natasha",years:14},
{name:"Bruce",years:32},
{name:"Khamala",years:16},
];

let menoresDeEdad = [];
let mayoresDeEdad = [];

for (let i = 0; i < users.length; i++) {
// Recorremos el array con este bucle for
  if (users[i].years < 18) {
    // Si es menor de edad, lo agrego al array de menores de edad
    menoresDeEdad.push(users[i].name);
    } else {
    // Y si es mayor de edad, lo agrego al array de mayores de edad
    mayoresDeEdad.push(users[i].name);
    }
}

console.log(`Usuarios menores de edad: ${menoresDeEdad.join(", ")}`);
console.log(`Usuarios mayores de edad: ${mayoresDeEdad.join(", ")}`);

// EXTRA: Usando arrow functions y el método .filter(), luego en consola uso el método .map() para obtener solo los nombres de los usuarios y el método .join() para unirlos en una cadena de texto.

/*
let menoresDeEdad = users.filter(user => user.years < 18); // Filtramos los usuarios menores de edad
let mayoresDeEdad = users.filter(user => user.years >= 18); // Filtramos los usuarios mayores de edad

console.log(`Usuarios menores de edad: ${menoresDeEdad.map(user => user.name).join(", ")}`);
console.log(`Usuarios mayores de edad: ${mayoresDeEdad.map(user => user.name).join(", ")}`);
*/
