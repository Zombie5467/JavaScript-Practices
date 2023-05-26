const number1 = 10,
      number2 = 5;

      let resultado;

//suma
resultado = number1 + number2;

//resta
resultado = number1 - number2;

//multiplicacion
resultado = number2 * number2;

//division
resultado = number1 / number2;

//residuo
resultado = number1 % number2;


// console.log(resultado);






//metodo para redondear
resultado1 = Math.round(2.5);
resultado2 = Math.round(2.8);
resultado3 = Math.round(2.1);

// Redondear siempre hacia abajo
resultado4 = Math.ceil(3.1);

// Redondear siempre hacia arriba
resultado5 = Math.floor(3.9);

// Raiz cuadrada (sqrt = square root)
resultado6 = Math.sqrt(144);


// console.log(resultado1,resultado2,resultado3,resultado4,resultado5,resultado6);






//regla de las operaciones matematicas: (primero se hacen las operaciones en parentencis, luego las demas)


const resultado7 = (30 + 30 + 30) *.2, //aplicando el 20% a un carrito de compras
      resultado8 = (100 + 20) *1.16;   //agregando el 16% de impuestos a un carrito de compras

// console.log(resultado7);
// console.log(resultado8);





//int = numero entero
//float = flotante o fraccion

const number3 = "20",
      number4 = "20.2",
      number5 = "uno",
      number6 = 20.2;

console.log(Number.parseInt(number3));    // = 20 porque lo convierte a numero
console.log(Number.parseFloat(number4)); //  = 20.2 porque lo convierte a flotante
console.log(Number.parseInt(number5));  //   = NaN porque no es un numero, es texto

console.log(Number.isInteger(number5));  //  = False porque no es un numero, es texto
console.log(Number.isInteger(number6)); //   = False porque no es entero
