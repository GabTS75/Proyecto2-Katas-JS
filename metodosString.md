# Algunos métodos string

// Longitud de la cadena
str.length;

// Encontrar la posición de la primera coincidencia de una cadena
str.indexOf("texto");

// Encontrar la posición de la última coincidencia de una cadena
str.lastIndexOf("texto");

// Extraer una parte de una cadena
str.slice(inicio, fin);

// Reemplazar una parte de una cadena con otra cadena
str.replace("cadenaAntigua","cadenaNueva");

// Convertir a mayúsculas
str.toUpperCase();

// Convertir a minúsculas
str.toLowerCase();

// Concatenar dos o más cadenas
str.concat("cadena1","cadena2");

// Eliminar espacios en blanco al principio y al final
str.trim();

// Dividir una cadena en un array de subcadenas
str.split("separador");

// Convertir una cadena en un array de caracteres
str.split("");

// Extraer una parte de una cadena y devolver la parte extraída
str.substring(inicio, fin);

// Convertir una cadena en un array de caracteres Unicode
str.split("");

// Comprueba si una cadena comienza con ciertos caracteres
str.startsWith("texto");

// Comprueba si una cadena termina con ciertos caracteres
str.endsWith("texto");

// Comprueba si una cadena incluye ciertos caracteres
str.includes("texto");

// Devuelve la cadena entre las posiciones especificadas
str.substr(inicio, longitud);

// Devuelve el código Unicode del carácter en una posición específica
str.charCodeAt(posición);
