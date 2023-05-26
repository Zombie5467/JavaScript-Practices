//Funciones dentro de un objeto

const player = {
    
    play: function (id) {
        console.log(`playing the song ${id}`)
    },

    pause: function (id) {
        console.log(`the player is pause`);
    },

    next: function (id) {
        console.log(`now playing ${id}`);
    },

    back: function (id) {
        console.log(`back to the song ${id}`);
    },

    createPlaylist: function (name) {
        console.log(`the playlist ${name} has been created`);
    },

    playPlaylist: function (name) {
        console.log(`playing the playlist: ${name}`);
    }

};


player.play('Till I collapse'); //el parenthesis es el id
player.pause('Till I collapse');
player.next('Voice mail');
player.back('Till I collapse');
player.createPlaylist('Heavy Metal');
player.playPlaylist("My 90's top");