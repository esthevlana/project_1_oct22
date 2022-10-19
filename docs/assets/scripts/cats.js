class Cats {
    constructor (x, y, width, height, catImg, ctx) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.ctx = ctx;
        this.img = new Image();
        this.img.src = catImg
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
        //this.img.src="docs/assets/images/cat1.png";
        this.ctx.drawImage(this.img, this.x, this.y, this.width, this.height)
       /*  this.ctx.fillStyle = this.color;
        this.ctx.fillRect(this.x, this.y, this.width, this.height); */
    }

      /*drawCanvas() {
        this.img.src="docs/assets/images/cat2.png";
        this.ctx.drawCanvas(this.x, this.y, this.width, this.height, this.ctx)
        //this.ctx.fillStyle = this.color;
        //this.ctx.fillRect(this.x, this.y, this.width, this.height);
    }

      drawCanvas() {
        this.img.src="docs/assets/images/cat3.png";
        this.ctx.drawCanvas(this.x, this.y, this.width, this.height, this.ctx)
        //this.ctx.fillStyle = this.color;
        //this.ctx.fillRect(this.x, this.y, this.width, this.height);
    }

     drawCanvas() {
        this.img.src="docs/assets/images/cat4.png";
        this.ctx.drawCanvas(this.x, this.y, this.width, this.height, this.ctx)
        //this.ctx.fillStyle = this.color;
        //this.ctx.fillRect(this.x, this.y, this.width, this.height);
    }*/
}