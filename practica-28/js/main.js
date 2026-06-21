// Captura de elementos

const porcentajePasta = document.querySelector('.porcentaje-pasta');
const porcentajePollo = document.querySelector('.porcentaje-pollo');
const porcentajeEnsalada = document.querySelector('.porcentaje-ensalada');
const menuElegido = document.querySelector('.menu-elegido');

let contadorPasta = 0;
let contadorPollo = 0;
let contadorEnsalada = 0;
const totalInvitados = 12;

for (let i = 1; i <= totalInvitados; i++){

        let inputComida = Number(prompt('Invitado ' + i + ': ¿Qué elige? 1. Pasta 2. Pollo 3. Ensalada'));

        while (isNaN (inputComida) || inputComida < 1 || inputComida > 3) {
                inputComida = Number(prompt("Dato inválido. Por favor ingrese 1 (Pasta), 2 (Pollo) o 3 (Ensalada) para el invitado " + i));
        }

        if (inputComida === 1) {
                contadorPasta++
        } else if (inputComida === 2) {
                contadorPollo++
        } else {
                contadorEnsalada++
        }

}

let porcPasta = (contadorPasta / totalInvitados) * 100;
let porcPollo = (contadorPollo / totalInvitados) * 100;
let porcEnsalada = (contadorEnsalada / totalInvitados) * 100;

let masElegido = '';

if (contadorPasta > contadorPollo && contadorPasta > contadorEnsalada){
        masElegido = 'Pasta';
} else if (contadorPollo > contadorPasta && contadorPollo > contadorEnsalada){
        masElegido = 'Pollo';
} else if (contadorEnsalada > contadorPasta && contadorEnsalada > contadorPollo){
        masElegido = 'Ensalada';
} else {
        masElegido = 'Hubo un empate';
}

porcentajePasta.innerText = "Porcentaje Pasta: " + porcPasta + "%";
porcentajePollo.innerText = "Porcentaje Pollo: " + porcPollo + "%";
porcentajeEnsalada.innerText = "Porcentaje Ensalada: " + porcEnsalada+ "%";
menuElegido.innerText =  "Menu más elegido: " + masElegido;




/*for (let cantPersonas = 1; cantPersonas < 13; cantPersonas++){

        let inputMenu = prompt('¿Qué opcion elige para el menu del invitado ' + cantPersonas + "? (1. Pasta, 2. Pollo, 3. Ensalada)");

        while (isNaN(inputMenu) && inputMenu <= 0 && inputMenu <= 3){
                inputMenu = Number(prompt("Dato incorrecto. Elija una opción para el invitado " + cantPersonas + " Entre el 1 y el 3 (1. Pasta, 2. Pollo, 3. Ensalada)")); 
        }

        if (inputMenu == 1){
                contadorPasta++
        } else if (inputMenu == 2){
                contadorPollo++
        } else if (inputMenu == 3){
                contadorEnsalada++
        } 
        
}






*/


/*//PEDIR Y VALIDAR LAS RESPUESTAS


for (let i = 0; i <= cantPersonas; i++);

        let inputComida = Number(prompt("¿Qué opcion elige para el menu del invitado " + i + "? (1. Pasta, 2. Pollo, 3. Ensalada)")); 

        while (isNaN(inputComida) || inputComida <= 0 && inputComida <= 3){
                inputComida = Number(prompt("Dato incorrecto. Elija una opción para el invitado " + i + " Entre el 1 y el 3 (1. Pasta, 2. Pollo, 3. Ensalada)")); 
        }
        
        cantPersonas.push(inputComida)


//ALMACENAMIENTO DE DATOS
*/







//function opcionesComida(pasta, pollo, ensalada){

//}



/* <p class="porcentaje-pasta"></p> <!--porcentaje de personas que eligió cada menú -->
        <p class="porcentaje-pollo"></p> <!--porcentaje de personas que eligió cada menú -->
        <p class="porcentaje-ensalada"></p> <!--porcentaje de personas que eligió cada menú -->
        <p class="menu-elegido"></p> <!-- cuál fue el menú más elegido -->
*/