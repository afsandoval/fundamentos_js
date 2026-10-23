// ACTIVIDAD PRÁCTICA 7: Listado de la ficha

//  PASO 1
let aprendices = [
  { nombre: "Felipe Sandoval", nota: 4.5 },
  { nombre: "Luis Diaz", nota: 2.8 },
  { nombre: "Jamez Rodriguez", nota: 3.7 },
  { nombre: "Falcao Garcia", nota: 2.0 },
  { nombre: "Rene Higuita", nota: 5.0 }
];


// PASO 2: forEach
function mostrarAprendiz(aprendiz) {
  console.log(`Aprendiz: ${aprendiz.nombre} - Nota: ${aprendiz.nota}`);
}

console.log("===== LISTADO DE LA FICHA =====");
aprendices.forEach(mostrarAprendiz);

// PASO 3: filter -> aprendices que aprobaron (nota >= 3.0)
function AprendicesAprobados(aprendiz) {
  return aprendiz.nota >= 3.0;
}
let aprobados = aprendices.filter(AprendicesAprobados);

console.log("\n===== APRENDICES QUE APROBARON =====");
aprobados.forEach(mostrarAprendiz);
console.log(`Total de aprobados: ${aprobados.length} de ${aprendices.length}`);


// PASO 4: map 
function nombresMayuscula(aprendiz) {
  return aprendiz.nombre.toUpperCase();
}
let nombresMayusculaMAP = aprendices.map(nombresMayuscula);

console.log("\n===== NOMBRES EN MAYÚSCULA =====");
console.log(nombresMayusculaMAP);


// ===== PASO 5: for...of -> promedio general de la ficha 
function calcularPromedio(lista) {
  let suma = 0; // acumulador

  for (const aprendiz of lista) {
    suma = suma + aprendiz.nota;
  }
  return suma / lista.length;
}

let resultado = calcularPromedio(aprendices);

console.log("\n===== PROMEDIO GENERAL =====");
console.log(`Promedio general de la ficha: ${resultado.toFixed(1)}`);


// ===== PASO 6: push -> agregar un sexto aprendiz y recalcular 
aprendices.push({ nombre: "Carlos Ruiz", nota: 3.0 });

console.log(`Se agregó un aprendiz. Ahora hay ${aprendices.length} en la ficha.`);
console.log(`Promedio después de agregar: ${calcularPromedio(aprendices).toFixed(1)}`);


// ===== RETO ADICIONAL: aprendiz con la nota más alta
let mejor = aprendices[0];

for (const aprendiz of aprendices) {
  if (aprendiz.nota > mejor.nota) {
    mejor = aprendiz; // encontramos uno con mejor nota: lo reemplazamos
  }
}

console.log("\n===== RETO: NOTA MÁS ALTA =====");
console.log(`El mejor aprendiz es ${mejor.nombre} con una nota: ${mejor.nota.toFixed(1)}`);
