//Aplicacion de mi Proyecto de Grado

function calcularIMC(peso, estatura) {
  const imc = peso / (estatura * estatura);
    
  if (imc < 18.5) {
    return "Bajo peso";
  } else if (imc < 25) {
    return "Peso normal";
  } else if (imc < 30) {
    return "Sobrepeso";
  } else {
    return "Obesidad";
  }
  return Number(imc.toFixed(1)); // toFixed devuelve texto, Number() lo vuelve número
}
 
// ===== FUNCIÓN 2: clasifica el IMC y devuelve el texto =====
function clasificarIMC(imc) {

}
 
// ===== FUNCIÓN 3: valida que los datos sean razonables =====
// Devuelve true solo si TODAS las condiciones se cumplen (&&)
// Si el usuario escribe texto, Number() da NaN y las comparaciones dan false
function datosValidos(peso, estatura) {
  return peso > 0 && peso <= 300 && estatura >= 0.5 && estatura <= 2.5;
}
 
 
// ===== PROGRAMA PRINCIPAL =====
const nombre = prompt("¿Cuál es tu nombre?");
const peso = Number(prompt("Ingresa tu peso en kilogramos (ejemplo: 68.5):"));
const estatura = Number(prompt("Ingresa tu estatura en metros (ejemplo: 1.70):"));
 
if (datosValidos(peso, estatura)) {
  const imc = calcularIMC(peso, estatura);
  const clasificacion = clasificarIMC(imc);
 
  console.log(`Hola ${nombre}`);
  console.log(`Peso: ${peso} kg | Estatura: ${estatura} m`);
  console.log(`Tu IMC es: ${imc}`);
  console.log(`Clasificación: ${clasificacion}`);
 
  // ===== RETO ADICIONAL: rango de peso saludable para esa estatura =====
  // Se despeja el peso de la fórmula: peso = IMC x estatura x estatura
  const pesoMinimo = (18.5 * estatura * estatura).toFixed(1);
  const pesoMaximo = (24.9 * estatura * estatura).toFixed(1);
  console.log(`Para tu estatura, un peso saludable está entre ${pesoMinimo} y ${pesoMaximo} kg.`);
} else {
  console.log("Datos no válidos. El peso debe estar entre 1 y 300 kg y la estatura entre 0.5 y 2.5 m.");
}
 
console.log("Nota: el IMC es una referencia general, no un diagnóstico médico.");S