class Game {
  constructor(ctx, width, height, player, oldLady) {
   this.ctx = ctx;
   this.width = width;
    this.height = height;
    this.player = player;
    this.oldLady = oldLady;
    this.intervalId = null;
    this.intervalOldLady = null;
    this.plants = [];
    this.cats = [];
    this.frames = 0;
    this.lives = 10;
    this.score = 0;
    //this.count;
    this.fullHeart = new Image();
    this.fullHeart.src = "docs/assets/images/fullheart.png";
    this.halfHeart = new Image();
    this.halfHeart.src = "docs/assets/images/halfheart.png";
   
  }


  clearCanvas() {
    this.ctx.clearRect(0, 0, 1080, 550)
  }

  updateCanvas = () => {
    this.clearCanvas();
    this.oldLady.oldLadyMoves();
    this.oldLady.drawCanvas();
    this.player.drawCanvas();
    this.player.newPos();
    this.frames++
    this.updateCats();
    this.timer();
    this.checkGameOver();
    this.updatePlants();
    this.drawLife()
    this.checkPlants()
  };

 /*  updateOldLady = () => {
    this.oldLady.oldLadyMoves();
  } */

  checkGameOver(){
    const crashed = this.cats.some((cat, index) => {
      if(this.player.crashWith(cat)){
        this.cats.splice(index, 1)
      }
      return this.player.crashWith(cat)
    })
  }

  checkPlants(){
    const crashed = this.plants.some((plants, index) => {
      if(this.player.crashWith(plants)){
        this.plants.splice(index, 1)
      }
      return this.player.crashWith(plants);
    });
    if(crashed){
      this.score++;
    }
  }

    if(crashed){
    this.lives--
  }

  start() {
    this.intervalId = setInterval(this.updateCanvas, 1000 / 60);
    //this.intervalOldLady = setInterval(this.updateOldLady, 1000);
  }

  stop(){
    clearInterval(this.intervalId)
    
  }

  updateCats() {
    if (this.frames % 200 === 0){
      this.cats.push(new Cats (this.oldLady.x, this.oldLady.y, 20, 20, 'purple', ctx) )
    } 
    for (let i = 0; i < this.cats.length; i++){
      this.cats[i].x -= 1
      //Follow the player
      if(this.cats[i].y < this.player.y){
        this.cats[i].y += 1
      } else {
        this.cats[i].y -= 1
      }
      this.cats[i].drawCanvas()
    }
  }

  updatePlants() {
    if (this.frames % 150 === 0){
      this.plants.push(new Plants (this.x, this.y, 15, 15, 'blue', ctx) )
    } 
    for (let i = 0; i < this.plants.length; i++){
      this.plants[i].drawCanvas()
    }
  }

  timer() {
      this.ctx.font = "20px monospace";
      this.ctx.fillStyle = "white";
      let seconds = Math.floor(60 - (this.frames / 60))
      if (seconds <= 0) this.stop()

  /*     this.ctx.fillText(`Timer: ${this.count.toFixed(2)[0]}${this.count.toFixed(2)[1]}:${this.count.toFixed(2)[3]}${this.count.toFixed(2)[4]}`, 450, 50);
      }; */
      //Draw the clock image
      //this.ctx.drawImage(imagemDomRelogio)
      this.ctx.fillText(`Timer: 00:${seconds}`, 450, 50);

      };

      /*drawHearts1(){
        ctx.drawImage(this.heart1, 100, 100, 80, 20);
      }
    
      drawHearts2(){
        ctx.drawImage(this.heart2, 100, 100, 80, 20);
      }
    
      drawHearts3(){
        ctx.drawImage(this.heart3, 100, 100, 80, 20);
      }*/

      drawLife(){
        if(this.lives % 2 === 0){
          for(let i= 0; i < this.lives/2; i++){
            this.ctx.drawImage(this.fullHeart, 30 + 30*i, 20, 30, 30)
          }

        } else {
          let i;
          for(i= 0; i < (this.lives - 1)/2; i++){
            this.ctx.drawImage(this.fullHeart, 30 + 30*i, 20, 30, 30)
  
          }
          this.ctx.drawImage(this.halfHeart, 30 + 30*i, 20, 25, 25)

        }

      }
  }