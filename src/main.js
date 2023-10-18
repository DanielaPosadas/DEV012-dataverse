import { filtroLet1, filtroLet2, filtroLet3, filtroLet4, filtroRein1, filtroRein2, filtroRein3, filtroRein4, ordenaGen, ordenaGen2 } from './dataFunctions.js';
import { renderItems } from './view.js';
import data from './data/dataset.js';

const contenedorLista = document.getElementById("root");
contenedorLista.appendChild(renderItems(data));


//Las tarjetas
const boton = document.querySelector('[data-testid="button-clear"]');
boton.addEventListener('click', limpiar);

function limpiar(){

}

//Seleccionar la opcion del filtro
const filtrarLetalidad = document.getElementById("filtrar-por-letality");
filtrarLetalidad.addEventListener("change", filtrosLetalidad);

function filtrosLetalidad(){
    const indice = filtrarLetalidad.selectedIndex;
    const optionSelect = filtrarLetalidad.options[indice];
    console.log(optionSelect.value);
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
}
}

//Seleccionar la opcion del filtro
const filtrarReino = document.getElementById("filtrar-por-kingdom");
filtrarReino.addEventListener("change", filtrosReino);

function filtrosReino(){
    const indice = filtrarReino.selectedIndex;
    const optionSelect = filtrarReino.options[indice];
    console.log(optionSelect.value);
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
}
}

const ordenarSex = document.getElementById("ordenar-por");
ordenarSex.addEventListener("change", OrdenarGender);

function OrdenarGender(){
    const indice = ordenarSex.selectedIndex;
    const optionSelect = ordenarSex.options[indice];
    console.log(optionSelect.value);
    contenedorLista.innerHTML='';
    if(optionSelect.value === "Mujer"){
        const dataFiltrada = ordenaGen(data);
        contenedorLista.appendChild(renderItems(dataFiltrada));
    } else if(optionSelect.value === "Hombre"){
        const dataFiltrada = ordenaGen2(data);
        contenedorLista.appendChild(renderItems(dataFiltrada)); 
    }};


//console.log(example, renderItems(data), data);
