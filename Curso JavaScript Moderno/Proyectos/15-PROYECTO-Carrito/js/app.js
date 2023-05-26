//Variables
const carrito = document.querySelector('#carrito');
      contenedorCarrito = document.querySelector('#lista-carrito tbody');
      vaciarCarritoBtn = document.querySelector('#vaciar-carrito');
      listaCursos = document.querySelector('#lista-cursos');

let articulosCarrito = [];
      


cargarEventListeners();
function cargarEventListeners() {
    //Cuando precionas el boton 'Agregar al Carrito"
    listaCursos.addEventListener('click', agregarCurso);

    //Elimina cursos del carrito
    carrito.addEventListener('click', eliminarCurso);

    //Vaciar el Carrito
    vaciarCarritoBtn.addEventListener('click', () => {
        articulosCarrito = []; //reseteando el carrito

        limpiarHTML(); //Eliminamos todo el HTML
    });
}



//Funciones
function agregarCurso(e) {
    e.preventDefault();

    if(e.target.classList.contains('agregar-carrito')) {
        const cursoSelecionado = e.target.parentElement.parentElement;
        leerDatosCurso(cursoSelecionado);
        
    }
    
}
//Elimina un curso del carrito
function eliminarCurso(e) {
    if(e.target.classList.contains('borrar-curso')){
        const cursoId = e.target.getAttribute('data-id');

        //Elimina del arreglo de articuloCarrito por el data-id
        articulosCarrito = articulosCarrito.filter(curso => curso.id !== cursoId);

        carritoHTML(); //Iterar sobre el carrito y mostrar su HTML
    }
}

//Lee contenido del HTML y extrae informacion del curso
function leerDatosCurso(curso) {
    console.log(curso);

    //Crear un objeto con el contenido actual
    const infoCurso = {
        imagen: curso.querySelector('img').src,
        titulo: curso.querySelector('h4').textContent,
        precio: curso.querySelector('.precio span').textContent,
        id: curso.querySelector('a').getAttribute('data-id'),
        cantidad: 1  
    }

    //Revisa si un elemento ya existe en el carrio
    const existe = articulosCarrito.some (curso => curso.id === infoCurso.id);
    if(existe) 
    {
        //actualizamos la cantidad
        const cursos = articulosCarrito.map(curso => 
            {
                if(curso.id === infoCurso.id) 
                {
                    curso.cantidad++;
                    return curso; //retorna el objeto actualizado
                } 
                else 
                {
                    return curso; //retorna los objetos que no son los duplicados
                }
            });
            articulosCarrito = [...cursos];
    } 
    else 
    {
        //Agregar elementos al arreglo del carrito
        articulosCarrito = [...articulosCarrito, infoCurso];    
    }



    
    console.log(articulosCarrito);

    carritoHTML();
}

//Mostrar el carrito de compras en el HTML
function carritoHTML() {

    //Limpiar HTML
    limpiarHTML();

    //Recorre el carrito y general el HTML
    articulosCarrito.forEach(curso => {
        const {imagen, titulo, precio, cantidad, id} = curso;
        const row = document.createElement('tr');
        row.innerHTML = `
            <td><img src="${imagen}" width = "100"></td>
            <td>${titulo}</td>
            <td>${precio}</td>
            <td>${cantidad}</td>
            <td><a href="#" class="borrar-curso" data-id="${id}">X</a></td>
        `;

        //Agregar HTML del carrito al tbody
        contenedorCarrito.appendChild(row);
    });
}

//Elimina los cursos de tbody
function limpiarHTML() {
    //forma lenta
    //contenedorCarrito.innerHTML = '';

    while(contenedorCarrito.firstChild) {
        contenedorCarrito.removeChild(contenedorCarrito.firstChild)
    }
}

