const encabezado = document.querySelector('.encabezado h2').textContent;
console.log(encabezado);

//console.log(encabezado.textContent); 

//console.log(encabezado.innerText); //si usamos invisibility hidden en css no lo encontrara (revisar hoja de estilos)

//console.log(encabezado.innerHTML); //trae el html



//cambiando el texto
const encabezado2 = document.querySelector('.encabezado h2').textContent = 'NUEVO TEXTO';
console.log(encabezado2);





//cambiando propiedades del css con .style

// background-color = backgroundColor
// se sustitulle el guion por camelcase

const paragraph = document.querySelector('.encabezado p');

paragraph.style.backgroundColor = 'white'




//add and remove
const encabezado3 = document.querySelector('.encabezado');
console.log(encabezado3);

encabezado3.classList.add('new--class', 'second--class', 'third--class', 'replace');
encabezado3.classList.remove('third--class');
//encabezado3.classList.replace('replace'); //no se como funciona




//Practica con childNodes y children

// la diferencia es que con childNodes los saltos de lineas se consideran objetos, ejemplo:
// si tenemos un arreglo y usamos childNodes los saltos de lineas tendran un indice


const navBar = document.querySelector('.navBar');

console.log(navBar.children);
//console.log(navBar.childNodes);



//Traversing The DOM
//La idea es abrirse paso por todo el dom hasta llegar al elemento que queremos
//Se explica bien en el video 102, tambien se explica parentElement y nextElementSibling

const card = document.querySelector('.card');

console.log(card.children[0]); //muestra la imagen

//console.log(card.children[1]); //muestra el div de info

//console.log(card.children[1].children); //muestra lo que tenemos dentro del div de info

//console.log(card.children[1].children[2]); //muestra el texto del p en el index 2 (con el html)

console.log(card.children[1].children[2].textContent); //muestra el texto del p en el index 2

card.children[1].children[2].textContent = 'EL NUEVO PRECIO DE LA KATANA' //modifica el texto del p en el index 2

//card.children[0].src='The Handle of a Katana Sword with Details.jpg' //cambia la imagen



// Eliminar elementos del DOM


// Eliminar en si Mismo
const elemento7 = document.querySelector('a');
//elemento7.remove();


// Eliminar desde el padre
const elemento6 = document.querySelector('.navBar');

console.log(elemento6.children); //para saber el indice del elemento que quiero eliminar

elemento6.removeChild(elemento6.children[5]);//el indice que quiero eliminar es el 5

//elemento6.children[5].remove(); //otra forma que yo descrubri


