const cd = {
    artist: "that poppy",
    album: "I disagree",
    songs: 9

};

const vinyl = {
    price: "25 USD",
    format: "disk"

};

var shoppingCart = Object.assign(cd, vinyl);

var shoppingCart2 = {...cd, ...vinyl}      // Spread Operator o Rest Operator una forma mas corta / moderna


console.log(shoppingCart);
console.log(shoppingCart2);

