let batman;
let batarangs;
let bombs;
let score;
let bombCount;
let bgImg, batmanImg, batarangImg, bombImg;
let batarangSound, obstacleSound, gameOverSound;
let gameState = 'lobby';  

function preload() {
  bgImg = loadImage('background.jpg');
  batmanImg = loadImage('main icon.png');
  batarangImg = loadImage('batarangs.png');
  bombImg = loadImage('bomb.png');
  batarangSound = loadSound('batarangSound.wav');
  obstacleSound = loadSound('obstacleSound.wav');
  gameOverSound = loadSound('gameOverSound.mp3');
}

function setup() {
  createCanvas(600, 400);
  batman = new Batman();
  batarangs = [];
  bombs = [];
  score = 0;
  bombCount = 0;
  frameRate(60);
}

function draw() {
  if (gameState === 'lobby') {
    showLobby();
  } else if (gameState === 'playing') {
    playGame();
  } else if (gameState === 'gameOver') {
    showGameOver();
  }
}

function showLobby() {
  background(bgImg);
  fill(255);
  textSize(32);
  textAlign(CENTER);
  text('Start', width / 2, height / 2);
}

function playGame() {
  background(bgImg);
  batman.show();
  batman.update();

  if (frameCount % 60 === 0) {
    batarangs.push(new Batarang());
  }

  if (frameCount % 120 === 0) {
    bombs.push(new Bomb());
  }

  for (let i = batarangs.length - 1; i >= 0; i--) {
    batarangs[i].fall();
    batarangs[i].show();
    if (batarangs[i].hits(batman)) {
      score++;
      batarangSound.play();
      batarangs.splice(i, 1);
    } else if (batarangs[i].offScreen()) {
      batarangs.splice(i, 1);
    }
  }

  for (let i = bombs.length - 1; i >= 0; i--) {
    bombs[i].fall();
    bombs[i].show();
    if (bombs[i].hits(batman)) {
      bombCount++;
      obstacleSound.play();
      bombs.splice(i, 1);
      if (bombCount >= 5) {
        gameState = 'gameOver';
        gameOverSound.play();
      }
    } else if (bombs[i].offScreen()) {
      bombs.splice(i, 1);
    }
  }

  fill(255);
  textSize(18);
  text('Bombs: ' + bombCount, 45, height - 40);

  text('Score: ' + score, 40, height - 20);
}

function showGameOver() {
  background(bgImg);
  fill(255, 0, 0);
  textSize(64);
  textAlign(CENTER);
  text('Game Over', width / 2, height / 2);
  textSize(32);
  text('Click to Restart', width / 2, height / 2 + 50);
}

function mousePressed() {
  if (gameState === 'lobby' || gameState === 'gameOver') {
    resetGame();
    gameState = 'playing';
  }
}

function keyPressed() {
  if (keyCode === LEFT_ARROW) {
    batman.setDir(-1);
  } else if (keyCode === RIGHT_ARROW) {
    batman.setDir(1);
  }
}

function keyReleased() {
  if (keyCode === LEFT_ARROW || keyCode === RIGHT_ARROW) {
    batman.setDir(0);
  }
}

function resetGame() {
  batman = new Batman();
  batarangs = [];
  bombs = [];
  score = 0;
  bombCount = 0;
  loop();
}

class Batman {
  constructor() {
    this.x = width / 2;
    this.y = height - 100;
    this.width = 150;
    this.height = 100;
    this.xdir = 0;
  }

  show() {
    image(batmanImg, this.x, this.y, this.width, this.height);
  }

  setDir(dir) {
    this.xdir = dir;
  }

  update() {
    this.x += this.xdir * 5;
    this.x = constrain(this.x, 0, width - this.width);
  }
}

class Batarang {
  constructor() {
    this.x = random(width);
    this.y = 0;
    this.size = 100;
    this.speed = 3;
  }

  fall() {
    this.y += this.speed;
  }

  show() {
    image(batarangImg, this.x, this.y, this.size, this.size);
  }

  hits(batman) {
    let d = dist(this.x, this.y, batman.x + batman.width / 2, batman.y + batman.height / 2);
    return d < this.size / 2 + batman.width / 2;
  }

  offScreen() {
    return this.y > height;
  }
}

class Bomb {
  constructor() {
    this.x = random(width);
    this.y = 0;
    this.size = 40;
    this.speed = 3;
  }

  fall() {
    this.y += this.speed;
  }

  show() {
    image(bombImg, this.x, this.y, this.size, this.size);
  }

  hits(batman) {
    let d = dist(this.x, this.y, batman.x + batman.width / 2, batman.y + batman.height / 2);
    return d < this.size / 2 + batman.width / 2;
  }

  offScreen() {
    return this.y > height;
  }
}

