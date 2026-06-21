let botonCalcular = document.querySelector("#calcular");

botonCalcular.addEventListener("click", function (e) {
  // Evita que el formulario se envíe y recargue la página
  e.preventDefault();

  // Captura de datos
  let a001 = Number(document.querySelector("#aula001").value);
  let a101 = Number(document.querySelector("#aula101").value);
  let a201 = Number(document.querySelector("#aula201").value);
  let a301 = Number(document.querySelector("#aula301").value);
  let a501 = Number(document.querySelector("#aula501").value);

  // Máximo

  let maxPupitres = a001;
  let aulaMax = "Aula 001";

  if (a101 > maxPupitres) {
    maxPupitres = a101;
    aulaMax = "Aula 101";
  }
  if (a201 > maxPupitres) {
    maxPupitres = a201;
    aulaMax = "Aula 201";
  }
  if (a301 > maxPupitres) {
    maxPupitres = a301;
    aulaMax = "Aula 301";
  }
  if (a501 > maxPupitres) {
    maxPupitres = a501;
    aulaMax = "Aula 501";
  }

  // Minimo

  let minPupitres = a001;
  let aulaMin = "Aula 001";

  if (a101 < minPupitres) {
    minPupitres = a101;
    aulaMin = "Aula 101";
  }

  if (a201 < minPupitres) {
    minPupitres = a201;
    aulaMin = "Aula 201";
  }

  if (a301 < minPupitres) {
    minPupitres = a301;
    aulaMin = "Aula 301";
  }

  if (a501 < minPupitres) {
    minPupitres = a501;
    aulaMin = "Aula 501";
  }

  // Calcular cuantos pupitres comprar

     // Si a001 es 60 -> Math.max(0, 20) devuelve 20
     // Si a001 es 85 -> Math.max(0, -5) devuelve 0
  let faltan001 = Math.max(0, 80 - a001);
  let faltan101 = Math.max(0, 80 - a101);
  let faltan201 = Math.max(0, 80 - a201);
  let faltan301 = Math.max(0, 80 - a301);
  let faltan501 = Math.max(0, 80 - a501);

  let totalComprar = faltan001 + faltan101 + faltan201 + faltan301 + faltan501;

    // Mostrar los resultados con textContent

    document.querySelector('#resultadoMayor').textContent = "El aula con más pupitres es " + aulaMax + " con " + maxPupitres + " pupitres.";
    document.querySelector('#resultadoMenor').textContent = "El aula con menos pupitres es " + aulaMin + " con " + minPupitres + " pupitres.";
    document.querySelector('#resultadoCompras').textContent = "Si se quisieran completar todas las aulas con 80 pupitres, el total de mesas a comprar es " + totalComprar;

});