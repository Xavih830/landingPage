"use strict";

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



(() => {
  barraLateral();
})();