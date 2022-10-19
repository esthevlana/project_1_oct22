class Plants {
    constructor(x, y, width, height, plantImgs, ctx){
        this.x = Math.floor(Math.random() * 500);
        this.y = Math.floor(Math.random() * (canvas.height - 60) + 100);
        this.width = width;
        this.height = height;
        //this.color = color;
        this.ctx = ctx; 
        this.img = new Image();
        this.img.src = plantImgs;
    }

    top() {
        return this.y;
      }
      left() {
        return this.x;
      }
      bottom() {
        return this.y + this.height;
      }
      right() {
        return this.x + this.width;
      }

      drawCanvas() {
        this.ctx.drawImage(this.img, this.x, this.y, this.width, this.height)
        //this.ctx.fillStyle = this.color;
        //this.ctx.fillRect(this.x, this.y, this.width, this.height);
     }

}