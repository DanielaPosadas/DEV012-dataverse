import { example  } from './dataFunctions.js';
import { renderItems } from './view.js';
import data from './data/dataset.js';


//Las tarjetas
const tarjetas = document.querySelectorAll('[itemprop="lethalityLevel"]')
const boton = document.querySelector('[data-testid="button-clear"]');
boton.addEventListener('click', limpiar)

function limpiar(){

}

//Seleccionar la opcion del filtro
const filtrar = document.querySelector('[data-testid="select-filter"]');
filtrar.addEventListener("change", filtros);

function filtros(){
    let selectedOption = filtrar.options[filtrar.selectedIndex];
    console.log(selectedOption.value);

    //Data de personajes
    const personajes = data;
    const resultado = example(personajes);
    console.log(resultado);
}

//Seleccionar la opcion del ordenar
const ordenar = document.querySelector('[data-testid="select-sort"]');
ordenar.addEventListener("change", ordenado);
function ordenado() {
    let ordenOption = ordenar.options[ordenar.selectedIndex];
    console.log(ordenOption.value);
}







console.log(example, renderItems(data), data);
