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
    this.lives = 3;
    this.plantCount = 0;
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
      "docs/assets/images/plant9.png",
    ]
    this.gameOver = new Image();
    this.gameOver.src = 'docs/assets/images/gameover.png';
    this.win = new Image();
    this.win.src = 'docs/assets/images/youwin.jpeg';
    this.catSong = new Audio ('docs/assets/sounds/catscratching.wav')
    this.catSong.loop = false;
    this.plantSong = new Audio ('docs/assets/sounds/gettheplant.wav')
    this.plantSong.loop = false;
    this.winSong = new Audio ('docs/assets/sounds/winsong.wav')
    this.winSong.loop = false;
    this.loseSong = new Audio ('docs/assets/sounds/losesong.wav')
    this.loseSong.loop = false;
    this.seconds = 0;
  }


  clearCanvas() {
    this.ctx.clearRect(0, 0, 1080, 550)
  }

  updateCanvas = () => {
    this.clearCanvas();
    this.changeImages()
    this.oldLady.oldLadyMoves();
    this.oldLady.drawCanvas();
    this.player.drawCanvas();
    this.player.newPos();
    this.frames++
    this.updateCats();
    this.timer();
    this.updatePlants();
    this.checkPlants();
    this.drawCountPlants()
    this.drawLife();
    this.seconds = Math.floor(60 - (this.frames / 60))
    this.checkWin();
    this.checkGameOver();
  
    
    /* this.checkCats(); */
    //this.score;
  };

 /*  updateOldLady = () => {
    this.oldLady.oldLadyMoves();
  } */

  changeImages(){
    if(this.frames % 60 === 0){
      this.oldLady.img.src = "docs/assets/images/oldlady1.png"
    } else if(this.frames % 30 === 0){
      this.oldLady.img.src = "docs/assets/images/oldlady2.png"
    }
    
  }

  checkGameOver(){
    const crashed = this.cats.some((cat, index) => {
      if(this.player.crashWith(cat)){
        this.cats.splice(index, 1)
        this.catSong.play();
        if(this.plantCount > 0)
        {this.plantCount--}
      }
      return this.player.crashWith(cat)
    }); 
    if(crashed){
      this.lives--;
    } else if (this.lives === 0 || this.seconds <= 0) {
      this.ctx.drawImage(this.gameOver, 0, 0, this.width, this.height)
      this.stop();
      start1.classList.add('hidden');
      restart1.classList.remove('hidden');
      this.loseSong.play();
    }
    
  }

  checkPlants(){
    const crashed = this.plants.some((plants, index) => {
      if(this.player.crashWith(plants)){
        this.plants.splice(index, 1)
        this.plantSong.play();
      }
      return this.player.crashWith(plants);
    });
    if(crashed){
      this.lives++;
      this.plantCount++;
    }
  }
  
  start() {
    this.intervalId = setInterval(this.updateCanvas, 1000 / 60);
    this.gameRunning = true;
    this.oldLady = new OldLady (1000, 250, 50, 60, 'yellow', ctx, this.seconds)
    this.player = new Player (50, 250, 50, 50, ctx)
  
    //this.intervalOldLady = setInterval(this.updateOldLady, 1000);
  }

  checkWin() {
    if(this.lives >= 8) {
      this.ctx.drawImage(this.win, 0, 0, this.width, this.height)
      this.stop();
      start1.classList.add('hidden');
      restart1.classList.remove('hidden');
      this.winSong.play();
    }
  }

  stop(){
    this.gameRunning = false;
    clearInterval(this.intervalId)
    this.player = null;
    this.oldLady = null;
    this.cats = [];
    this.plants = []
    this.frames = 0;
    this.lives = 3;
    this.score = 0;
    
  }

  updateCats() {
    if (this.frames % 130 === 0){
     let randomImg = this.catImgs[Math.floor(Math.random() * this.catImgs.length)]
      this.cats.push(new Cats (this.oldLady.x, this.oldLady.y, 45, 40, randomImg, ctx) )
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
      this.plants.push(new Plants (this.x, this.y, 65, 85, randomImg, ctx) )
    } 
    for (let i = 0; i < this.plants.length; i++){
      this.plants[i].drawCanvas()
    }
  }

  timer() {
      this.ctx.font = "18px monospace";
      this.ctx.fillStyle = "black";
  /*     this.ctx.fillText(`Timer: ${this.count.toFixed(2)[0]}${this.count.toFixed(2)[1]}:${this.count.toFixed(2)[3]}${this.count.toFixed(2)[4]}`, 450, 50);
      }; */
      //Draw the clock image

        this.ctx.drawImage(this.timerDraw, 425, 13, 105, 45)
        this.ctx.fillText(`00:${this.seconds}`, 454, 40);

      };

      drawLife(){
       
          for(let i= 0; i < this.lives; i++){
            this.ctx.drawImage(this.fullHeart, 30 + 30*i, 20, 30, 30)
          }
      }

      drawCountPlants(){
          let plantIcon = new Image();
          plantIcon.src = 'docs/assets/images/planticon.png'
          this.ctx.drawImage(plantIcon, 940, 15, 35, 35)
          this.ctx.font = "25px monospace";
          this.ctx.fillStyle = "black";
          this.ctx.fillText(`${this.plantCount}`, 980, 45)

    }
  }