// EJERCICIO 8

// Accederemos a los datos de una API pública de Game Of Thrones, queremos un select
// con todos los nombres de los personajes para que cuando un usuario seleccione un
// nombre salga su imagen en el medio de la página, algo así:

// Os aportamos el HTML sobre el que haremos el ejercicio:

// Para obtener los datos con los que jugar, necesitaremos estudiar la documentación de
// la API y buscar la URL necesaria para los datos que queramos, para este paso os pedimos
// que de verdad os esforcéis buscándola en la documentación, queremos la URL que me
// traiga los datos de todos los personajes de GOT, sin embargo, en la slide siguiente
// tendréis la URL directa de esos datos.

// URL de la documentación (para que indaguéis): https://thronesapi.com/

// Esta sería la URL final (la que deberéis utilizar para vuestra petición):

// https://thronesapi.com/api/v2/Characters

const API_URL = "https://thronesapi.com/api/v2/Characters";
let charactersList = []; // Aquí guardaremos la info del URL

// CAPTURAMOS: Los elementos del DOM
const characterSelect = document.querySelector("#character-list");
const characterImage = document.querySelector(".character-image");

// FUNCIÓN ASÍNCRONA: Para pedir los datos a la API
const fetchCharacters = async () => {
    try {
        // Llamamos a la URL (petición a internet) y esperamos la respuesta
        const response = await fetch(API_URL);

        // Convertimos esa respuesta en un formato JSON, para nuestro array
        charactersList = await response.json();

        // Cuando ya tenemos los datos guardados, rellenamos el select
        renderSelectOptions(charactersList);
    } catch (error) {
        // Si el servidor se cae o la URL está mal, atrapamos el error aquí
        console.error("¡Houston tenemos un problema!, No podemos traer los datos:", error);
    }
};

// EL SELECT: Función para las opciones del menú desplegable
const renderSelectOptions = (characters) => {
    // Creamos una opción inicial por defecto
    const defaultOption = document.createElement("option");
    defaultOption.textContent = "Selecciona un personaje...";
    defaultOption.value = "";
    characterSelect.append(defaultOption);

    // Recorremos el array para crear un <option> por personaje
    characters.forEach((character) => {
        const option = document.createElement("option");
        option.value = character.id; // Guardamos el ID único como valor
        option.textContent = character.fullName; // Mostramos el nombre completo

        characterSelect.append(option);
    });
};

// ESCUCHAMOS: Los cambios del <select> para cambiar la imagen
characterSelect.addEventListener("change", (event) => {
  const selectedId = event.target.value;

  // Al seleccionar la primera opción "Selecciona un personaje...", limpia y sale
  if (!selectedId) { // Si no se ha elegido una opción válida
    characterImage.src = "";
    characterImage.alt = "";
    return; // El return detiene la función aquí y no se sigue ejecutando
  }

  // Si hay un ID real, buscamos con el extrictamente igual (===)
  // Como 'selectedId' es un texto, lo convertimos a número con Number()
  const foundCharacter = charactersList.find(char => char.id === Number(selectedId));
  
  // Si encontramos al personaje, ponemos su URL a la etiqueta <img>
  if (foundCharacter) { 
    characterImage.src = foundCharacter.imageUrl;
    characterImage.alt = `Fotografía de ${foundCharacter.fullName}`;
  }
});

// Inicializamos la aplicación
fetchCharacters();
