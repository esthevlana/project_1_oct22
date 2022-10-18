/** @type {HTMLCanvasElement} */

const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

window.onload = () => {
    document.getElementById('start-button').onclick = () => {
      startGame();
    };
  };


function startGame() {
  const oldLady = new OldLady (1000, 250, 50, 50, 'yellow', ctx)
  const player = new Player (50, 250, 50, 50, 'red', ctx)

let game = new Game (ctx, 1080, 550, player, oldLady);

game.start()

window.addEventListener("keydown", (e) => {
    switch (e.code) {
      case "ArrowUp":
        if(player.y > 100) {
          player.y -= 20;
        }
        break;
      case "ArrowDown":
        if(player.y < 487) {
          player.y += 20;
        }
        break;
      case "ArrowLeft":
        if(player.x > 10) {
          player.x -= 20;
        }
        break;
      case "ArrowRight":
        if(player.x < 450) {
          player.x += 20;
        }
        break;
    }});

    document.addEventListener("keyup", (e) => {
      player.speedX = 0;
      player.speedY = 0;
    });
}


  