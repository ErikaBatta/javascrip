// no olvidar nombrar el id donde se encuentra la parte a trabajar como tambien nombrar la funcion a ejecutar, esta debe estar agregada en el documento html
const entrada = document.getElementById("entrada");
const entrada2 = document.getElementById("entrada2");
const resultados = document.getElementById("resultados");

//para este funcion me pone condicionales en la edad dependiendo de los datos que lo programe.

function ejecutar() {
//para este funcion me pone condicionales en la edad dependiendo de los datos que lo programe.

  //let edad = entrada.value;
  //console.log("la edad es:", edad)

  //if (edad <= 18 && >=60){ resultados.textContent = "eres mayor de edad"; }

  //if (edad >= 75) {
    //resultados.textContent = "eres adulto de la tercer edad";
 // } else if (edad >= 18) {
   // resultados.textContent = "eres mayor de edad";
 // } else {
    //resultados.textContent = "eres menor de edad";
  //}


  //estos valores para realizar una suma  
  let valor1 = parseFloat(entrada.value);
  let valor2 = parseFloat(entrada2.value);
  let suma = valor1 + valor2;
       resultados.textContent= suma;
 //let residuo = valor2 - valor1;
 //valor1 = valor1+valor2


}

//este item evalua los casos segun yo le indique, puede servir en plataformas de diferentes usuarios
//como por ejemplo aquellas que tiene para etudiantes, profesores o administrativos.
let dia = 5;

switch (dia) {
  case 1:
    console.log("Lunes");
    break;
  case 2:
    console.log("Martes");
    break;
  case 3:
    console.log("Miércoles");
    break;
  case 4:
    console.log("Jueves");
    break;
  case 5:
    console.log("Viernes");
    break;
  default:
    console.log("Día no válido");
}
