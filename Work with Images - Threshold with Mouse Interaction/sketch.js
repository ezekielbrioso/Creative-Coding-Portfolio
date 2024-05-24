let img;
let thresholdValue = 127; 

function preload() {
  img = loadImage('book.jpg');
}

function setup() {
  createCanvas(736, 736);
}

function draw() {
  background(255);
  image(img, 0, 0);

  let adjustedThreshold = map(mouseY, 0, height, 0, 255);
  loadPixels();
  for (let i = 0; i < pixels.length; i += 4) {
    let average = (pixels[i] + pixels[i + 1] + pixels[i + 2]) / 3;
    let output = average > adjustedThreshold ? 255 : 0;
    pixels[i] = output;
    pixels[i + 1] = output;
    pixels[i + 2] = output;
  }
  updatePixels();
}
