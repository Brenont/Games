function addBola(){
    var bola = document.createElement("img");
    bola.setAttribute("src", "Baloon.png");
    bola.setAttribute("class", "baloon");

    var p1 = Math.floor(Math.random() * 93);
    var p2 = Math.floor(Math.random() * 83);
    bola.setAttribute("style", "left:"+p1+"vw;top:"+p2+"vh;");
    bola.setAttribute("onclick", "estourar(this)");

    document.body.appendChild(bola);
}
function estourar(elemento){
    document.body.removeChild(elemento);
    var audio = new Audio("estourar.mpeg");
    audio.play();
}
function iniciar(button){
    setInterval(addBola, 1500);
    document.getElementById("div-button").removeChild(button);
}