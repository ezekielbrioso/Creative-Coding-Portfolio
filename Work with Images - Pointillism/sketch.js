var img, x, y;

function preload() {
  img = loadImage('rose.jpg');
}

function setup() {
  createCanvas(700, 700);
  background(0);
  noStroke();
  frameRate(90); 
}

function draw() {
  for (var i = 0; i < 10; i++) { 
    x = random(width);
    y = random(height);
    var c = img.get(x, y);
    fill(c[0], c[1], c[2], 200);
    ellipse(x, y, 5, 5);
  }
}
