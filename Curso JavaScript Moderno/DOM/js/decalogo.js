
//class="card"
const card = document.querySelector('.card'); //solo seleciona la primera que encuentre
const card3 = document.querySelectorAll('.card') //todas las clases con ese nombre

//especificidad de css
//div class="premiun"
    // div clas="info"

const info = document.querySelector('.premiun .info');

//nth-child
//section 
    //div class = "hospedaje"
        //div class = "card"
        //div class = "card"

const card2 = document.querySelector('section.hospedaje .card:nth-child(2)');

document.getElementById //solo seleciona el id (el primero que encuentre)
document.getElementsByClassName //solo seleciona clases (el primero que encuentre)
document.querySelector //selecciona ambas

// .add añade una o mas clases
// .remove elimina clases
// childNodes seleciona los espacios en blanco
// children no seleciona esos espacios video 102 (revisar ese video completo otra vez)