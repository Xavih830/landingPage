"use strict";

let listaBeneficios = [{uno: "Te ahorramos meses de trámites y rechazos", dos: "images/ahorro_tiempo.jpg"},
  {uno: "El camión queda 100% a tu nombre", dos: "images/camion_nombre.jpg"},
  {uno: "Pagas conforme avanza el trámite, no hay riesgo", dos: "images/riesgo_cero.jpg"},
  {uno: "Compañía lista para operar en 30 días o menos", dos: "images/comp_30.jpg"},
  {uno: "Permiso de operaciones garantizado en tu ciudad", dos: "images/permiso_ciudad.jpg"},
  {uno: "No te haremos padecer de estrés, filas, ni te haremos perder tu tiempo", dos: "images/cero_estres.jpg"}
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
  let card = document.getElementById("beneficios");
  card.innerHTML = "";
  listaBeneficios.forEach(cadenas => {
    card.innerHTML += `
      <div class="bg-gray-900 m-1 block max-w-sm sm:max-w-[365px] lg:max-w-[245px] border border-2 rounded-xl shadow-xs">
        <img class="w-full h-55 sm:w-100 sm:h-50 lg:w-75 lg:h-34 rounded-xl" src="${cadenas.dos}" alt="" />
        <div class="p-6 text-center">
          <h5 class="mb-4 text-1xl font-semibold tracking-tight text-heading">${cadenas.uno}</h5>
          <button 
            class="inline-flex items-center text-white bg-brand box-border border rounded hover:bg-brand-strong focus:ring-4 focus:ring-brand-medium shadow-xs font-medium leading-5 rounded-base text-sm px-4 py-2.5 focus:outline-none">
            Ver más...
          </button>
        </div>
      </div>
    `;
  });
}

(() => {
  barraLateral();
  cargarBeneficios();
})();