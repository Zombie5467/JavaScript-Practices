// Variables
const resultado = document.querySelector('#resultado');

// Funciones
function mostrarAutos() {
  autos.forEach((auto) => {
    const autoHTML = document.createElement('p');
    autoHTML.textContent = `${auto.marca}`;
    // Insertar en HTML
    resultado.appendChild(autoHTML);
  });
}

// Eventos, esta código estaba puesto ANTES que Funciones
document.addEventListener('DOMContentLoaded', () => {
  mostrarAutos();
});
