const producto = [
    {nombre: "monitor", precio: 26},
    {nombre: "teclado", precio: 12},
    {nombre: "mouse", precio: 6},
    {nombre: "ups", precio: 32},
    {nombre: "procesador", precio: 43},
    {nombre: "placa madre", precio: 18},
    {nombre: "audifonos", precio: 12},
]


producto.forEach( function (producto) //puedo darle el nombre que quiera

    {

        console.log(`El producto ${producto.nombre} tiene un precio de ${producto.precio} USD`)

    }

);

// la diferencia entre map y forEach es que map crea un arreglo y forEach no 
// a veces necesitamos este arreglo, depende de la situacion