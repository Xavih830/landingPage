"use strict";

let listaBeneficios = [{1: "Te ahorramos meses de trámites y rechazos", 2: "images/ahorro_tiempo.jpg"},
  {1: "El camión queda 100% a tu nombre", 2: "images/camion_contrato.jpg"},
  {1: "Pagas conforme avanza el trámite, no hay riesgo", 2: "images/riesgo_cero.jpg"},
  {1: "Compañía lista para operar en 30 días o menos", 2: "images/comp_30.jpg"},
  {1: "Permiso de operaciones garantizado en tu ciudad", 2: "images/permiso_ciudad.jpg"},
  {1: "No te haremos padecer de estrés, filas, ni te haremos perder tu tiempo", 2: "images/cero_estres.jpg"}
];

const barraLateral = () => {
  let barra = document.getElementById("barra-lateral");
  barra.addEventListener("click", () => {
    let agregar = document.getElementById("agregar-lateral");
    if (agregar.innerHTML == ""){
      agregar.innerHTML = `
      <button class="text-gray-600 hover:bg-gray-200 w-full px-2 rounded hover:text-gray-900">Inicio</button>
        <button class="text-gray-600 hover:bg-gray-200 w-full px-2 rounded hover:text-gray-900">¿Por qué nosotros?</button>
        <button
          class="text-gray-600 hover:bg-gray-200 w-full px-2 rounded hover:text-gray-900">Evaluación especializada</button>
        <button
          class="text-gray-600 hover:bg-gray-200 w-full px-2 rounded hover:text-gray-900">Contáctanos</button>
    `;
    } else {
      agregar.innerHTML = "";
    }
  });
}

const cargarBeneficios = () => {
  
}

(() => {
  barraLateral();
})();