// videos desde el 89 en adelante

const shopCart = [
    {article:'tvUHD 65 Inches', price: 920},        
    {article:'Samsung dishwasher', price: 640},    
    {article:'LG Stove', price: 400, discount: true},
    {article:'Whirlpool dryer', price: 1225},
    {article:'Samsung fridge', price: 600},
    {article:'Microwave', price: 225},
]

let result;

//result = shopCart.filter( product => product.price < 400);
result = shopCart.filter(product => product.article !== 'Samsung dishwasher')

console.log(result);



result2 = shopCart.find(product2 => product2.price === 1225)

console.log(result2);



result3 = shopCart.every(product3 => product3.price === 3000) //resultado = false, porque todos deben ser igual a 3000

console.log(result3);

result4 = shopCart.some(product4 => product4.price === 640) //resultado = true, porque al menos uno es igual a 640

console.log(result4);