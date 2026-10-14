//ESTRUCTURAS CONDICIONALES

//SINTAXIS - IF

if (true){
    //Bloque Codigo
}

//Ejemplo IF

let evidencia = 4.0;

if (evidencia >= 3.5){
    console.log("El resultado es APROBADO");
}else{
    console.log("El resutado NO fue APROBADO");
}

// IF - ELSE IF

//Clasificacion de Edades

let edad = 0;

if (edad <= 13){ 
    console.log("Eres un Niño");
}else if (edad <=18){ 
    console.log("Eres un Adolescente");
}else if (edad <= 60){
    console.log("Eres un Adulto");
}else{
    console.log("Eres un Adulto Mayor");
}

//Ejemplo de IF Anidado - Pension

let edadActual = 62;
let semanas_cotizadas = 1500;
let genero = "Masculino";

if (genero=="Femenino"){
    if (edadActual >=57){ 
        if(semanas_cotizadas>=1250){ 
            console.log("Felicitaciones te Pensionaste")
        }else{
            console.log("Lo siento no tienes las semanas suficientes para pensionarte")
        }    
    } else {
        console.log("Lo siento pero no tienes la edad suficiente para pensionarte")
    }
}else if (genero=="Masculino"){
       if (edadActual >=62){ 
        if(semanas_cotizadas>=1300){ 
            console.log("Felicitaciones te Pensionaste")
        }else{
            console.log("Lo siento no tienes las semanas suficientes para pensionarte")
        }    
    } else {
        console.log("Lo siento pero no tienes la edad suficiente para pensionarte")
    }
}else {
    console.log("Lo siento no puedo calcular la Pension para ese parametro")
}

// Condicional con Operadores Logicos AND

// Inicio de Sesion - LOGIN

let correo = "sena@gmail.com";
let contraseña = "12345";

if (correo == "sena@gmail.com" && contraseña == "12345"){
    console.log("Bienvenido al Sistema");
}else{
    console.log("Correo o Contraseña Incorrectos");
}


//Condicional con Operadores Logicos OR

//Proceso de Certificacion SENA

let etapa_lectiva = false;
let etapa_practica = false;

if (etapa_lectiva || etapa_practica){
    console.log("Felicitaciones te Certificaste !! ")
}else {
    console.log("Lo siento, no cumples con los requisitos de Certificacion")
}

// OPERADOR TERNARIO
let nota = 2.6;
let resultado = (nota >= 3.5)? "APROBO":"NO APROBO";
console.log(resultado);


//SWITCH - Dias de la semana

let dia = 7;

switch (dia){
    case 1:
        console.log("Lunes");
        break;
    case 2:
        console.log("Martes");
        break;
    case 3:
        console.log("Miercoles");
        break;
    case 4:
        console.log("Jueves");
        break;
    case 5:
        console.log("Viernes");
        break;
    case 6:
        console.log("Sábado");
        break;
    case 7:
        console.log("Domingo");
        break;
    default:
        console.log("Día no válido");
}

//RETO: CALCULADORA CON UN MENU MANEJADO CON UN SWITCH

let numero_1 = Number(prompt("Digita el Numero 1: "));
let numero_2 = Number(prompt("Digita el Numero 2: "));
let opcion = Number(prompt("Digita el Numero de la Opcion que corresponda: 1. Sumar  2. Restar  3. Multiplicar  4. Dividir:"));

switch (opcion){
    case 1: //Suma
        console.log(`La Suma entre ${numero_1} y ${numero_2} es igual a: ${(numero_1 + numero_2)}`);
        break;

    case 2: //Resta
        console.log(`La Resta entre ${numero_1} y ${numero_2} es igual a: ${(numero_1 - numero_2)}`);
        break;

    case 3: //Multiplicacion
        console.log(`La Multiplicacion entre ${numero_1} y ${numero_2} es igual a: ${(numero_1 * numero_2)}`);
        break;

    case 4: //Division
        if (numero_2 != 0){
            console.log(`La Division entre ${numero_1} y ${numero_2} es igual a: ${(numero_1 / numero_2)}`);
        }else{
            console.log("No se puede dividir entre 0");
        }
    break;
    default: 
    console.log("Opcion no valida");
}
