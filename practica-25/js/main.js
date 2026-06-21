const formulario = document.querySelector('form');
const txtResultado = document.querySelector('.resultado')

// Captura de elementos

const inputNombre = document.querySelector('#nombre');
const inputEdad = document.querySelector('#edadPersona');
const selectGenero = document.querySelector('#genero');

function obtenerRecomendacion(edad, genero){
    
    if(genero === 'comedia') {
        return edad < 20 ? 'Malcolm' : 'The Office';
    } 

    if (genero === 'romance') {
        return edad < 40 ? 'La rosa de guadalupe' : "Normal People";
    }

    if (genero === 'accion'){
        return edad < 25 ? 'John Wick' : 'Die Hard';
    }

    return null;
}

formulario.addEventListener('submit', (event) => {
    event.preventDefault();

    const nombre = inputNombre.value;
    const edad = Number(inputEdad.value);
    const genero = selectGenero.value;

    const serieRecomendada = obtenerRecomendacion(edad, genero);

    txtResultado.innerText = serieRecomendada 
    ? "Hola " + nombre + "! Te recomiendo ver " + serieRecomendada
    : "Hola " + nombre + "! Gracias por completar el formulario.";
   
});


