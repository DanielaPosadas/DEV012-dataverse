// Estas funciones son ejemplos, aquí puedes desarrollar tus propias funciones.
export const example = (personajes) => {
  
//Ordenar el nivel de letalidad
const orden = {"Alto": 1, "Moderado": 2, "Moderado-bajo": 3, "Bajo": 4};
let todos = personajes.sort((a , b) => {
  if(orden[a.facts.lethalityLevel] < orden[b.facts.lethalityLevel]){
    return -1;
  } else if (orden[a.facts.lethalityLevel] > orden[b.facts.lethalityLevel]){
    return 1;
  } else {return 0};
});
return todos;

//const filtro1 = personajes.filter(items => items.facts.lethalityLevel === "Alto");
};

//FILTRO ARMAS
export const anotherExample = (personajes) => {
  return [];
};