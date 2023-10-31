import { filtroLet0,computeStats } from "./dataFunctions.js";
import { renderItems } from "./view.js";
import data from "./data/dataset.js";

const contenedorLista = document.getElementById("root");
contenedorLista.appendChild(renderItems(data));

//Seleccionar la opcion del filtro letalidad
const filtrarLetalidad = document.querySelector('[id="filtrar-por-letality"]');
const filtrarReino = document.querySelector('[id="filtrar-por-kingdom"]');
const ordenarPersonajes = document.querySelector('[id="ordenar-por"]');

filtrarLetalidad.addEventListener("change", filtros);
filtrarReino.addEventListener("change", filtros);
ordenarPersonajes.addEventListener("change", filtros);

function filtros() {
  const indice = filtrarLetalidad.selectedIndex;
  const optionSelect = filtrarLetalidad.options[indice];
  const indiceReino = filtrarReino.selectedIndex;
  const optionSelectReino = filtrarReino.options[indiceReino];
  const indice_orden = ordenarPersonajes.selectedIndex;
  const optionSelect_orden = ordenarPersonajes.options[indice_orden];
  contenedorLista.innerHTML = "";

  const dataFiltrada = filtroLet0(
    data,
    optionSelect.value,
    optionSelectReino.value,
    optionSelect_orden.value
  );
  contenedorLista.appendChild(renderItems(dataFiltrada));
}

/*//Seleccionar la opcion del filtro
  const filtrarLetalidad = document.getElementById("filtrar-por-letality");
  filtrarLetalidad.addEventListener("change", filtrosLetalidad);

  function filtrosLetalidad(){
  const indice = filtrarLetalidad.selectedIndex;
  const optionSelect = filtrarLetalidad.options[indice];
  contenedorLista.innerHTML='';
  if(optionSelect.value === "Alto"){
    const dataFiltrada = filtroLet1(data);
    contenedorLista.appendChild(renderItems(dataFiltrada));
  } else if(optionSelect.value === "Moderado"){
    const dataFiltrada = filtroLet2(data);
    contenedorLista.appendChild(renderItems(dataFiltrada));
  } else if(optionSelect.value === "Moderado-bajo"){
    const dataFiltrada = filtroLet3(data);
    contenedorLista.appendChild(renderItems(dataFiltrada));
  } else if(optionSelect.value === "Bajo"){
    const dataFiltrada = filtroLet4(data);
    contenedorLista.appendChild(renderItems(dataFiltrada));
  } else if(optionSelect.value === "nada"){
    contenedorLista.appendChild(renderItems(data));
  }}*/
//Seleccionar la opcion del filtro
/*const filtrarReino = document.getElementById("filtrar-por-kingdom");
filtrarReino.addEventListener("change", filtrosReino);

function filtrosReino(){
  const indice = filtrarReino.selectedIndex;
  const optionSelect = filtrarReino.options[indice];
  contenedorLista.innerHTML='';
  if(optionSelect.value === "Cielo"){
    const dataFiltrada = filtroRein1(data);
    contenedorLista.appendChild(renderItems(dataFiltrada));
  } else if(optionSelect.value === "Earthrealm"){
    const dataFiltrada = filtroRein2(data);
    contenedorLista.appendChild(renderItems(dataFiltrada));
  } else if(optionSelect.value === "Outworld"){
    const dataFiltrada = filtroRein3(data);
    contenedorLista.appendChild(renderItems(dataFiltrada));
  } else if(optionSelect.value === "Netherrealm"){
    const dataFiltrada = filtroRein4(data);
    contenedorLista.appendChild(renderItems(dataFiltrada));
  } else if(optionSelect.value === "nada"){
    contenedorLista.appendChild(renderItems(data));
  }
}*/

/*const ordenarPersonajes = document.getElementById("ordenar-por");
ordenarPersonajes.addEventListener("change", Ordenar);

function Ordenar(){
  const indice = ordenarPersonajes.selectedIndex;
  const optionSelect = ordenarPersonajes.options[indice];
  contenedorLista.innerHTML='';
  if (optionSelect.value === "asc"){
    const dataFiltrada = ordenaAZ(data);
    contenedorLista.appendChild(renderItems(dataFiltrada));
  } else if(optionSelect.value === "Mujer"){
    const dataFiltrada = ordenaGen(data);
    contenedorLista.appendChild(renderItems(dataFiltrada));
  } else if(optionSelect.value === "Hombre"){
    const dataFiltrada = ordenaGen2(data);
    contenedorLista.appendChild(renderItems(dataFiltrada)); 
  }  
    else if(optionSelect.value === "nada"){
    contenedorLista.appendChild(renderItems(data));
  }
}
*/

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

const totalPersonajes = document.querySelector('[id="conteo-personajes"]');
totalPersonajes.textContent = "Total personajes: " + computeStats(data);
