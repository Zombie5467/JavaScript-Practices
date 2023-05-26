objeto1 = {
    pais: "Rep Dom",
    ciudad: "Santo Domingo",
    gente: "Dominicano",
    youtube: "PlanetaJuan"
}

//Agregar nuevas propiedades al objeto
objeto1.comida = "La Bandera";

//Borrar propiedades al objeto
delete objeto1.youtube;

//console.log(objeto1);






//crear variable y asignar valor del objeto

// const lugar = objeto1.ciudad;
// console.log(lugar);


// crear variable de forma mas corta: Destructuring
// noExiste = undefined porque no esta definida o no ha sido creada

const {pais, ciudad, comida, noExiste} = objeto1;
console.log(pais, ciudad, comida, noExiste); 