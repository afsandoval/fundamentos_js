// ACTIVIDAD PRÁCTICA 5: Repeticiones con sentido

// ===== PARTE 1: tabla de multiplicar con for (Paso 1) =====
const numero = Number(prompt("¿De qué número quieres la tabla de multiplicar?"));

console.log(`Tabla del ${numero}:`);
for (let i = 1; i <= 10; i++) {
  console.log(`${numero} x ${i} = ${numero * i}`);
}

// ===== PARTE 2: notas con while (Pasos 2 y 3) =====
let suma = 0;       // acumula la suma de las notas
let cantidad = 0;   // cuenta cuántas notas se ingresaron

let nota = Number(prompt("Ingresa una nota (escribe 0 para terminar):"));

while (nota !== 0) {
  suma = suma + nota;
  cantidad = cantidad + 1;
  nota = Number(prompt("Ingresa otra nota (escribe 0 para terminar):"));
}

// Paso 3: mostrar el promedio al terminar el while
if (cantidad > 0) {
  const promedio = (suma / cantidad).toFixed(1);
  console.log(`Notas ingresadas: ${cantidad}`);
  console.log(`Suma de las notas: ${suma}`);
  console.log(`Promedio: ${promedio}`);
} else {
  console.log("No se ingresó ninguna nota.");
}

// ===== PARTE 3: fichas con for...of y continue (Pasos 4 y 5) =====
const fichas = ["3070001", "3070002", "3070003", "3070004", "3070005"];

// Paso 4: recorrer el arreglo y mostrar cada ficha numerada
let contador = 1;
for (const ficha of fichas) {
  console.log(`${contador}. Ficha ${ficha}`);
  contador++;
}

// Paso 5: omitir una ficha específica con continue
console.log("--- Omitiendo la ficha 3070003 ---");
contador = 1;
for (const ficha of fichas) {
  if (ficha === "3070003") {
    continue; // salta esta vuelta y pasa a la siguiente ficha
  }
  console.log(`${contador}. Ficha ${ficha}`);
  contador++;
}

// ===== RETO ADICIONAL: pares del 1 al 50 =====
console.log("Números pares del 1 al 50:");
for (let n = 2; n <= 50; n += 2) {
  console.log(n);
}