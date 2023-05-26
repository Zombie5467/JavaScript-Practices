//for of intera sobre arreglos

const pendientes = ["maquetacion", "animacion", "responsive", "javascript"];

for(let pendiente of pendientes) {
    console.log(pendiente);
}



const paises = [
    {pais:"Canadá", capital:"Otawwa"},
    {pais:"El Salvador", capital:"San Salvador"},
    {pais:"Guatemala", capital:"Ciudad de Guatemala"},
    {pais:"Argentina", capital:"Buenos Aires"},
    {pais:"República Dominicana", capital:"Santo Domingo."},
    {pais:"Perú", capital:"Lima"},
]


for (let list of paises) {
    //console.table(list);
    //console.log(list.capital);
}

// For in intera sobre objetos

const car = {
    modelo: "demon",
    año: "2023",
    motor: "H.E.M.I."
}

for (let propiedad in car) {
    console.log(`${car[propiedad]}`);
}


//Otra forma con for of
for (let [llave, valor] of Object.entries(car)) {
    console.log(llave,valor);
} 
