/*18-
 - Fecha de publicación: [19/06/2024]
 - Número de la tarea: [18]
 - Hora: [10:35]PM
 - Versión de la tarea: [02]
/- Autores: [Todos los ingenieros del grupo (39)]
 - Nombre del lenguaje utilizado: [Javascript]
 - Versión del lenguaje utilizado: ["ECMASCRIPT 6.0"]
 - Presentado a: [Doctor Ricardo Moreno Laverde]

 ------- | Universidad Tecnológica de Pereira |-------------
 --- | Programa de Ingeniería de Sistemas y Computación |---

- Descripción:En un estacionamiento cobran $1.800 por hora o fracción. Diseñe un algoritmo que determine cuanto debe pagar un cliente por el
estacionamiento de su vehículo, conociendo el tiempo de estacionamiento en horas y minutos.*/

const prompt = require ('prompt-sync')();
// Preguntamos al usuario por las horas y minutos de estacionamiento.
let horas = parseInt(prompt("Ingrese las horas de estacionamiento:")); // Se establecen las horas que estuvo el usuario
let minutos = parseInt(prompt("Ingrese los minutos de estacionamiento:"));// se establecen los minutos que estuvo el usuario

// Definimos el costo por hora o fracción.
const costoPorHora = 1800;

// Calculamos el total de horas o fracción. Si hay minutos, se cuenta como una hora adicional.
let totalHoras = horas + (minutos > 0 ? 1 : 0);

// Calculamos el costo total.
let costoTotal = totalHoras * costoPorHora;

// Mostramos el costo total al usuario.
console.log("\nEl costo total por el estacionamiento es: $" + costoTotal);
