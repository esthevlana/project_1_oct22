/** @type {HTMLCanvasElement} */

const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');


const start1 = document.getElementById('start');
const restart1 = document.getElementById('restart');


let game = null;

window.onload = () => {
    start1.onclick = () => {

      startGame();
  }
    restart1.onclick = () => {
      startGame();
  }
}



  /*function resetGame() {
    clearInterval(game.intervalId);
    game.ctx.clearRect(0, 0, game.width, game.height);
    game = new Game();
  }*/

function startGame() {
  if(!game){
    game = new Game (ctx, 1080, 550)
    game.start()
  }
  if(game && !game.gameRunning){
    game.start()
  }
  

window.addEventListener("keydown", (e) => {
    switch (e.code) {
      case "ArrowUp":
        if(game.player.y > 100) {
          game.player.y -= 20;
        }
        break;
      case "ArrowDown":
        if(game.player.y < 487) {
          game.player.y += 20;
        }
        break;
      case "ArrowLeft":
        if(game.player.x > 10) {
          game.player.x -= 20;
        }
        break;
      case "ArrowRight":
        if(game.player.x < 450) {
          game.player.x += 20;
        }
        break;
    }});

    document.addEventListener("keyup", (e) => {
      game.player.speedX = 0;
      game.player.speedY = 0;
    });
  }