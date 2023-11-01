import { filtroLet0,computeStats } from "./dataFunctions.js";
import { renderItems } from "./view.js";
import data from "./data/dataset.js";

//SELECCIONAR <DIV> Y RENDERIZAR EN HTML
const contenedorLista = document.getElementById("root");
contenedorLista.appendChild(renderItems(data));

//SELECCIONAR <SELECT>
const filtrarLetalidad = document.querySelector('[id="filtrar-por-letality"]');
const filtrarReino = document.querySelector('[id="filtrar-por-kingdom"]');
const ordenarPersonajes = document.querySelector('[id="ordenar-por"]');

filtrarLetalidad.addEventListener("change", filtros);
filtrarReino.addEventListener("change", filtros);
ordenarPersonajes.addEventListener("change", filtros);

//SELECCIONA TODAS LAS <OPTION> DE LOS <SELECT>
function filtros() {
  const indice = filtrarLetalidad.selectedIndex;
  const optionSelect = filtrarLetalidad.options[indice];
  const indiceReino = filtrarReino.selectedIndex;
  const optionSelectReino = filtrarReino.options[indiceReino];
  const indice_orden = ordenarPersonajes.selectedIndex;
  const optionSelect_orden = ordenarPersonajes.options[indice_orden];
  contenedorLista.innerHTML = "";

  //ASIGNAR LOS <OPTION> A LOS filterBy/orderBy
  const dataFiltrada = filtroLet0(
    data,
    optionSelect.value,
    optionSelectReino.value,
    optionSelect_orden.value
  );
  contenedorLista.appendChild(renderItems(dataFiltrada));
}

//DAR FUNCION DE LIMPIAR SELECCIONES CON BOTON
//Las tarjetas
const boton = document.querySelector('[data-testid="button-clear"]');
boton.addEventListener("click", limpiar);

function limpiar() {
  filtrarLetalidad.value = "nada";
  filtrarReino.value = "nada";
  ordenarPersonajes.value = "nada";
  contenedorLista.innerHTML = "";
  contenedorLista.appendChild(renderItems(data));
}

//CALCULO DEL TOTAL DE PERSONAJES
const totalPersonajes = document.querySelector('[id="conteo-personajes"]');
totalPersonajes.textContent = "Total personajes: " + computeStats(data);
