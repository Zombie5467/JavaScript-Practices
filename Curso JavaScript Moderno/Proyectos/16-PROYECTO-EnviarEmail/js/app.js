//Variables
const btnEnviar = document.querySelector('#enviar');
const btnReset = document.querySelector('#resetBtn');
const formulario = document.querySelector('#enviar-mail');



//variables para campos
 const email = document.querySelector('#email');
       asunto = document.querySelector('#asunto');
       mensaje = document.querySelector('#mensaje');

       const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

eventListeners();
function eventListeners() {
    //Cuando la app arranca
    document.addEventListener('DOMContentLoaded', iniciarApp);


    //Campos del formulario
     email.addEventListener('blur', validarFormulario);
     asunto.addEventListener('blur', validarFormulario);
     mensaje.addEventListener('blur', validarFormulario);

     //Reinicia el formulario
     btnReset.addEventListener('click', reseteaFormulario);
     
     //Enviar email
     formulario.addEventListener('submit', enviarEmail);
}

//Funciones

function iniciarApp() {
    btnEnviar.disabled = true;
    btnEnviar.classList.add('cursor-not-allowed', 'opacity-50') 
}


//valida el formulario
function validarFormulario(e) {



    if(e.target.value.length > 0) {

        
        // Elimina los errores
        const error = document.querySelector('p.error');
            if(error) {
                error.remove(); 
            }


        e.target.classList.remove('border', 'border-red-500');
        e.target.classList.add('border', 'border-green-500');
    }else{
        e.target.classList.remove('border', 'green-green-500');
        e.target.classList.add('border', 'border-red-500');
        mostrarError('Todos los campos son Obligatorios');
    }

    if(e.target.type === 'email') {
        

        if(re.test(e.target.value)) {
            const error = document.querySelector('p.error');
            if(error) {
                error.remove();
            }

            e.target.classList.remove('border', 'border-red-500');
            e.target.classList.add('border', 'border-green-500');
        } else {
            e.target.classList.remove('border', 'border-green-500');
            e.target.classList.add('border', 'border-red-500');

            mostrarError('El Email no es Valido');
        }
    }

    if(re.test(email.value) && asunto.value !== '' && mensaje.value !== '') {
        btnEnviar.disabled = false;
        btnEnviar.classList.remove('cursor-not-allowed', 'opacity-50');
    } 
}

function mostrarError(mensaje) {
    const mensajeError = document.createElement('p');

    mensajeError.textContent = mensaje; 
    mensajeError.classList.add('border', 'border-red-500', 'background-red-100', 'text-red-500', 'p-3', 'mt-5', 'text-center', 'error');

    const errores = document.querySelectorAll('.error');
    if(errores.length === 0) {

        formulario.appendChild(mensajeError);
    }
} 

// Enviar el email

function enviarEmail(e) {
    e.preventDefault();

    // Mostrar el spiner
    const spinner = document.querySelector('#spinner');
    spinner.style.display = 'flex';

    //Luego de 3 segundos ocultar spiner y mostrar mensaje
    setTimeout(() => {
        spinner.style.display = 'none';

        //Mensaje: se envio correctamente
        const parrafo = document.createElement('p');
              parrafo.textContent = 'Mensaje enviado correctamente';
              parrafo.classList.add('text-center', 'my-10','p-2', 'bg-green-500', 'text-white', 'font-bold');

        //Inserta el mensaje antes del spiner
        formulario.insertBefore(parrafo, spinner);

        setTimeout(() => {
            parrafo.remove();

            reseteaFormulario(); 
        }, 5000);

    }, 3000);
}

//cada 1 segundo = 1000

//Resetea el formulario
function reseteaFormulario() {
    formulario.reset();

    iniciarApp();
}