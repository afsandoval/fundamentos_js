// ACTIVIDAD PRÁCTICA 4: Clasificador de desempeño y menú

// Paso 4: menú con prompt y switch
const opcion = prompt("Menú:\n1. Ver horario\n2. Consultar notas\n3. Salir");

switch (opcion) {
  case "1":
    console.log("Mostrando el horario de clases...");
    break;
  case "2":
    // Paso 1: pedir una nota con prompt y convertirla a número
    const nota = Number(prompt("Ingresa la nota (0.0 a 5.0):"));
    //const nota = 3.2;

    // Paso 3 + Reto adicional: validar el rango con && en una sola condición
    if (nota >= 0 && nota <= 5) {
      // Paso 2: clasificar con if / else if / else
      if (nota >= 4.5) {
        console.log("Clasificación: Excelente");
      } else if (nota >= 3.5) {
        console.log("Clasificación: Bueno");
      } else if (nota >= 3.0) {
        console.log("Clasificación: Aceptable");
      } else {
        console.log("Clasificación: Debe reforzar");
      }
    } else {
      console.log("Nota no válida");
    }
    break;
  case "3":
    console.log("Saliendo del programa. ¡Hasta pronto!");
    break;
  default:
    console.log("Opción no válida");
}