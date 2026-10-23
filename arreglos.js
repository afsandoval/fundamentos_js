//ARREGLOS EN JAVASCRIPT

//Declarar ARRAYS Antigua
let programas = new Array("ADSO","SST","Topografia","Mineria");
console.log(typeof programas);

//Declarar ARRAYS Actual
let programasSENA = ["ADSO", 22811, true];
console.log(programasSENA);
console.log(typeof programasSENA);

//ARREGLO DE LENGUAJES DE PROGRAMACION

let lenguajes = ["HTML", "CSS", "JavaScript", "Python"];

//IMPRIMIR ELEMENTOS DE UN ARREGLO
console.log(lenguajes[2]); //Javascript
console.log(lenguajes[0]); //HTML
console.log(lenguajes[5]); //undefined

//AGREGAR ELEMENTOS A UN ARREGLO
lenguajes.push("Java");
console.log(lenguajes);

//MODIFICAR ELEMENTOS DE UN ARREGLO
lenguajes[2] = "JS";
console.log(lenguajes);

//Elimina el último elemento del arreglo
lenguajes.pop(); 
console.log(lenguajes);

//Invierte el orden de los elementos del arreglo
lenguajes.reverse();
console.log(lenguajes);

//Cantidad de elementos del arreglo
console.log(lenguajes.length); 

//BUSCAR ELEMENTOS EN UN ARREGLO
console.log(lenguajes.includes("Python")); //true
console.log(lenguajes.includes("PHP")); //false


//RECORRER UN ARREGLO CON UN CICLO FOR
for (let i=0; i < lenguajes.length; i++){
    console.log(lenguajes[i]);
}

//RECORRER UN ARREGLO CON UN FOR...OF
for(let lenguaje of lenguajes){
    console.log(lenguaje);
}

//RECORRER UN ARREGLO CON FOR-EACH
lenguajes.forEach(function(lenguaje){
    console.log(lenguaje);
});

//CONCATENAR 2 ARRAYS

let lenguajesFrontend = ["HTML","CSS","JavaScript"];
let lenguajesBackend = ["Python","PHP", "Java", "C#"];

let lenaguajesProgramacion = lenguajesFrontend.concat(lenguajesBackend);
console.log(lenaguajesProgramacion);
