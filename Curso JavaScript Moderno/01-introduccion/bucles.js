//revisar desde el video 72 para otros bucles 
//repasar el video 78 !!!
// for of, foreach y map 83 y 84

// usando el operador && para hacer 2 comparaciones a la vez, se deben cumplir las dos condiciones


const user = true,
      card = false;

      if (user && card) {
        console.log('payment approve')
      } else if (!user && card) {
        console.log('wrong user')
      } else if (user && !card) {
        console.log('insufficient funds')
      } else if (!user && !user) {
        console.log('wrong user and debit card')
      };



// operador or ||, se debe cumplir al menos una de las condiciones

const cash = 600,
      credit = 1000,
      totalPay = 1800;

   
       if (cash > totalPay || credit > totalPay) {
         console.log('payment approved')
       } else {
         console.log('you can\'t pay the price')
       }