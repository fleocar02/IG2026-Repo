/* let precio = 43000;
let descuento = 10;

console.log("Precio sin descuento es $ " + precio);
console.log("El descuento es " + descuento + " %");
console.log("El precio con descuento es $ " + (precio - (precio * (descuento/100))));

de la practica 17
*/ 

// captura de elementos

let botonCalcular = document.querySelector('#calcular');

botonCalcular.addEventListener('click', function(){

    let datoPrecio = document.querySelector('#precio').value;
    let datoDescuento = document.querySelector('#descuento').value;
    let precioDescuento = Number(datoPrecio - (datoPrecio * datoDescuento/100));
    calcular.value = precioDescuento;

})