const cambiarTitulo = () => {
  console.log('dentro de la funcion cambiar titulo');
  //Buscar un elemento del html
  //let tituloH1 = document.getElementById('titulo')
  let tituloH1 = document.querySelector('#titulo');
  console.log(tituloH1.innerHTML);

  tituloH1.innerHTML = 'Titulo modificado';
  tituloH1.className = 'text-warning';
};

const verMas = () => {
  console.log('dentro de ver mas');

  //Obtener el elemento padre
  let contenedorPadre = document.querySelector('#contenedorPadre');
  let btnVerMas = document.getElementById('btnVerMas');

  if (btnVerMas.innerHTML === 'Ver más') {
    //opcion 1 - camino largo
    //1- crear el elemento del html

    // let parrafo = document.createElement('p') // crea la etiqueta <p></p>
    //2-  agregar contenido al elemento html creado

    /* parrafo.innerHTML = `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quisquam
    numquam alias nam perferendis dolorem, neque esse itaque.
    Repudiandae sit, neque porro iure laudantium doloribus? Totam quis,
    sed voluptas doloremque, ullam quisquam facere labore maiores illo,
    accusantium non. Enim, perspiciatis! Sequi assumenda est ipsam
    laboriosam consectetur ipsum qui deleniti et adipisci?`

    parrafo.className = 'lead' */

    //3- Insertar el elemento html en el DOM 
    contenedorPadre.appendChild(parrafo);

    //Opcion 2 - camino corto
    




  } else {
    
  }
};
