class Player {
    constructor(x, y, width, height, ctx) {
      this.x = x;
      this.y = y;
      this.width = width;
      this.height = height;
      this.img = playerImg
      //this.color = color;
      this.ctx = ctx;
      this.speedY = 0;
      this.speedX = 0;

    }
    
  
    drawCanvas() {
       //this.ctx.fillStyle = 'red';
        //this.ctx.fillRect(this.x, this.y, this.width, this.height);
        this.ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
    }

    newPos(){
      this.y += this.speedY;
      this.x += this.speedX;
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

    crashWith(cats) {
      return !(
        this.bottom() < cats.top() ||
        this.top() >  cats.bottom() ||
        this.right() < cats.left() ||
        this.left() > cats.right()
      );
    }
  }

  