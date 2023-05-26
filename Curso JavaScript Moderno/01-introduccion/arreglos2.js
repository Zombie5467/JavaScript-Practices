

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




//Destructuring en arreglos, video 53
const numeros = [10, 20, 30, 40, 50];

const [ primero, ,tercero ] = numeros;

console.log(primero, tercero);




//Destructuring en arreglos guardando valores en otro arreglo, video 54
const numeros2 = [10, 20, 30, 40, 50];

const [ primero2, ...tercero2 ] = numeros2;

console.log(tercero2);