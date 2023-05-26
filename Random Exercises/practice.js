// object
let sampleObject = {color:"string", number:23}


var car = {
    color: "red",
    brand: "dodge",
    model: {
        weight: "230lb",
        type: "challenger",
        sticker: "Demon",

        fuel: [{pistons: 4},{fuel: "2 types"}], 

    },

    drive: function() {return "drive";}
};

console.log(car.model.type);


//array
var sampleArray = ["string", 13, "other string"];



var shoppings = [
    "string",
    10,
    {meal1:"fruit", meal2:"juice", meal3:"meat"},
    ["kfc", "national", "jumbo"],
    function(){return "shopping";}
];

let a = 10;
//.unshift(string, number, arreglo, funcion, objeto) inserta en el arreglo
//.shift(valor) elimina el primer elemento del array
//.pop(valor) elimina el ultimo elemendo del array y lo devuelve
//.push(string, number, arreglo, funcion, objeto) pone elementos al final del arreglo
//.splice (0, 0) para borrar elementos en un lugar especifico del arreglo, el primer 0 es desde donde comienza a contar, 0 - 1 - 2 etc, el segundo 0 es igual pero comienza desde el 1 (video 52)

//https://www.udemy.com/course/javascript-essentials/learn/lecture/7167614#overview
//clase 18


function runExpression() {
    var a = 10;

    function adding() {
        return a + 100;
    }

    return adding;
}

function Apple (x, y, color, score) {
    this.x = x;
    this.y = y;
    this.color = color;
    this.score = score;

}
var apple1 = new Apple (10, 20, "red", 23);
var apple2 = new Apple (12, 22, "yellow", 25);
var apple3 = new Apple (14, 24, "gold", 28);

// otra forma de hacer la funcion de constructor:

// class Apple {
//     constructor(x, y, color, score) {
//         this.x = x;
//         this.y = y;
//         this.color = color;
//         this.score = score;

//     }
// }
// var apple1 = new Apple (10, 20, "red", 23);
// var apple2 = new Apple (12, 22, "yellow", 25);
// var apple3 = new Apple (14, 24, "gold", 28);
