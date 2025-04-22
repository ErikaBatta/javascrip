// Selección por ID
const titulo = document.getElementById("miTitulo");

// Selección por clase
const elementos = document.getElementsByClassName("miClase");
console.log(titulo);
console.log(elementos);
// Seleccionar un elemento
let boton = document.getElementById("miBoton");
// Agregar un evento de clic
boton.addEventListener("click", function () {
  titulo.textContent = "Nuevo Título Modificado";
});

document.addEventListener("keydown", function (evento) {
  console.log("Tecla presionada: " + evento.key);
});
let formulario = document.getElementById("miFormulario");
formulario.addEventListener("submit", function (evento) {
  evento.preventDefault(); // Evita que el formulario se envíe
  alert("Formulario enviado");
});

document.addEventListener("keydown", function (evento) {
  console.long("tecla presioada:" + evento.key);
});
let boton2 = document.getElementById("miBoton2");
let boton3 = document.getElementById("miBoton3");
let caja = document.getElementById("miCaja");
boton2.addEventListener("click", function () {
  caja.style.backgroundColor = "pink";
});
boton3.addEventListener("click", function () {
  caja.style.backgroundColor = "yellow";
});

let boton4 = document.getElementById("nuevodiv");
let boton5 = document.getElementById("borrardiv");
boton4.addEventListener("click", function () {
  const nuevoDiv = document.createElement("div");
  nuevoDiv.textContent = "Soy un nuevo DIV";
  document.body.appendChild(nuevoDiv);
});
boton5.addEventListener("click", function () {
  const elementoParaEliminar = document.querySelector("div");
  elementoParaEliminar.remove();
});
