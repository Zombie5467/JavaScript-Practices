
const carrito = [],
      carrito2 = [];


const producto = {
        articulo: "monitor",
        precio: 200
      },

      producto2 = {
        articulo: "celular",
        precio: 400
      },

      producto3 = {
        articulo: "pantalon",
        precio: 80
      },

      producto4 = {
        articulo: "tenis",
        precio: 40
      };


// Forma imperactiva
carrito.push(producto);
carrito.push(producto2);

console.table(carrito);



// Forma declarativa
let resultado
resultado = [...carrito2, producto3, producto4]

console.table(resultado);


// NOTA PERSONAL: no modifica el array original, sino que crea una copia