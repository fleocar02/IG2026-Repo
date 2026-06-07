// captura de elementos

let botonCalcular = document.querySelector('#calcular');

// Añadimos 'e' para capturar el evento de click
botonCalcular.addEventListener('click', function(e){

    // Evita que el formulario se envíe y recargue la página
    e.preventDefault();

    let resultadoMayor = Number(Math.max());
    let resultadoMenor = Number(Math.min());

    /*// Capturamos el input de resultado y le asignamos el valor
    document.querySelector('#resultado').value = precioDescuento;*/
})

// function?