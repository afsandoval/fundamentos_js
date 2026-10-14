//ACTIVIDAD PRÁCTICA 3: Promedio de notas

// 1. Pedir las tres notas y convertirlas a número
let nota1 = Number(prompt("Ingresa la nota 1:"));
let nota2 = Number(prompt("Ingresa la nota 2:"));
let nota3 = Number(prompt("Ingresa la nota 3:"));

// 2. Calcular el promedio y redondearlo a un decimal
let promedio = ((nota1 + nota2 + nota3) / 3).toFixed(1);

// 3. Saber si aprobó (true o false)
let aprobo = promedio >= 3.0;

// 4. Mostrar el resultado
console.log(`El aprendiz con las notas: ${nota1}, ${nota2} y ${nota3} obtuvo un promedio de ${promedio}. ¿Aprobó? ${aprobo}`);


// RETO ADICIONAL: ¿cuántos puntos le faltan para llegar a 3.0?

let faltan = 0; // Empezamos en 0, como si ya hubiera aprobado

if (aprobo === false) {
  // Solo si NO aprobó, calculamos la diferencia
  faltan = (3.0 - promedio).toFixed(1);
}

console.log(`Puntos que le faltan para aprobar: ${faltan}`);