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
  //let cats = new Cats (20, 20, ctx, 'purple') 

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

/*window.onload = () => {
    document.getElementById('start-button').onclick = () => {
      startGame();
    };
  
    function startGame() {
      let game = new Game();
      game.start();
    }
  };*/


/*let x = canvas.width / 20;
let y = canvas.height - 305;

let dx = 1;
let dy = -1;

const widthRec = 50;

function drawRect() {
ctx.beginPath();
ctx.rect(x, y, widthRec, 50);
ctx.fillStyle = "#FF0000";
ctx.fill();
ctx.closePath();
}
setInterval(draw, 10);



function draw(){
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawRect();

    if(x + dx > canvas.width-widthRec || x + dx < widthRec) {
        dx = -dx;
    }
    if(y + dy > canvas.height-widthRec || y + dy < widthRec) {
        dy = -dy;
    }

    x += dx;
    y += dy;
}

ctx.beginPath();
ctx.rect(1000, 250, 50, 50);
ctx.fillStyle = "yellow";
ctx.fill();
ctx.closePath();*/


  