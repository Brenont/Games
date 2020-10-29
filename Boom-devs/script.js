function createBalloon() {
  var bola = document.createElement("img");
  bola.setAttribute("src", "./assets/Baloon.png");
  bola.setAttribute("class", "balloon");

  var positionX = Math.floor(Math.random() * 90);
  var positionY = Math.floor(Math.random() * 80);

  bola.style.left = `${positionX}vw`;
  bola.style.top = `${positionY}vh`;

  bola.addEventListener("click", (event) => boomBalloon(event));

  document.querySelector(".balloons-container").appendChild(bola);
}

function boomBalloon(event) {
  const element = event.target;
  var audio = new Audio("./assets/estourar.mpeg");
  audio.play();

  element.remove();
}

const buttonInitGame = document.querySelector(".btn-init-game");
buttonInitGame.addEventListener("click", initGame);

function initGame() {
  setInterval(createBalloon, 1500);
  buttonInitGame.remove();
}
