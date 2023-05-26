// numeros multiplos de 3 deben mostrar Fizz
// numeros multiplos de 5 deben mostrar Buzz
// numeros multiplos de 3 y 5 deben mostrar FizzBuzz!



for (let i = 1; i<=100; i++) {
    if (i % 15 === 0) {
        console.log(`${i} FizzBuzz!`)
    } else if (i % 5 === 0) {
        console.log(`${i} Buzz`)
    } else if (i % 3 === 0) {
        console.log(`${i} Fizz`)
    }
}

//hacer el ejercicios de numeros pares e impares con while

//Hecho en el archivo 2app.js