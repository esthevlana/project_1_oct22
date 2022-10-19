class Game {
  constructor(ctx, width, height) {
    this.ctx = ctx;
    this.width = width;
    this.height = height;
    this.player = null;
    this.oldLady = null;
    this.intervalId = null;
    this.plants = [];
    this.cats = [];
    this.gameRunning = false;
    this.frames = 0;
    this.lives = 5;
    this.score = 0;
    //this.count;
    this.fullHeart = new Image();
    this.fullHeart.src = "docs/assets/images/fullheart.png";
    this.halfHeart = new Image();
    this.halfHeart.src = "docs/assets/images/halfheart.png";
    this.timerDraw = new Image();
    this.timerDraw.src = "docs/assets/images/timerdraw.png"
    this.catImgs = [
      "docs/assets/images/cat1.png",
      "docs/assets/images/cat2.png",
      "docs/assets/images/cat3.png",
      "docs/assets/images/cat4.png",
    ]
    this.plantImgs = [
      "docs/assets/images/plant1.png",
      "docs/assets/images/plant2.png",
      "docs/assets/images/plant3.png",
      "docs/assets/images/plant4.png",
      "docs/assets/images/plant6.png",
      "docs/assets/images/plant7.png",
      "docs/assets/images/plant8.png",
    ]
   
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
    this.updatePlants();
    this.drawLife();
    this.checkGameOver();
    this.checkPlants();
    /* this.checkCats(); */
    //this.score;
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
    }); 
    if(crashed){
      this.lives--;
    } else if (this.lives === 0) {
      this.stop();
      start1.classList.add('hidden');
      restart1.classList.remove('hidden');
    }
  }

  checkPlants(){
    const crashed = this.plants.some((plants, index) => {
      if(this.player.crashWith(plants)){
        this.plants.splice(index, 1)
      }
      return this.player.crashWith(plants);
    });
    if(crashed){
      this.lives++;
    }
  }

  
  

  start() {
    this.intervalId = setInterval(this.updateCanvas, 1000 / 60);
    this.gameRunning = true;
    this.oldLady = new OldLady (1000, 250, 50, 50, 'yellow', ctx)
    this.player = new Player (50, 250, 50, 50, 'red', ctx)
  
    //this.intervalOldLady = setInterval(this.updateOldLady, 1000);
  }

  stop(){
    this.gameRunning = false;
    clearInterval(this.intervalId)
    this.player = null;
    this.oldLady = null;
    this.cats = [];
    this.plants = []
    this.frames = 0;
    this.lives = 5;
    this.score = 0;
    
  }

  updateCats() {
    if (this.frames % 120 === 0){
     let randomImg = this.catImgs[Math.floor(Math.random() * this.catImgs.length)]
      this.cats.push(new Cats (this.oldLady.x, this.oldLady.y, 35, 30, randomImg, ctx) )
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
    if (this.frames % 200 === 0){
      let randomImg = this.plantImgs[Math.floor(Math.random() * this.plantImgs.length)]
      this.plants.push(new Plants (this.x, this.y, 45, 60, randomImg, ctx) )
    } 
    for (let i = 0; i < this.plants.length; i++){
      this.plants[i].drawCanvas()
    }
  }

  timer() {
      this.ctx.font = "18px monospace";
      this.ctx.fillStyle = "black";
      let seconds = Math.floor(60 - (this.frames / 60))
      if (seconds <= 0) this.stop()

  /*     this.ctx.fillText(`Timer: ${this.count.toFixed(2)[0]}${this.count.toFixed(2)[1]}:${this.count.toFixed(2)[3]}${this.count.toFixed(2)[4]}`, 450, 50);
      }; */
      //Draw the clock image

      if(seconds === 0) {
      this.ctx.drawImage(this.timerDraw, 425, 13, 105, 45)
      this.ctx.fillText(`00:${seconds}0`, 454, 40);
      } else if (seconds < 10 && seconds > 0) {
        this.ctx.drawImage(this.timerDraw, 425, 13, 105, 45)
        this.ctx.fillText(`00:0${seconds}`, 454, 40);
      } else {
        this.ctx.drawImage(this.timerDraw, 425, 13, 105, 45)
        this.ctx.fillText(`00:${seconds}`, 454, 40);
      }

      };

      drawLife(){
       
          for(let i= 0; i < this.lives; i++){
            this.ctx.drawImage(this.fullHeart, 30 + 30*i, 20, 30, 30)
          }


      }
  }