//CICLOS O BLUCLES - LOOPS

//FOR - INCREMENTO

for (let i=1; i <= 10; i++){
    console.log(i)
}

//FOR - DECREMENTO

for (let j=5; j>=1; j--){
    console.log(j)
}
console.log("Feliz Año!!!")

// Tabla de Multiplicar del 7

for (let m=1; m <=10; m++){
    console.log(`Multiplicacion de 7 x ${m} es igual a  ${7 * m}`)
}

// FOR ...OF - PARA RECORRER ARREGLOS

let nombres = ["Felipe", "Miguel","Adriana","Alejandra"];

// for (let i=0; i < nombres.length; i++){
//     console.log(nombres[i]);
// }

for (let nombre of nombres){
    console.log(nombre)
}

// ARRAY DE FRUTAS Y LO RECORRO CON UN FOR..OF

let frutas = ["Manzana","Peras","Uvas", "Fresas", "Mangos"];

for (let x of frutas){
    console.log(x)
}