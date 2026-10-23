//DOCUMENT OBJECT MODEL (DOM)

//-------------SELECCIONAR LOS ELEMENTOS --------------

//Seleccionar un elemento por su ID
let tituloHeader = document.getElementById("tituloHeader");
console.log(tituloHeader);
console.log(typeof tituloHeader);

//Seleccionar un elemento por su Etiqueta HTML
let parrafos = document.getElementsByTagName("p");
console.log(parrafos);
console.log(typeof parrafos);

//Seleccionar un elemento por su Clase
let descripcionParrafo = document.getElementsByClassName("descripcion");
console.log(descripcionParrafo);
console.log(typeof descripcionParrafo);

//Seleccionar un elemento por su Selector CSS
//Selecciona el primer elemento que cumpla con el selector
let parrafoSelector = document.querySelector(".descripcion"); //CLASE
let tituloSENA = document.querySelector("#tituloSENA"); //ID

console.log(parrafoSelector);
console.log(tituloSENA);
console.log(typeof parrafoSelector);

//Seleccionar todos los elementos con el QuerySelectorALL
let allParrafos = document.querySelectorAll(".descripcion");
console.log(allParrafos);


//------------ MODIFICAR LOS ATRIBUTOS DE LOS ELEMENTOS DEL DOM ------------

//Cambiar el Texto de un Elemento
let subtituloSENA = document.getElementById("subtituloSENA")
subtituloSENA.textContent = "ADSO";

//Cambiar el Estilo de un Elemento
tituloHeader.style.color = "red";
tituloHeader.style.fontSize = "50px";
tituloHeader.style.fontFamily = "Helvetica";

parrafos[2].style.color = "purple";

//Agregar una clase de CSS a un HTML mediante JavaScript
let contactanos = document.getElementById("contactanos");
contactanos.classList.add("destacado");

//Cambiar el atributo SRC de una Imagen del HTML
let logoSENA = document.getElementById("myimg");
logoSENA.src = "logoSenaVerde.png"





