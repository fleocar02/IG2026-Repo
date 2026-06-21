// Captura de elementos

const gastoTotal = document.querySelector('.gasto-total');
const libroCaro = document.querySelector('.libro-caro');
const libroBarato = document.querySelector('.libro-barato');
const libroPromedio = document.querySelector('.libro-promedio');

//PEDIR Y VALIDAR LA CANTIDAD DE LIBROS

let cantLibros = Number(prompt("¿Cuántos libros compró?")); 

while (isNaN(cantLibros) || cantLibros <= 0){
     cantLibros = Number(prompt("Dato incorrecto, indique una cantidad válida de libros (mayor a 0): "));
}
    
//ALMACENAR LOS DATOS

const preciosLibros = [];

for (let i = 1; i <= cantLibros; i++){
    let precio = Number(prompt('Ingrese el precio del libro número ' + i));

    while (isNaN(precio) || precio <= 0) {
        precio = Number(prompt('Dato incorrecto. Ingrese un precio válido para el libro número ' + i));
    }

    preciosLibros.push(precio);
}

//PROCESAMIENTO DE DATOS

let totalGasto = 0;
let maxPrecio = preciosLibros[0];
let minPrecio = preciosLibros[0];

for (let i = 0; i < preciosLibros.length; i++){

    totalGasto += preciosLibros[i];

    if (preciosLibros[i] > maxPrecio) {
        maxPrecio = preciosLibros[i];
    }

    if (preciosLibros[i] < minPrecio) {
        minPrecio = preciosLibros [i];
    }
}

let promedioPrecio = totalGasto / cantLibros;

gastoTotal.innerText = 'Total gastado: ' + totalGasto;
libroCaro.innerText = 'Libro más caro: ' + maxPrecio;
libroBarato.innerText = 'Libro más barato: ' + minPrecio;
libroPromedio.innerText = 'Promedio por libro: ' + promedioPrecio;






//precioslibros.push(precio): Agrega el precio ingresado al final del array.

//isNaN(valor): Devuelve true si el valor no se puede transformar a número. Es la forma correcta de validar en JavaScript.

//while para obligar a que el dato sea correcto y for para contar las vueltas fijas


    /*else if (cantLibros >= 0){
        for (let i = 1; i < cantLibros; i++){
            console.log("Cantidad de libros: " + i);
        }
    }  else {
        gastoTotal.innerText = "Ups"
    }

    //Se le debe preguntar al usuario cuántos libros compró y el precio de cada uno de los libros. Validar todos los datos.
*/


