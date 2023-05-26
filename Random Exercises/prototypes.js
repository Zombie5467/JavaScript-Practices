
function Pear( color, weight) {
    this.color = color;
    this.weight = weight;
}

Pear.prototype = {
    eat: function(){return "eat the pear";},
    throw: function(){ return "trow the pear away"}
};

var pear1 = new Pear("green", 12);
var pear2 = new Pear("gold", 14);