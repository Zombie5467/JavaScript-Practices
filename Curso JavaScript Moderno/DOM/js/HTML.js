//referencia video 104


//crear un enalce
const newEnlace = document.createElement('a');

newEnlace.textContent = 'Nuevo enlace';
newEnlace.href = '#'
//console.log(newEnlace);

//agregando al nav bar
const navBar2 = document.querySelector('.navBar');
//navBar2.appendChild(newEnlace);

//agregando al nav bar con before
const navBar3 = document.querySelector('.navBar');
console.log(navBar3.children); //para saber el index que quiero, en mi caso: [2]
navBar3.insertBefore(newEnlace, navBar3.children[2]);

//agregar un evento click
newEnlace.onclick = miFuncion;

function miFuncion() {
    alert('you clicked');
}



//---------------------------------------------------



//creando otro card

//creando los parrafos
const paragraph1 = document.createElement('p');
paragraph1.textContent = 'La hisotira de la Katana';
paragraph1.classList.add('card__p');

const paragraph2 = document.createElement('p');
paragraph2.textContent = 'Tipos de Katanas';
paragraph2.classList.add('card__p');

const paragraph3 = document.createElement('p');
paragraph3.textContent = 'Precios de las Katana';
paragraph3.classList.add('card__p');

//creando la imagen
const picture = document.createElement('img');
picture.classList.add('card__img');
picture.src = 'img/katana2.jpg';
picture.alt = '';

//creando el div info
const info = document.createElement('div');
info.classList.add('card__info');
info.appendChild(paragraph1);
info.appendChild(paragraph2)
info.appendChild(paragraph3)

//creando el div card
const newDiv = document.createElement('div');                   
newDiv.classList.add('card');
newDiv.appendChild(picture);
newDiv.appendChild(info);


/*

//console.log(paragraph1);
//console.log(paragraph2);
//console.log(paragraph3);
//console.log(info);
//console.log(picture);
//console.log(newDiv);

*/



//para hacerlo con before
const containerNewDiv = document.querySelector('.container__newDiv');

console.log(containerNewDiv.children[0]); //para buscar el index que quiero, en este caso [0]

containerNewDiv.insertBefore(newDiv, containerNewDiv.children[0]);



/* 

//para hacerlo con document body
//document.body.appendChild(newDiv); 

//para hacerlo con appendchild
//containerNewDiv.appendChild(newDiv);

*/




//practica con el footer

const alertButton = document.querySelector('.alert__button');
const alertContainer = document.querySelector('.alert__container')

alertButton.addEventListener('click', showHideAlert);

function showHideAlert () {
    if(alertContainer.classList.contains('activo')) {
        alertContainer.classList.remove('activo');
        this.classList.add('alert__red')
        this.textContent = 'Close Message'
    }else {
        alertContainer.classList.add('activo');
        this.classList.remove('alert__red')
        this.textContent = 'Click to Show'
    }
}

/*
si no recuerdas por que use this.
revisa el video 105

La razon es que le estoy diciendo al codigo que estoy usando
alertButton
*/