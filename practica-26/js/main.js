const formulario = document.querySelector('form');
const resultado = document.querySelector('.resultado')
const resultadoDos = document.querySelector('.resultadoSegu')


// Captura de elementos

const inputProyectores = document.querySelector('#proyectoresCant');
const inputComputadoras = document.querySelector('#computadorasCant');
const inputPantallas = document.querySelector('#pantallasCant');
const inputDias = document.querySelector('#diasCant');

formulario.addEventListener('submit', function(event){
    event.preventDefault();

    const cantProyectores = Number(inputProyectores.value) || 0;
    const cantComputadoras = Number(inputComputadoras.value) || 0;
    const cantPantallas = Number(inputPantallas.value) || 0;
    const cantDias = Number(inputDias.value) || 0;

    const valorProyector = 45000;
    const valorComputadora = 50000;
    const valorPantalla = 35000;

    const  presupuesto = ((valorProyector * cantProyectores) + (valorComputadora * cantComputadoras) + (valorPantalla * cantPantallas)) * cantDias;

    resultado.innerText = "El presupuesto necesario es: $" + presupuesto;


    if(presupuesto >= 500000){

        let presupuestoDescuento = Number(presupuesto * 0.9);
        resultadoDos.innerText = "El presupuesto con 10% descuento será: $" + presupuestoDescuento;

    } else{

        resultadoDos.innerText = "";

    }

});


