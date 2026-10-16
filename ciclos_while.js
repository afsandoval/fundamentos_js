// CICLOS WHILE


//BUCLE INFINITO:

/* while (true){
     console.log("Llenando Memoria RAM")
 }*/

//IMPRIMIR 10 NUMEROS CONSECUTIVOS

let i = 1;

while (i <= 10){
    console.log(i);
    i++;
}

//VALIDACION DE CONTRASEÑA:

let contrasena_servidor = "admin";
let contrasena_usuario = "admin";

while (contrasena_usuario !== contrasena_servidor){ //False
    console.log("Clave incorrecta. Intenta de nuevo:");
}
    console.log("¡Bienvenido al sistema!");

// APP DE ENTRADA A UN BAR

let edad = 16;

while (edad < 18){
    console.log("No puedes entrar al bar. Eres menor de edad.");
    edad++;
}
console.log("¡Bienvenido al bar!");


// APP DE RIEGO DE PLANTAS

let cantidad_agua = 0;

while (cantidad_agua < 10){
    console.log("Riegos las plantas con " + cantidad_agua + " litros de agua.");
    cantidad_agua++;
}
console.log("¡Todas las plantas han sido regadas!");


// CICLO DO - WHILE: Se ejecuta al menos una vez, aunque la condición sea falsa
 
let numero = 11;

do {
    console.log(numero);
    numero++;
} while (numero <= 10);


// SENTENCIA BREAK: Permite salir de un bucle antes de que termine

for (let i = 1; i <= 10; i++){
    if (i === 2){
        console.log("Se ha alcanzado el número 2. Saliendo del bucle.");
        break;
    }
    console.log(i);
}

// APP BAR CON BREAK

for (let edad_cliente = 18; i <= 20; i++){
    if (edad_cliente < 18){
        console.log("No puedes entrar al bar. Eres menor de edad.");
        break;
    }else{
        console.log("¡Bienvenido al bar!");
    }
}


//SENTENCIA CONTINUE: SALTA 

for (let i=1; i<=10; i++){
    if (i === 8){
        console.log("Se salto el numero");
        continue;
    }
    console.log(i)
}

