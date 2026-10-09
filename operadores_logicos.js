//OPERADORES LOGICOS

// AND (&&) Devuelve true si ambos operandos son verdaderos

console.log(true && true); //true
console.log(true && false); //false
console.log(false && true); //false
console.log(false && false); //false

let edad = 65;
let semanasCotizadas = 1400;

console.log(edad >= 62 && semanasCotizadas >= 1300); //true

// OR (||) Devuelve true si al menos uno de los operandos es verdadero
console.log(true || true); //true
console.log(true || false); //true
console.log(false || true); //true
console.log(false || false); //false

let calificacion = 20;
let inasistencias = 5;

console.log(calificacion >= 70 || inasistencias <= 3); //False

// NOT
console.log(true); //False
console.log(false); //True