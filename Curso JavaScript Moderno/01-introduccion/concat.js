

const meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo" ],
      meses2 = ["Junio", "Julio", "Agosto", "Septiembre", "Octubre"],
      meses3 = ["Noviembre", "Dicembre"];



// usando concat      

const result = meses.concat(meses2, meses3, 'agregar string');



// usando spread operator, este guarda una copia de los arreglos en result2
// agregar stringsin los puntos porque entonces crea un index por cada letra

const result2 = [...meses, ...meses2, ...meses3, 'agregar string']; 



console.log(result,result2);
//console.table(result);
//console.table(result2);


//NOTA PERSONAL: como sustituir push por spread opeartor en el video 93

