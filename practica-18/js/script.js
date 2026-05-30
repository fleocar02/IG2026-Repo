alert("Al aceptar cambia todo");

let textos = document.querySelectorAll('p');


let titulo = document.querySelector('.principal');
titulo.style.color = 'red';
titulo.style.fontSize = '5em';
titulo.innerText = 'Nuevo título';
titulo.innerHTML = 'Nuevo <em>título</em>';
