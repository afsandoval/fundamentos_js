// EVENTOS

//Seleccionar los Elementos del DOM
let entrada = document.getElementById("entrada");
let boton = document.getElementById("btnAgregar");
let lista = document.getElementById("lista");
let contador = document.getElementById("contador");
let total = 0;

boton.addEventListener("click", function(){
    const nombre = entrada.value.trim();

    if (nombre === ""){
        alert("Escribe un nombre");
        return;
    }

    const li = document.createElement("li");
    li.textContent = nombre;
    lista.appendChild(li);

    total++;

    contador.textContent = "Aprendices: " + total;
    entrada.value = "";
    entrada.focus();
});
