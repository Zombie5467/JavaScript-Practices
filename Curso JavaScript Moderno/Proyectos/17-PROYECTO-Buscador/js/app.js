// Variables
const resultado = document.querySelector('#resultado');
const year = document.querySelector('#year');
const max = new Date().getFullYear();
const min = max - 10;

// Funciones
function mostrarAutos() {
  autos.forEach((auto) => {
    const { marca, modelo, year, puertas, transmision, precio, color } = auto;
    const autoHTML = document.createElement('p');
    autoHTML.textContent = `${marca} ${modelo} - ${year} - ${puertas} Puertas - Transmisión: ${transmision}`;
    // Insertar en HTML
    resultado.appendChild(autoHTML);
  });
}

// Llena las opciones de años
function llenarSelect() {
	for (let i = max; i > min; i--) {
    const option = document.createElement('option');
    option.value = i;
    option.textContent = i;
    year.appendChild(option);
  }
}

// Eventos, esta código estaba puesto ANTES que Funciones
document.addEventListener('DOMContentLoaded', () => {
  mostrarAutos(); /* Muestra los autos al cargar */
  llenarSelect(); /* Llena las opciones de años */
});
