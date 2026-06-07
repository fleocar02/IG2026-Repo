/* let precio = 43000;
let descuento = 10;

console.log("Precio sin descuento es $ " + precio);
console.log("El descuento es " + descuento + " %");
console.log("El precio con descuento es $ " + (precio - (precio * (descuento/100))));

de la practica 17
*/ 

// captura de elementos

let botonCalcular = document.querySelector('#calcular');

// Añadimos 'e' para capturar el evento de click
botonCalcular.addEventListener('click', function(e){

    // Evita que el formulario se envíe y recargue la página
    e.preventDefault();

    let datoPrecio = Number(document.querySelector('#precio').value);
    let datoDescuento = Number(document.querySelector('#descuento').value);
    let precioDescuento = Number(datoPrecio - (datoPrecio * datoDescuento/100));
    calcular.value = precioDescuento;

    // Capturamos el input de resultado y le asignamos el valor
    document.querySelector('#resultado').value = precioDescuento;
})