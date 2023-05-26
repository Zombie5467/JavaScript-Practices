museum = ["Pinturas","Estatuas","Escultura","Arte rupestre"];

console.table(museum);



meses = ["enero", "febrero", "marzo", "abril", "mayo", "junio", "julio"]


for (i=0; i < meses.length; i++) {
    console.table(meses[i]);
}




//usar push para agregar a un arreglo

carrito = [];

const cd = {
    artist: "Eminem",
    album: "8 Mile",
    songs: 7,
    price: "25 USD",
    format: "digital"   

};

const vinyl = {
    artist: "The Nearly Deads",
    album: "Freak machine",
    songs: 6,
    price: "18 USD",
    format: "disk"   
    
};

 const bundle = {
     artist: "Fit for Rivals",
     album: "Novocaine",
     songs: 10,
     price: "23 USD",
     format: "digital"   
    
 };

//  const bundle = {
//      movie: "Gato con botas",
//      productora: "Dreamworks",
//      año: 2023,
//      price: "3.6 USD",
//      format: "disk"   
    
//  };

carrito.push(cd);
carrito.unshift(vinyl);
//carrito.push(bundle);
//carrito.pop(bundle);

console.table(carrito);


//unshift para agregar al comienzo del arreglo
//shift   para eliminar al comienzo del arreglo
//pop     para eliminar al final del arreglo
//push    para agregar al final del arreglo

//NOTA PERSONAL: revisar forma imperativa video 51
//NOTA PERSONAL: parseInt() = funcion, .toString() = metodo
//NOTA PERSONAL: los objetos son con llaves {} y los arreglos con corchetes []
