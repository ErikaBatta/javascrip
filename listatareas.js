const input_tarea  = document.getElementById("tarea")
const boton_guardar = document.getElementById("guardar")
const boton_borrar = document.getElementById("borrar")
const lista_tareas = document.getElementById("tareas")
const input_fecha = document.getElementById("fecha")
let lista_de_tareas = []

 //objetos con llaves
 //metodos o funciones con parentesis
 //listas con corchetes

 function cargar_tareas(){
    lista_de_tareas = JSON.parse(localStorage.getItem('tareas'));
    for(Elemento of lista_de_tareas){
        let tarea = Elemento.tarea
        let fecha = Elemento.fecha
        let nuevo_div = document.createElement("div")
        nuevo_div.textContent = tarea + "|" + fecha
        lista_tareas.appendChild(nuevo_div)
    }
 }

function guardar_tarea(){
    let tarea = input_tarea.value
    let fecha = input_fecha.value
    let objeto_tarea = {"tarea":tarea,"fecha":fecha}
    lista_de_tareas.push(objeto_tarea)
    localStorage.setItem("tareas", JSON.stringify(lista_de_tareas));
    let nuevo_div = document.createElement("div")
    nuevo_div.textContent = tarea + "|" + fecha
    lista_tareas.appendChild(nuevo_div)
}
boton_guardar.addEventListener("click", guardar_tarea)

// function borrar_tarea(indice){
//     let objeto_tarea = {"tarea":tarea,"fecha":fecha}
//     lista_de_tareas.pop(); 
//     }





