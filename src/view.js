export const renderItems = (data) => {
  //console.log(data)
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
    dlDescriptiva.setAttribute("itemscope", "");
    dlDescriptiva.setAttribute("itemtype", "Personajes-MK");

    //Meter <img> dentro de los <dl>
    const imagen = document.createElement('img');
    dlDescriptiva.appendChild(imagen)
    const todasIMG = document.querySelectorAll("dl img");
    for(let i = 0; i < todasIMG.length; i++){
      const asignar = todasIMG[i];
      asignar.src = personajes[i].imageUrl;}

    //DT1 - DD1
    const dtalle1 = document.createElement('dt');
      //dtalle1.textContent = "Nombre:";
    dlDescriptiva.appendChild(dtalle1);
    const dDescriptiva1 = document.createElement('dd');
    dlDescriptiva.appendChild(dDescriptiva1);
    dDescriptiva1.setAttribute("itemprop","name");
    //Meter nombre en <dt1>
    const todasDT = document.querySelectorAll("dd[itemprop=name]");
    for(let i = 0; i < todasDT.length; i++){
      const asignar = todasDT[i];
      asignar.textContent = personajes[i].name};

    //DT2 - DD2
    const dtalle2 = document.createElement('dt');
    dtalle2.textContent = "Letalidad:";
    dlDescriptiva.appendChild(dtalle2);
    const dDescriptiva2 = document.createElement('dd');
    dlDescriptiva.appendChild(dDescriptiva2);
    dDescriptiva2.setAttribute("itemprop","lethalityLevel");
    //Meter letalidad en <dt2>
    const todasDT2 = document.querySelectorAll("dd[itemprop=lethalityLevel]");
    for(let i = 0; i < todasDT2.length; i++){
      const asignar2 = todasDT2[i];
      asignar2.textContent = personajes[i].facts.lethalityLevel};


    //DT3 - DD3
    const dtalle3 = document.createElement('dt');
    dtalle3.textContent = "Armas:";
    dlDescriptiva.appendChild(dtalle3);
    const dDescriptiva3 = document.createElement('dd');
    dlDescriptiva.appendChild(dDescriptiva3);
    dDescriptiva3.setAttribute("itemprop","weapons");
    //Meter armas en <dt>
    const todasDT3 = document.querySelectorAll("dd[itemprop=weapons]");
    for(let i = 0; i < todasDT3.length; i++){
      const asignar3 = todasDT3[i];
      asignar3.textContent = personajes[i].facts.weapons};

    //DT4 - DD4
    const dtalle4 = document.createElement('dt');
    dtalle4.textContent = "Reino:";
    dlDescriptiva.appendChild(dtalle4);
    const dDescriptiva4 = document.createElement('dd');
    dlDescriptiva.appendChild(dDescriptiva4);
    dDescriptiva4.setAttribute("itemprop","kingdom");
    //Meter armas en <dt>
    const todasDT4 = document.querySelectorAll("dd[itemprop=kingdom]");
    for(let i = 0; i < todasDT4.length; i++){
      const asignar4 = todasDT4[i];
      asignar4.textContent = personajes[i].facts.kingdom};

   
    
  }
  
  personajes.forEach(informacionPersonajes);
  //console.log(contenedorLista);

  return personajes;

};

