export const renderItems = (data) => {
  console.log(data)
  // Aquí comienza tu código y puedes retornar lo que tu necesites
  const personajes = data;
  const contenedorLista = document.getElementById("root");

  //Crea la ul sólo una vez
  const ulista = document.createElement('ul');
  contenedorLista.appendChild(ulista);

  function informacionPersonajes(){
    const ilista = document.createElement('li');
    contenedorLista.appendChild(ilista);

    //Meter todos los li dentro del ul
    ulista.appendChild(ilista);
  }
  personajes.forEach(informacionPersonajes);
  console.log(contenedorLista);

  return personajes;
};

