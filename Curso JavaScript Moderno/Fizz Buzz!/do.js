let i = 1;

do {
    
    if (i % 15 === 0) {

        console.log(`${i} FizzBuzz!`)

    } else if (i % 5 === 0) {

        console.log(`${i} Buzz`)

    } else if (i % 3 === 0) {

        console.log(`${i} Fizz`)
    } else {console.log(i)}

    i++;
} while (i <= 100);

//do while funciona de la siguiente manera: se hace al menos una iteracion