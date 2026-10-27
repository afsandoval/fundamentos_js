//Seleccionar los Elementos del DOM

let entrada = document.getElementById("entrada");
let btnAgregar = document.getElementById("btnAgregar");
let contador = document.getElementById("contador");
let lista = document.getElementById("lista");

let total = 0;

btnAgregar.addEventListener("click", function(){
    let nombre = entrada.value.trim(); //Input

    if(nombre == ""){ //Validamos el nombre que no este Vacio
        alert("Escriba un Nombre");
        return;
    }

    let li = document.createElement("li"); //Creamos la etiqueta <li>
    li.innerText = nombre; //Asignamos el nombre del Input al <li>
    lista.appendChild(li); //Agregamos un elemento <li> al <ul>
    total++;

    contador.innerText = "Aprendices: " + total;
    entrada.value = ""; //Limpiar el Input nuevamente
    entrada.focus(); //Ubica el puntero en el Input
});


//Filtrado Dinamico con JavaScript

let filterInput = document.getElementById("filterInput"); //Entrada
let listaFiltrada = document.getElementById("lista"); //Salida

filterInput.addEventListener("keyup", function(){
    let term = filterInput.value.toLowerCase(); //Convertir el Texto en Minusculas
    let items = listaFiltrada.getElementsByTagName("li"); //Capturando todos los <li>

    Array.from(items).forEach(function(item){
        if(item.textContent.toLowerCase().indexOf(term) !== -1){
            item.style.display = "block"; //Muestra el Item de la Lista
        }else {
            item.style.display = "none"; //Oculta el Item de la Lista
        }
    })
});