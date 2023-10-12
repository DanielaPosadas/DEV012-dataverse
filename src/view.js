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

    //Meter los <dl> dentro de los <li>
    const dlDescriptiva = document.createElement('dl');
    ilista.appendChild(dlDescriptiva);
    //Agregar atributo itemscope e itemtype a los <dl>
    dlDescriptiva.setAttribute("itemscope");
    dlDescriptiva.setAttribute("itemtype");

    //Meter <img> dentro de los <dl>
    const imagen = document.createElement('img');
    dlDescriptiva.appendChild(imagen);

    //Meter x4 <dt> dentro de los <dl>
    const dtalle1 = document.createElement('dt');
    dlDescriptiva.appendChild(dtalle1);
    const dDescriptiva1 = document.createElement('dd');
    dlDescriptiva.appendChild(dDescriptiva1);
    //Agregar atributo 'itemprop' a los <dt>
    dDescriptiva1.setAttribute("itemprop","name");

    const dtalle2 = document.createElement('dt');
    dlDescriptiva.appendChild(dtalle2);
    const dDescriptiva2 = document.createElement('dd');
    dlDescriptiva.appendChild(dDescriptiva2);
    dDescriptiva2.setAttribute("itemprop","lethalityLevel");

    const dtalle3 = document.createElement('dt');
    dlDescriptiva.appendChild(dtalle3);
    const dDescriptiva3 = document.createElement('dd');
    dlDescriptiva.appendChild(dDescriptiva3);
    dDescriptiva3.setAttribute("itemprop","weapons");

    const dtalle4 = document.createElement('dt');
    dlDescriptiva.appendChild(dtalle4);
    const dDescriptiva4 = document.createElement('dd');
    dlDescriptiva.appendChild(dDescriptiva4);
    dDescriptiva4.setAttribute("itemprop","kingdom");
    
  }
  personajes.forEach(informacionPersonajes);
  console.log(contenedorLista);

  return personajes;

};

