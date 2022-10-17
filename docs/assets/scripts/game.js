class Game {
  constructor(ctx, width, height, player, oldLady) {
   this.ctx = ctx;
   this.width = width;
    this.height = height;
    this.player = player;
    this.oldLady = oldLady;
    this.intervalId = null;
    this.intervalOldLady = null;
    this.cats = [];
    this.frames = 0;
  }

  clearCanvas() {
    this.ctx.clearRect(0, 0, 1080, 550)
  }

  updateCanvas = () => {
    this.clearCanvas();
    this.oldLady.drawCanvas();
    this.player.drawCanvas();
    this.player.newPos();
    //this.cats.drawCanvas();
  };

  updateOldLady = () => {
    this.oldLady.oldLadyMoves();
  }

  start() {
    this.intervalId = setInterval(this.updateCanvas, 1000 / 60);
    this.intervalOldLady = setInterval(this.updateOldLady, 1000);
  }

}