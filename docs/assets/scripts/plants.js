class Plants {
    constructor(x, y, width, height, color, ctx){
        this.x = Math.floor(Math.random() * 500) - 50;
        this.y = Math.floor(Math.random() * (canvas.height - 60) + 60);
        this.width = width;
        this.height = height;
        this.color = color;
        this.ctx = ctx; 
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
        this.ctx.fillStyle = this.color;
        this.ctx.fillRect(this.x, this.y, this.width, this.height);
     }

}