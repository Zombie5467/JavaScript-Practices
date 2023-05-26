// cuando usamos return, hay que decirle a la funcion una variable donde van a guardar ese valor

let total = 0;

function shopCart(price) {
    return total += price;
}

 function impTotal(total) {
    return total*1.15;
 }


    
total = shopCart(300);
total = shopCart(300);
total = shopCart(600);

const payTotal = impTotal(total);

console.log(total)
console.log(`el Monto total a pagar es ${payTotal}`);
