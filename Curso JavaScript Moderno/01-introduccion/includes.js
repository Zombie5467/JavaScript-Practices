//some funciona en un arreglo de indices tanto como en uno de objetos, includes solo en indices.


//encontrar si tenemos el valor que buscamos en el arreglo
//usando includes

const meses = ["Enero", "Febrero", "Marzo", "Abril", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre",]

const resultado = meses.includes('Enero')
console.log(resultado);






// usando some


const paises = [
    {pais:"Canadá", capital:"Otawwa"},
    {pais:"El Salvador", capital:"San Salvador"},
    {pais:"Guatemala", capital:"Ciudad de Guatemala"},
    {pais:"Argentina", capital:"Buenos Aires"},
    {pais:"República Dominicana", capital:"Santo Domingo."},
    {pais:"Perú", capital:"Lima"},
]

// si el codigo dentro de la funcion tiene una sola linea, no necesita llaves {}, tambien se da implicito el return
//video 86
const existe = paises.some(lugar => lugar.pais === "Republica Dominicana"); //resultado = false, porque esta no tiene acento
console.log(existe);