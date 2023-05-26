//encontrar en cual indice esta el mes

const meses = ["Enero", "Febrero", "Marzo", "Abril", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre",]

const index = meses.findIndex( mes => mes === "Abril");
console.log(index);