
var square = document.createElement('div');

square.style.cssText = "width: 200px; height:100px; background:yellow;";

square.onclick = function () {alert('helo');};

var orange = document.getElementById('divHtml')

document.body.insertBefore(square, orange);