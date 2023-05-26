// si el codigo dentro de la funcion tiene una sola linea, no necesita llaves {}, tambien se da implicito el return

const player2 = {

    play:  (id) => `playing the song ${id}`,
    pause: (id) => `the player is pause`, //se declara el id pero no se usa
    next:  (id) => `now playing ${id}`,
    back:  (id) => `back to the song ${id}`,
    createPlaylist: (name2) => `the playlist has been created`, //se declara el id pero no se usa
    playPlaylist: (name2) => `playing the playlist ${name2}` 
};

console.log(player2.play('Tell me Baby')); //el parenthesis es el id
console.log(player2.pause());
console.log(player2.next('he yo'));
console.log(player2.back('Till I collapse'));
console.log(player2.createPlaylist('popular pop'));
console.log(player2.playPlaylist("Love my 80's"));




//pasar parametros a una funcion normal
const aprendiendo = function(tecnologia) {
    console.log(`aprendiendo ${tecnologia}`);
}

aprendiendo('JavaScript');



//pasar parametros a una arrow function
const aprendiendo2 = tech => `Becoming a ${tech}` //si solo pasamos un parametro, no necesitamos parenthesis

console.log(aprendiendo2('Full Stack Developer'));