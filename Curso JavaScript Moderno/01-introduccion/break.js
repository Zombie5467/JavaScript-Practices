//encuentra el numero usando break


for (let i = 0; i<=15; i++) {
    if (i === 7) {
        console.log(`Lucky number ${i}`);
        break;
    }
}


//encuentra el descuento en el arreglo

const shopCart = [
    {article:'tvUHD 65 Inches', price: 920},        
    {article:'Samsung dishwasher', price: 640},    
    {article:'LG Stove', price: 400, discount: true},
    {article:'Whirlpool dryer', price: 1225},
    {article:'Samsung fridge', price: 600},
    {article:'Microwave', price: 225},
]

for (let i = 0; i < shopCart.length; i++) {
    if (shopCart[i].discount) {
        console.log(`${shopCart[i].article} have a discount`)
        continue;
    }
    
}

console.table(shopCart);