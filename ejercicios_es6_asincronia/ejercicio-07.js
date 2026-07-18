// EJERCICIO 7

// 7.1
// Dado el siguiente javascript filtra los videojuegos por gender = 'RPG' usando
// .filter() y usa .reduce() para conseguir la media de sus .score.
// La función .find() también podría ayudarte para encontrar el genero 'RPG' en el
// array .gender.

const videogames = [
    { name: 'Final Fantasy VII', genders: ['RPG'], score: 9.5 },
    { name: 'Assasins Creed Valhalla', genders: ['Aventura', 'RPG'], score: 4.5 },
    { name: 'The Last of Us 2', genders: ['Acción', 'Aventura'], score: 9.8 },
    { name: 'Super Mario Bros', genders: ['Plataforma'], score: 8.5 },
    { name: 'Genshin Impact', genders: ['RPG', 'Aventura'], score: 7.5 },
    { name: 'Legend of Zelda: Breath of the wild', genders: ['RPG'], score: 10 },
]

// FILTRAMOS: Solo los videojuegos de género 'RPG'
const rpgGames = videogames.filter((game) => {
  // Usamos .find() como se nos pide, si encuentra 'RPG', devolverá 'RPG' (que actúa
  // como true). Si no, entonces devolverá undefined (que actúa como false).
  return game.genders.find(gender => gender === 'RPG');  
});

// SUMAMOS: Todas las notas de los juegos filtrados usando .reduce()
const totalRPGScore = rpgGames.reduce((accumulator, game) => accumulator + game.score, 0);

// DIVIDIMOS: La sumatoria entre el número de juegos RPG encontrados (la media)
const averageRPGScore = totalRPGScore / rpgGames.length;

// COMPROBAMOS:
console.log("--- Ejercicio 7.1 ---");
console.log("Juegos RPG detectados:", rpgGames); 
console.log("La puntuación media de los RPGs es:", averageRPGScore); 

// EXTRA:
// Se puede usar game.genders.includes('RPG') que da directamente 'true' o 'false'
