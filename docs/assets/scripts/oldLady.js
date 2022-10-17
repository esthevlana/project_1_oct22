class OldLady{
    constructor (x, y, width, height, color, ctx) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.color = color;
        this.speedOldLady = 0;
        this.ctx = ctx;
    }

    /*moveUp() {
        this.y -= 1;
    }*/

    drawCanvas() {
        this.ctx.fillStyle = this.color
        this.ctx.fillRect(this.x, this.y, this.width, this.height);
    }

    /*moveDown(){
        this.y += 1;
    }*/

    oldLadyMoves() {
        //this.game.frames++;
        let minY = 200;
        let maxY = 550;
        let yPosition = Math.floor(Math.random() * (maxY - minY) + minY);
        this.y = yPosition;
        if (yPosition > 500) {
            this.y = false
        } if (yPosition < 30) {
            this.y = false
        }
      }
}