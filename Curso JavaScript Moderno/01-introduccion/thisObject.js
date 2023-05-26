const album = "X",
      price = 22;



const cd = {
    artist: "Eminem",
    album: "8 Mile",
    songs: 7,
    price: "25 USD",
    format: "disk", 
    showInfo: function () {
        console.log(`El Precio del album ${this.album} es: ${this.price}`);
    }   

};

cd.showInfo();
 // sin usar this = El Precio del album X es: 22
 // usando this = El Precio del album 8 Mile es: 25 USD
