//Objetos dentro de objetos


const productoObjeto = {
    nombre: "Monitor 20 Pulgadas",
    precio:300,
    disponible: true,
    infromacion: {

        medidas: {
            peso: "1kg",
            medida: "1m"
        },

        fabricacion: {
            pais: "China"
        }
    }
}

console.log(productoObjeto.infromacion.fabricacion.pais);