let colors = ['#ff007f', '#00ff7f', '#7f00ff']; 
let lights = []; 
let pulseSpeed = 0.05; 
let neonTexts = ["Welcome to", "Metaverse Age Training Institute"]; 
let currentTextIndex = 0; 
let glowStrength = 15; 
let bgBrightness = 3; 
let lastMouseX, lastMouseY; 

let font;
let soundFile;
let amplitude;

function preload() {
  font = loadFont('ethnocentric rg.otf');
  soundFile = loadSound('lofibgm.mpeg'); 
}

function setup() {
  createCanvas(800, 400);
  colorMode(HSB, 360, 100, 100, 100);
  textFont(font);
  textAlign(CENTER, CENTER);
  textSize(22); 
  
  amplitude = new p5.Amplitude();

  
  for (let x = 0; x < width; x += 40) {
    for (let y = 0; y < height; y += 40) {
      let size = random(5, 20);  
      let speed = random(1, 3);  
      let color = random(colors);  
      let direction = random(TWO_PI);  
      lights.push(new NeonLight(x, y, size, speed, color, direction));  
    }
  }

   
  neonText = neonTexts[currentTextIndex];

  
  soundFile.loop();
}

function draw() {
  
  let level = amplitude.getLevel();
  let glowColor = color(332, 58, 91, 100);
  
  glowStrength = map(level, 0, 1, 15, 100);
  bgBrightness = map(level, 0, 2, 10, 500);

   
  background(0, bgBrightness);  

   
  for (let light of lights) {
    light.update();
    light.display();
  }

   
  let textColor;
  if (mouseIsPressed) { 
    glowColor = color(255, 50, 50); 
     
    for (let light of lights) {
      light.color = random(colors);
    }
  }
  textNeon(neonText, width / 2, height / 2, glowColor); 
}
function mouseMoved() {

  for (let light of lights) {
    light.color = color(random(360), 100, 100);
  }
}


function keyPressed() {
  
    if (key === 'r' || key === 'R') {
    neonText = 'Bath Spa University'; 
  }
}

class NeonLight {
  constructor(x, y, size, speed, color, direction) {
    this.x = x; 
    this.y = y; 
    this.size = size; 
    this.speed = speed; 
    this.color = color; 
    this.direction = direction; 
    this.initialSize = size; 
  }

  
  update() {
    
    this.x += cos(this.direction) * this.speed;
    this.y += sin(this.direction) * this.speed;

    
    if (this.x < 0 || this.x > width) {
      this.direction = PI - this.direction;
    }
    if (this.y < 0 || this.y > height) {
      this.direction = -this.direction;
    }

    
    this.size = this.initialSize + sin(frameCount * pulseSpeed) * 5;
  }

  display() {
    noStroke();
    fill(red(this.color), green(this.color), blue(this.color), 100);
    // Draw the light as a heart shape
    beginShape();
    vertex(this.x, this.y + this.size / 2);
    bezierVertex(this.x, this.y - this.size / 2, this.x + this.size / 2, this.y - this.size / 2, this.x, this.y + this.size / 2);
    bezierVertex(this.x - this.size / 2, this.y - this.size / 2, this.x, this.y - this.size / 2, this.x, this.y + this.size / 2);
    endShape(CLOSE);
  }
}

function textNeon(glowText, x, y, glowColor) {
  glow(glowColor, glowStrength);
  text(glowText, x + cos(frameCount * 0.1) * 5, y + sin(frameCount * 0.1) * 5);
  text(glowText, x + cos(frameCount * 0.1 + PI) * 5, y + sin(frameCount * 0.1 + PI) * 5);
  text(glowText, x, y);
  text(glowText, x, y);
  text(glowText, x, y);
  glow(glowColor, glowStrength / 2 + sin(frameCount * 0.05) * 10); 
  text(glowText, x, y);
  text(glowText, x, y);
  glow(glowColor, glowStrength / 3 + sin(frameCount * 0.05) * 5); 
  text(glowText, x, y);
  text(glowText, x, y);
  text(glowText, x, y);
}


function glow(glowColor, blurriness) {
  drawingContext.shadowBlur = blurriness;
  drawingContext.shadowColor = glowColor;
}


setInterval(function() {
  currentTextIndex = (currentTextIndex + 1) % 2; 
  neonText = neonTexts[currentTextIndex]; 
}, 1500); 




