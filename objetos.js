//OBJETOS EN JAVASCRIPT - JSON

//Declarar un objeto - SINTAXIS

let aprendiz = { 
    nombre: "Felipe",
    apellido: "Sandoval",
    correo: "afsandoval@sena.edu.co",
    programa : {                   //Objeto dentro de otro objeto
        nombrePrograma: "ADSO",
        duracionPrograma: 21,
        codigoPrograma: 32331,
        ficha: "3233140"
    },
    saludar: function(){           //Metodo del objeto
        console.log("Hola Mundo!!");
    }
}

//Acceder a las Propiedades del Objeto
console.log(aprendiz);
console.log(aprendiz.nombre);
console.log(aprendiz.programa.ficha);

//Acceder a los Metodos del Objeto
aprendiz.saludar();

//Modificar las propiedades del Objeto
aprendiz.correo = "andres.sandoval@gmail.com";
console.log(aprendiz.correo);

//Agregar una Nueva propiedad al Objeto
aprendiz.telefono = "321461823";
aprendiz.activo = true;
console.log(aprendiz);

//Eliminar una propiedad del Objeto
delete aprendiz.telefono;
console.log(aprendiz);

//Imprimir un solo valor
console.log("Este es el nombre: " + aprendiz["nombre"]);

//Iteracion o recorrer cada Propiedad del Elemento - FOR IN
for (let propiedad in aprendiz){
    console.log(propiedad); //Imprimir las claves
    console.log(aprendiz[propiedad])
}







/*
//CONSTRUCTORES DE FUNCIONES COMO OBJETOS

//MODELO DE OBJETO CONSTRUCTOR
function aprendizSENA(nombre, apellido, correo, programa){
    this.nombre = nombre;
    this.apellido = apellido;
    this.correo = correo;
    this.programa = programa;
    this.saludar = function(){
        return console.log("Hola " + this.nombre)
    }
}

//INSTANCIAR EL MODELO
let aprendiz1 = new aprendizSENA("Andres", "Higuera", "andressando@sena.edu.co", "ADSO");
console.log(aprendiz1);
console.log(typeof aprendiz1);

let aprendiz2 = new aprendizSENA("Pepito", "Perez", "pepitop@sena.edu.co", "SST");
console.log(aprendiz2);
console.log(typeof aprendiz2);
console.log(aprendiz2.nombre);
aprendiz2.saludar();

*/
