document.getElementById('hello').innerText += " from Js document";

var pClass = document.getElementById('pClass');
//solo funciona con los id, no con las clases

pClass.innerText = " tex from a js sheet";
pClass.innerText += " and using variables";




var pClass2 = document.getElementById('pClass2');

pClass2.innerHTML += '<span> new world order</span>';



var pClass3 = document.getElementById('pClass3');

pClass3.outerHTML = '<h2 id="pClass3"> using outHTML for change p for h2</h2>';
//tomar en cuenta, usar '' porque tenemos un id que usa "" y eso podria escapar las comillas del codigo


var styleJsVar = document.getElementById('styleJs');

styleJsVar.style.background="yellow";
styleJsVar.style.width="200px";
styleJsVar.style.color="black";


var styleJsVar2 = document.getElementById('styleJs2');

styleJsVar2.style.cssText = "background:purple; width:200px;";
styleJsVar2.style.cssText += "height:100px;";
// no olvidar el += para que no sobre escriba el estilo que ya tiene