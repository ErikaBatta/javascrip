let caja = document.getElementById("miCaja")
const boton2 = document.getElementById("boton2")
const boton3 = document.getElementById("boton3")

function agregar(){
    caja.classList.add("highlight"); caja.style.backgroundColor = "lightblue";
}
function quitar(){
    caja.classList.remove("highlight");
}

boton2.addEventListener("click",quitar)
boton3.addEventListener("click", function(){
    caja.classList.toggle("highlight");
})
