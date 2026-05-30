
let titulo = document.querySelector('.principal');

titulo.addEventListener('click', function() {
    this.style.color = 'red';
});


let subtitulo = document.querySelector('h3');

subtitulo.addEventListener('click', function() {
    this.style.color = 'red';
});

let parrafo = document.querySelector('p');

parrafo.addEventListener('click', function() {
    this.style.color = 'red';
});

let lista = document.querySelector('li');

lista.addEventListener('click', function() {
    array.forEach(element => {
        this.style.color = 'red'; 
    });
});


let imagen = document.querySelector('img');

imagen.addEventListener('click', function() {
imagen.style.display = 'none';
});

//no pude

//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

window.addEventListener('keydown', function(e) {
    console.log(e);
    console.log(e.key);
});
/* titulo.style.fontSize = '5em';
titulo.innerText = 'Nuevo título';
titulo.innerHTML = 'Nuevo <em>título</em>'; */
