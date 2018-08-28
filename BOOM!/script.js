function addBola(){
    var bola = document.createElement("img");
    bola.setAttribute("src", "Baloon.png");
    bola.setAttribute("class", "bola")

    var p1 = Math.floor(Math.random() * 1300);
    var p2 = Math.floor(Math.random() * 500);
    bola.setAttribute("style", "left:"+p1+"px;top:"+p2+"px;");
    bola.setAttribute("onclick", "estourar(this)");

    document.body.appendChild(bola);
}
function estourar(elemento){
    document.body.removeChild(elemento);
    var audio = new Audio("estourar.mpeg");
    audio.play();
}
function iniciar(){
    setInterval(addBola, 1500)
}