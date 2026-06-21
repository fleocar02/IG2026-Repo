let numeroRandom = Math.floor((Math.random() * 6) + 1);
console.log(numeroRandom);


let uno = document.querySelector(".numeroUno");
let dos = document.querySelector(".numeroDos");
let tres = document.querySelector(".numeroTres");
let cuatro = document.querySelector(".numeroCuatro");
let cinco = document.querySelector(".numeroCinco");
let seis = document.querySelector(".numeroSeis");

switch (numeroRandom) {
  case 1:
    uno.innerHTML = `<img src="./img/1.jpg" alt="Numero uno" width="300">`;
    break;

  case 2:
    dos.innerHTML = `<img src="./img/2.jpg" alt="Numero dos" width="300">`;
    break;

  case 3:
    tres.innerHTML = `<img src="./img/3.jpg" alt="Numero tres" width="300">`;
    break;

  case 4:
    cuatro.innerHTML = `<img src="./img/4.jpg" alt="Numero cuatro" width="300">`;
    break;

  case 5:
    cinco.innerHTML = `<img src="./img/5.jpg" alt="Numero cinco" width="300">`;
    break;

    case 6:
    seis.innerHTML = `<img src="./img/6.png" alt="Numero seis" width="300">`;
    break;
}



