// js/main.js

// 1. Lista de datos curiosos sobre Bogotá
const datosBogota = [
    "En 1974 se movió el edificio Cudecom entero (7.000 toneladas) para ampliar una avenida.",
    "Bogotá cuenta con más de 500 kilómetros de ciclorrutas, siendo una de las redes más extensas de Latinoamérica.",
    "El Cerro de Monserrate está a 3.152 metros sobre el nivel del mar; ¡casi 500 metros más alto que la ciudad!",
    "A Bogotá se le conoció históricamente como 'La Atenas Sudamericana' por su gran cantidad de museos, teatros y bibliotecas.",
    "El Jardín Botánico de Bogotá alberga el 'Tropicario', un circuito de invernaderos que recrea los diferentes ecosistemas de Colombia."
];

// 2. Esperamos a que el DOM esté listo
document.addEventListener("DOMContentLoaded", () => {
    // Buscamos el elemento aside donde queremos meter la magia
    const asideSaberMas = document.querySelector("aside");
    
    if (asideSaberMas) {
        // Creamos un botón dinámicamente desde JS
        const botonDato = document.createElement("button");
        botonDato.textContent = "🎲 Ver otra curiosidad";
        botonDato.style.marginTop = "10px";
        botonDato.style.cursor = "pointer";
        
        // Lo agregamos al aside
        asideSaberMas.appendChild(botonDato);
        
        // Escuchamos el clic en el botón
        botonDato.addEventListener("click", () => {
            // Elegimos un índice aleatorio
            const indiceAleatorio = Math.floor(Math.random() * datosBogota.length);
            
            // Reemplazamos solo el texto del párrafo dentro del aside
            const parrafo = asideSaberMas.querySelector("p");
            parrafo.innerHTML = `<strong>¿Sabías que?</strong> ${datosBogota[indiceAleatorio]}`;
        });
    }
});