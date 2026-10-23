// FUNCIONES

// Funcion simple

//Declarar
function saludar(){
    console.log("Hola Mundo !")
}

//Llamar la funcion
saludar();


//Funcion con Parametros
function saludoPersonalizado (nombre, apellido){
    console.log(`Hola ${nombre} ${apellido}`) //interpolacion
}

saludoPersonalizado("Felipe", "Sandoval");
saludoPersonalizado("Diana", "Castillo");
saludoPersonalizado("Miguel", "Bosee");
saludoPersonalizado("Dayana", "Bautista");

// Funcion con parametros por Defecto

function bienvenidaSENA(nombre, programa="ADSO"){
    console.log(`Hola Aprendiz ${nombre} del programa de ${programa} `)
}

bienvenidaSENA("Felipe");
bienvenidaSENA("Pepito","Mineria");

//Funcion con Parametros desordenados

function calcularEdad(nombre, anioNacimiento){
    let edad = 2026 - anioNacimiento; 
    console.log(`Hola ${nombre}, tu edad es ${edad} años`)
}

calcularEdad("Felipe", 1994);
calcularEdad("Dayana", 2002);

//Funcion con return

function calcularPromedio(num1, num2, num3){ //Entrada de datos
    let resultado = (num1 + num2 + num3) / 3; //Proceso de datos
    return resultado; //Salida de datos
}

let result = calcularPromedio(4,5,3);
console.log(`El Resultado del Promedio es: ${result}`);

function clasificar(promedio) { 
    if (promedio >= 4.5){
        return "Excelente";
    }
    if (promedio >= 3.5) {
        return "Bueno";
    }
    if (promedio >= 3.0) {
        return "Aceptable";
    }
    return "Debe reforzar"; 
}

let resultadoClasificaion = clasificar(4.5);
console.log(resultadoClasificaion);

// CALCULADORA

function sumar(num1, num2){
    return num1 + num2;
}

function restar(num1, num2){
    return num1 - num2;
}
function multiplicar(num1, num2){
    return num1 * num2;
}

function dividir(num1, num2){
    return num1 / num2;
}

console.log(sumar(2,7));
console.log(restar(10,5));
console.log(multiplicar(3,4));
console.log(dividir(10,2));


function calculadora(num1, num2, opcion){
    switch(opcion){
        case 1:
            return sumar(num1, num2);
        case 2:
            return restar(num1, num2);
        case 3:
            return multiplicar(num1, num2);
        case 4:
            return dividir(num1, num2);
        default:
            return "Opción no válida";
    }
}

console.log(calculadora(5,3,1)); //Sumar
console.log(calculadora(10,3,2)); //Restar
console.log(calculadora(9,5,3)); //Multiplicar
console.log(calculadora(20,2,4)); //Dividir


// // Función flecha 
// const esAprobado = (promedio) => promedio >= 3.0; 
// console.log(esAprobado(prom)); // true