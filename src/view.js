export const renderItems = (data) => {
  // Aquí comienza tu código y puedes retornar lo que tu necesites

  const ulista = document.createElement('ul');
  ulista.setAttribute("class","lista-de-personajes");

  for (let p of data) {

    const ilista = document.createElement('li');

    //Meter todos los li dentro del ul
    ulista.appendChild(ilista);

    //Meter los <dl> dentro de los <li>
    const dlDescriptiva = document.createElement('dl');
    ilista.appendChild(dlDescriptiva);
    //Agregar atributo itemscope e itemtype a los <dl>
    dlDescriptiva.setAttribute("itemscope", "");
    dlDescriptiva.setAttribute("itemtype", "Personajes-MK");

    //Meter <img> dentro de los <dl>
    const imagen = document.createElement('img');
    dlDescriptiva.appendChild(imagen);
    imagen.src = p.imageUrl;

    //DT1 - DD1   nombre
    const dtalle1 = document.createElement('dt');
    dlDescriptiva.appendChild(dtalle1);
    const dDescriptiva1 = document.createElement('dd');
    dlDescriptiva.appendChild(dDescriptiva1);
    dDescriptiva1.setAttribute("itemprop","name");
    dDescriptiva1.textContent = p.name;

    //DT2 - DD2 lethalityLevel
    const dtalle2 = document.createElement('dt');
    dtalle2.textContent = "Letalidad:";
    dlDescriptiva.appendChild(dtalle2);
    const dDescriptiva2 = document.createElement('dd');
    dlDescriptiva.appendChild(dDescriptiva2);
    dDescriptiva2.setAttribute("itemprop","lethalityLevel");
    dDescriptiva2.textContent = p.facts.lethalityLevel;

    //DT3 - DD3 Meter armas en <dt>
    const dtalle3 = document.createElement('dt');
    dtalle3.textContent = "Armas:";
    dlDescriptiva.appendChild(dtalle3);
    const dDescriptiva3 = document.createElement('dd');
    dlDescriptiva.appendChild(dDescriptiva3);
    dDescriptiva3.setAttribute("itemprop","weapons");
    dDescriptiva3.textContent = p.facts.weapons;

    //DT4 - DD4 kingdom
    const dtalle4 = document.createElement('dt');
    dtalle4.textContent = "Reino:";
    dlDescriptiva.appendChild(dtalle4);
    const dDescriptiva4 = document.createElement('dd');
    dlDescriptiva.appendChild(dDescriptiva4);
    dDescriptiva4.setAttribute("itemprop","kingdom");
    dDescriptiva4.textContent = p.facts.kingdom;
  
  }
  return ulista;

};

