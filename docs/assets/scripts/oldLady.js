class OldLady{
    constructor (x, y, width, height, color, ctx, frames) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.color = color;
        this.speedOldLady = 1;
        this.ctx = ctx;
        this.img = new Image()
        this.img.src = "docs/assets/images/oldlady1.png"
    }

    drawCanvas() {
     /*    this.ctx.fillStyle = this.color
        this.ctx.fillRect(this.x, this.y, this.width, this.height); */
        this.ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
    }

    oldLadyMoves() {
        //this.game.frames++;
        this.y += this.speedOldLady

        if (this.y + this.width >= 550) {
            this.speedOldLady = -1
        } if (this.y <= 100) {
            this.speedOldLady = 1 
        }
    }
}