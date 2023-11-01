# Dataverse - Mortal Kombat

## Índice

* [1. Introducción](#1-introducción)
* [2. Resumen del proyecto](#2-resumen-del-proyecto)
* [3. Prompting](#3-prompting)
* [4. Historias de usuario](#4-historias-de-usuario)
* [5. Prototipo de baja y alta fidelidad](#5-Prototipo-de-baja-y-alta-fidelidad)
* [6. Funcionalidades](#6-funcionalidades)
* [7. Consideraciones técnicas](#7-Consideraciones-técnicas)
* [8. Criterios de aceptación mínimos del proyecto](#8-criterios-de-aceptación-mínimos-del-proyecto)
* [9. Pruebas unitarias](#9-Pruebas-unitarias)
* [10. Desarrolladoras web](#8-desarrolladoras-web)

## 1. Introducción

El siguiente proyecto tiene como objetivo presentar ante los usuarios un set de datos transformados en una interfaz intuitiva y fácil de utilizar. Los usuarios se verán beneficiados de la interacción que tendrán facilitando la captación de datos que deseen obtener.

Entiéndase como set de datos como un cúmulo de información que se va filtrando hasta obtener un mínimo de datos que sea del interés del usuario.

## 2. Resumen del proyecto

![Captura-app](https://raw.githubusercontent.com/DanielaPosadas/DEV012-dataverse/main/Img%20readme/App-web.png)

En este proyecto se construyó una _página web_ para visualizar un _conjunto (set) de datos_ que se ha generado con prompting a través de la inteligencia artificial. Esta página web se ha adecuado a través de historias de usuario para descubrir lo que los usuarios necesitan.

La interfaz está constituida por diversos filtros que reducen, agrupan y ordenan el set de datos devolviendo un grupo de tarjetas con información específica sobre la temática. Además de contar con un botón que permite "limpiar" cada uno de los campos y volver a la muestra de datos por defecto (inicio).

Sabemos que en la actualidad recurrimos a diversos dispositivos por lo cual, en esta aplicación se han implementado media queries por medio de CSS para su visualización a través de dispositivos móviles y ordenadores, facilitando el acceso a esta información.

## 3. Prompting con IA

![Captura-prompting](https://raw.githubusercontent.com/DanielaPosadas/DEV012-dataverse/main/Img%20readme/prompting.png)

La data elegida para este proyecto fue del videojuego Mortal Kombat por su gama de personajes e información que posee. Para obtener el set de datos se recurrió a la inteligencia artificial solicitando lo siguiente:

  * "id":
  * "name":
  * "gender":
  * "shortDescription":
  * "videogamesAppearances":
  * "facts": {
  * "skills":
  * "weapons":
  * "lethalityLevel":
  * "kingdom":
  }

El total de personajes seleccionados para el dataset es de 25.

## 4. Historias de usuario

![Captura-historias](https://raw.githubusercontent.com/DanielaPosadas/DEV012-dataverse/main/Img%20readme/historias%20de%20usuario2.png)

Para la creación de historias de usuario se han trabajado una serie de preguntas que toma en cuenta al usuario final para crear un proceso lógico e intuitivo a través de la aplicación web. Con base en las respuestas pudimos implementar un plan de trabajo que permitió fijar objetivos para diseñar una serie de prototipos que resolviera las necesidades que nos planteaban dichas historias de usuario.

## 5. Prototipo de baja y alta fidelidad

Esta aplicación web ha sido diseñada a partir de prototipos de baja y alta fidelidad que toman en cuenta una serie de requisitos indispensables, los cuales se han adecuado de la mejor manera para dar como resultado una plataforma fácil de utilizar por cualquier usuario.

### Prototipo de baja fidelidad

El prototipo de baja fidelidad fue diseñado a lápiz y papel tanto para ordenadores como para télefonos celulares.

![Captura-prototipo](https://raw.githubusercontent.com/DanielaPosadas/DEV012-dataverse/main/Img%20readme/baja.png)

### Prototipo de alta fidelidad

El prototipo de alta fidelidad fue diseñado en la apliación Figma para su uso en ordenadores y télefonos celulares, estableciendo paleta de color, estilo visual, fuentes tipográficas y funcionamiento inicial.

![Captura-alta-desktop](https://raw.githubusercontent.com/DanielaPosadas/DEV012-dataverse/main/Img%20readme/Proto_alta.png) ![Captura-alta-mobile](https://raw.githubusercontent.com/DanielaPosadas/DEV012-dataverse/main/Img%20readme/Proto_alta_mobile.png)

## 6. Funcionalidades

Aquí definimos con mayor detalle las funcionalidades mínimas con las que cuenta:

* La aplicación permite al usuario ver los items de la data en una visualización de tipo tarjetas.
  **Cada una de las tarjetas está contenida en un elemento `<li>` y estos a su vez contenidos dentro de un elemento `<ul>`.

* El elemento `<ul>` es hijo de un elemento con atributo id.

* Las tarjetas resaltan los valores de las propiedades de la data de Mortal Kombat. Son estos los que se podrán filtrar u ordenar.

    * "name"
    * "weapons"
    * "lethalityLevel"
    * "kingdom"

* La interfaz estructura semánticamente la data usando el estándar microdatos. Utiliza los atributos `itemscope`, `itemtype` e `itemprop`.

* La aplicación calcula y visualiza una estadística de la data relacionada con el número total de personajes.

* La aplicación permite al usuario filtrar la data, para que esto sea posible, los filtros son construidos a través de elementos `<select>` con un atributo de datos y un atributo `name`. Los `<option>` de este `<select>` tienen un atributo `value` con el valor del filtro al que pertenecen.
Para implementar el ordenamiento dentro de la aplicación se ha creado un `<select>` más con un `value` ascendente para ordenar la data por el nombre de los personajes alfabéticamente y dos opciones más por medio de género Mujer-Hombre y viceversa.

* Las funcionalidades de ordenar/filtrar operan de manera acumulativa. Es decir, si se aplica el filtro letalidad y luego se ordena por nombre ascendentemente, la plataforma mantiene el filtro aplicado y ordenar las tarjetas de manera alfabética.

* La aplicación permite también al usuario reiniciar la data filtrada. Limpia cada uno de los filtros y el ordenamiento a través de un botón con un atributo de datos.

* Las operaciones de filtrar, ordenar, limpiar, etc. no recargan la página, si no que agregan el contenido en una manera dinámica via javascript.

* La aplicación es responsive, es decir, se visualiza sin problemas desde distintos tamaños de pantallas: móviles, tablets y desktops.

## 7. Consideraciones técnicas

La aplicación web cuenta con diversos archivos HTML, JS y CSS:

* `src/index.html`
* `src/main.js`
* `dataset.js`
* `src/dataFunctions.js`
* `computeStats(data)`
* `src/data`
* `test/dataFunctions.spec.js`
* `test/data.js`
* `src/view.js`
* `renderItems(data)`

## 8. Criterios de aceptación mínimos del proyecto

### Criterios de código

La aplicación debió aprobar los siguientes test para considerarse como un buen proyecto a nivel estructural.

* npm run test:oas-html
* npm run test:oas-css
* npm run test:oas-web-api
* npm run test:oas-js
* npm run test:oas-prompting
* npm run test:oas

#### HTML

* **Uso de HTML semántico**

  - Tiene un `<header>` con `<h1>`
  - Tiene un `<footer>`
  - Tiene un `<main>` con `<h2>`
  - Todas las etiquetas de controles (inputs y select) tienen `<label>`
  - `<ul>` esta usado para dibujar la data
  - Los hijos de `<li>` usan atributos de microdata `itemscope` e `itemprop`

#### CSS

* **Uso de selectores de CSS**

  - Uso de selector class para los items `<li>`
  - Uso de flexbox en sentido `row` y `column`
  - Uso de flexbox para el elemento que contiene los items
  - Uso de flexbox para el elemento que contiene los UI inputs

#### Web APIs

* Uso de selectores del DOM
* Manejo de eventos del DOM (listeners, propagación, delegación)
* Manipulación dinámica del DOM

#### JavaScript

* Variables (declaración, asignación, ámbito)
* Uso de condicionales (if-else, switch, operador ternario, lógica booleana)
* Funciones (params, args, return)
* Arrays (arreglos)
* Objetos
* Módulos de ECMAScript (ES Modules)

## 9. Pruebas unitarias

A lo largo del proyecto implementamos 11 pruebas unitarias a los filtros de letalidad, reino y a los ordenamientos A-Z y género. Dentro de estas pruebas unitarias hicimos uso de diversos jest test typecSript:

    .ToBe
    .toHaveProperty
    .not.toContain
    .not.toHaveProperty
    .toHaveLength
    .toMatchObject
    .toEqual

Las pruebas dan al proyecto una cobertura del 70% de statements.

## 10. Desarrolladoras web

| [<img src="https://avatars.githubusercontent.com/u/144648301?v=4" width=115><br><sub>Daniela Posadas</sub>](https://github.com/DanielaPosadas) |  [<img src="https://avatars.githubusercontent.com/u/143117858?v=4" width=115><br><sub>Paulina Cabrera</sub>]([https://github.com/Paulinakbrr]) |
| :---: | :---: |