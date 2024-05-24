let song;
let fft;

function preload() {
  song = loadSound('bp-sh.mp3');
}

function setup() {
  createCanvas(600, 600);
  
  fft = new p5.FFT();
  
  song.play();
}

function draw() {
  background(0);
  
  let spectrum = fft.analyze();
  
  // Add glow effect
  drawingContext.shadowBlur = 20;
  drawingContext.shadowColor = color(255, 105, 180);
  
  noStroke();
  for (let i = 0; i < spectrum.length; i += 5) { // Use a step to reduce the number of hearts
    let x = map(i, 0, spectrum.length, 0, width);
    let h = map(spectrum[i], 0, 100, 0, height / 2); // Scale height to avoid overlapping
    let pink = color(255, 105, 180); 
    let alpha = map(spectrum[i], 0, 255, 50, 255); 
    
    fill(red(pink), green(pink), blue(pink), alpha); 
    drawHeart(x, height - h, 20, 20);
  }
}

function drawHeart(x, y, w, h) {
  beginShape();
  vertex(x, y + h / 4);
  bezierVertex(x, y, x - w / 2, y, x - w / 2, y + h / 4);
  bezierVertex(x - w / 2, y + h / 2, x, y + h, x, y + h);
  bezierVertex(x, y + h, x + w / 2, y + h / 2, x + w / 2, y + h / 4);
  bezierVertex(x + w / 2, y, x, y, x, y + h / 4);
  endShape(CLOSE);
}
