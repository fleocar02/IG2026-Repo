/* -------------- NOMBRE DE BIENVENIDA
 */
let respuesta = confirm("Desea personalizar la bienvenida?");

if (respuesta) {
  let nombre = prompt("Completa tu nombre");
  if (nombre != null && nombre != "") {
    //cuando el dato ingresado sea null o espacio vacio, ejecutar;
    let tituloPrincipal = document.querySelector(".titulo");
    tituloPrincipal.innerText += ", " + nombre;
  }
}

/* -------------- DARKMODE
 */

let respuesta2 = confirm("Desea activar el Dark Mode? (modo oscuro)");

if (respuesta2) {
  let darkMode = document.querySelector(".principal");
  darkMode.style.color = "rgb(240, 231, 231)";
  darkMode.style.background = "rgb(0, 0, 0)";
}

/* -------------- HORA
 */

let respuesta3 = prompt("Qué hora es? (de 00 a 24)");

let footer = document.querySelector(".despedida");
if (respuesta3 <= 12) {
  footer.innerText = "Buenos días!";
} else if (respuesta3 <= 19) {
  footer.innerText = "Buenas tardes!";
} else {
  footer.innerText = "Buenas noches!";
}
