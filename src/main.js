"use strict";
import { saveForm, getForm } from "./firebase";

let listaBeneficios = [{ uno: "Te ahorramos meses de trámites y rechazos", dos: "/assets/ahorro.png" },
{ uno: "Pagas solo conforme avanza el trámite", dos: "/assets/confianza.png" },
{ uno: "Compañía lista para operar en 30 días", dos: "/assets/plazo.png" },
{ uno: "Ahorras un 77% con nosotros", dos: "/assets/precio.png" }
];

const resp1 = "Es una empresa especializada en la constitución legal de compañías de transporte de carga pesada en Ecuador, así como en la gestión completa del Permiso de Operaciones ante la ANT. Su servicio está enfocado en brindar un proceso 100% guiado, seguro, transparente y conforme a la normativa vigente, permitiendo que los clientes obtengan su empresa lista para operar en aproximadamente un mes, sin tener que enfrentar directamente la burocracia de las entidades públicas. Lavayen actúa como gestor legal integral, coordinando todas las etapas: factibilidad, escritura, registros, permisos y entrega final de la carpeta social completa.";
const resp2 = `El valor total del servicio es de: USD 4.500 por cada camión. El pago se realiza de forma progresiva, conforme avanza el trámite, lo que garantiza transparencia y seguridad para el cliente: Anticipo inicial: USD 1.500. Segundo pago (con resolución de factibilidad): USD 1.000. Tercer pago (con escritura inscrita en el Registro Mercantil): USD 1.000. Cuarto pago (con registro en Superintendencia de Compañías): USD 500. Pago final (a la entrega de la carpeta social completa): USD 500. Este esquema protege al cliente, ya que solo paga cuando cada etapa oficial ha sido cumplida.`;
const resp3 = "Lavayen opera con domicilio en la ciudad de Guayaquil, lugar estratégico donde actualmente la ANT sí está concediendo Permisos de Operaciones para compañías de transporte de carga pesada. Esto representa una ventaja clave para los clientes, ya que evita retrasos, observaciones y rechazos que suelen darse en otras ciudades del país.";
const resp4 = "El servicio es integral, es decir, cubre todo el proceso legal y administrativo hasta dejar la compañía completamente habilitada para operar. Incluye: Aprobación del nombre de la compañía, Elaboración del proyecto económico y resolución de factibilidad, Escritura de constitución de la compañía, Nombramiento del Gerente General, Inscripción en el Registro Mercantil, Registro societario en la Superintendencia de Compañías, Asesoría para la obtención del RUC, Armado completo de la carpeta para el Permiso de Operaciones, Gestión del Permiso de Operaciones ante la ANT.";

let listaPreguntas = [{ uno: "¿Qué es Lavayen?", dos: resp1 },
{ uno: "¿Cuánto cuesta su servicio?", dos: resp2 },
{ uno: "¿Dónde puedo encontrarlos?", dos: resp3 },
{ uno: "¿Qué incluye su servicio?", dos: resp4 }
];

const barraLateral = () => {
  let barra = document.getElementById("barra-lateral");
  barra.addEventListener("click", () => {
    let agregar = document.getElementById("agregar-lateral");
    if (agregar.innerHTML == "") {
      agregar.innerHTML = `
      <button class="text-gray-600 bg-gray-200 mt-2 rounded-sm px-5 py-2">Inicio</button>
      <button class="text-gray-600 bg-gray-200 rounded-sm px-5 py-2">¿Por qué nosotros?</button>
      <button class="text-gray-600 bg-gray-200 rounded-sm px-5 py-2">Evaluación especializada</button>
      <button class="text-gray-600 bg-gray-200 mb-2 rounded-sm px-5 py-2">Contáctanos</button>
    `;
    } else {
      agregar.innerHTML = "";
    }
  });
}


const cargarPreguntas = () => {
  let contenedor = document.getElementById("contenedor-preguntas");
  contenedor.innerHTML = '';

  listaPreguntas.forEach(pregunta => {
    const boton = document.createElement('button');
    const contB = "px-5 flex fex-grow justify-between text-lg py-6 mb-2 bg-[#2d2d2d] font-semibold";
    boton.className = contB;
    boton.textContent = pregunta.uno;
    const svg1 = `
      <svg class="" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-right-icon lucide-chevron-right"><path d="m9 18 6-6-6-6"/></svg>
    `;
    const svg2 = `
      <svg class="hidden" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-x-icon lucide-x"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
    `;
    boton.innerHTML += svg1;
    boton.innerHTML += svg2;

    const conten = document.createElement('div');
    conten.className = "bg-[#2d2d2d] text-left px-5 py-6 mb-2 hidden";
    conten.textContent = pregunta.dos;

    boton.addEventListener('click', () => {
      conten.classList.toggle("hidden");
      boton.classList.toggle("mb-2");
      boton.classList.toggle("mb-[1px]");
      boton.getElementsByTagName("svg")[0].classList.toggle("hidden");
      boton.getElementsByTagName("svg")[1].classList.toggle("hidden");
    });

    contenedor.appendChild(boton);
    contenedor.appendChild(conten);
  });
}

const cargarBeneficios = () => {
  let card = document.getElementById("beneficios");
  card.innerHTML = "";
  listaBeneficios.forEach(cadena => {
    card.innerHTML += `
      <div class="mb-2 px-3 bg-[url(${cadena.dos})] bg-center bg-no-repeat bg-cover h-48 m-1 rounded-xl">
        <h5 class="mb-4 text-1xl pr-25 font-semibold tracking-tight text-heading">${cadena.uno}</h5>
      </div>
    `;
  });
}

const enableForm = () => {
  const form = document.getElementById("evaluacion1");
  const form2 = document.getElementById("evaluacion2");

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const tipo = document.getElementById("tipo").value;
    const correo = document.getElementById("input_email").value;
    const desc = document.getElementById("textarea_case").value;

    saveForm(correo, tipo, desc)
      .then(exito => {
        console.log(exito.message);
        window.location.reload();
      })
      .catch(fracaso => console.log(fracaso.message));
  });

  form2.addEventListener("submit", (e) => {
    e.preventDefault();

    const tipo2 = document.getElementById("tipo2").value;
    const correo2 = document.getElementById("input_email2").value;
    const desc2 = document.getElementById("textarea_case2").value;

    saveForm(correo2, tipo2, desc2)
      .then(exito => {
        console.log(exito.message);
        window.location.reload();
      })
      .catch(fracaso => console.log(fracaso.message));

  });

};

const mostrarDb = () => {
  let contenedor = document.getElementById("contenedor-datos");
  contenedor.innerHTML = '';
  const boton = document.createElement('button');
  const contB = "px-5 flex fex-grow justify-between text-lg py-6 mb-2 bg-[#2d2d2d] font-semibold";
  boton.className = contB;
  boton.textContent = "Mostrar";
  const svg1 = `
      <svg class="" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-right-icon lucide-chevron-right"><path d="m9 18 6-6-6-6"/></svg>
    `;
  const svg2 = `
      <svg class="hidden" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-x-icon lucide-x"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
    `;
  boton.innerHTML += svg1;
  boton.innerHTML += svg2;

  const conten = document.createElement('div');
  conten.className = "bg-[#2d2d2d] text-left px-5 py-6 mb-2 hidden";

  getForm().then(result => {
    const tabla = document.createElement('table');
    tabla.classList = "border-separate border-spacing-x-1 border-spacing-y-[1px]";
    tabla.innerHTML = `
      <thead>
        <tr>
          <th>Email</th>
          <th class="text-center">Tipo de caso</th>
        </tr>
      </thead>
      <tbody>
      </tbody>
    `;
    const cuerpoT = tabla.querySelector("tbody");
    const lista = Object.values(result.data);

    lista.forEach(fila => {
      cuerpoT.innerHTML += `
        <tr>
          <td>${fila.correo}</td>
          <td class="text-center">${fila.caso}</td>
        </tr>
      `;
    });

    conten.appendChild(tabla);

  }).catch(e => {
    console.log(e.data);
  });

  boton.addEventListener('click', () => {
    conten.classList.toggle("hidden");
    conten.classList.toggle("flex");
    conten.classList.toggle("flex-col");
    conten.classList.toggle("items-center");
    boton.classList.toggle("mb-2");
    boton.classList.toggle("mb-[1px]");
    boton.getElementsByTagName("svg")[0].classList.toggle("hidden");
    boton.getElementsByTagName("svg")[1].classList.toggle("hidden");
  });

  contenedor.appendChild(boton);
  contenedor.appendChild(conten);
}

(() => {
  barraLateral();
  mostrarDb();
  enableForm();
  cargarBeneficios();
  cargarPreguntas();
})();