// FUNCIONES FILTRO DE LETALIDAD
 export const filtroLet0 = (data,letalidad,reino,orden) => {
  console.log(letalidad,reino,orden);
   let data_filtrada = data;
  if (letalidad !== 'nada'){
    data_filtrada = filtro_letalidad(data_filtrada,letalidad);
  }
  if (reino !== 'nada'){
    data_filtrada = filtro_reino(data_filtrada,reino);
  }
      if (orden === "asc"){
      data_filtrada = ordenaAZ(data_filtrada);
      //contenedorLista.appendChild(renderItems(dataFiltrada));
    } else if(orden === "Mujer"){
      data_filtrada = ordenaGen(data_filtrada);
      //contenedorLista.appendChild(renderItems(dataFiltrada));
    } else if(orden === "Hombre"){
      data_filtrada = ordenaGen2(data_filtrada);
      //contenedorLista.appendChild(renderItems(dataFiltrada)); 
    }  

  return data_filtrada;
};

export const filtro_letalidad = (data,letalidad) => {
  const filtro1 = data.filter(items => items.facts.lethalityLevel === letalidad);
  return filtro1;
}; 

export const filtro_reino = (data,reino) => {
  const filtro1 = data.filter(items => items.facts.kingdom === reino);
  return filtro1;
}; 

  /*
export const filtroLet1 = (data) => {
  const filtro1 = data.filter(items => items.facts.lethalityLevel === "Alto");
  return filtro1;
};  
 
export const filtroLet2 = (data) => {
  const filtro2 = data.filter(items => items.facts.lethalityLevel === "Moderado");
  return filtro2;
};

export const filtroLet3 = (data) => {
  const filtro3 = data.filter(items => items.facts.lethalityLevel === "Moderado-bajo");
  return filtro3;
};

export const filtroLet4 = (data) => {
  const filtro4 = data.filter(items => items.facts.lethalityLevel === "Bajo");
  return filtro4; 
};

// FUNCIONES FILTRO DE REINO
export const filtroRein1 = (data) => {
  const filtroRein1 = data.filter(items => items.facts.kingdom === "Cielo");
  return filtroRein1;
};

export const filtroRein2 = (data) => {
  const filtroRein2 = data.filter(items => items.facts.kingdom === "Earthrealm");
  return filtroRein2;
};

export const filtroRein3 = (data) => {
  const filtroRein3 = data.filter(items => items.facts.kingdom === "Outworld");
  return filtroRein3;
};

export const filtroRein4 = (data) => {
  const filtroRein4 = data.filter(items => items.facts.kingdom === "Netherrealm");
  return filtroRein4;
};
*/

// FUNCIONES ORDENAMIENTO GÉNERO
export const ordenaGen = (data) => {
  const sinFiltrar = data.filter (items => items.gender === "Mujer" || "Hombre");
  const ordenGenM = sinFiltrar.sort((a , b) => {
    if(a.gender === "Mujer"){
      return -1
    } else if (b.gender === "Hombre")
    {return 1}
  });
  return ordenGenM;
};

export const ordenaGen2 = (data) => {
  const sinFiltrar = data.filter (items => items.gender === "Hombre" || "Mujer");
  const ordenGenH = sinFiltrar.sort((a , b) => {
    if(a.gender === "Hombre"){
      return -1
    } else if(b.gender === "Mujer"){
      return 1}
  });
  return ordenGenH;
};

export const ordenaAZ = (data) => {
  const sinFiltrar = data.filter (items => items.name);
  const ordenNameAz = sinFiltrar.sort((a , b) => {
    if(a.name < b.name){
      return -1;
    } else if(a.name > b.name){
      return 1;
    }
  });
  return ordenNameAz;
};
