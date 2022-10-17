class Cats {
    constructor (width, height, color, ctx, game) {
        this.game = game;
        this.x = this.game.width - this.game.oldLady.width;
        this.y = this.y = game.newoldLady.y;
        this.width = width;
        this.height = height;
        this.color = color;
        this.ctx = ctx;
        this.cats = cats;
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