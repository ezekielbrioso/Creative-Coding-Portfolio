function setup() {
  createCanvas(600, 600);
  background(223, 230, 250)
}


function draw() {
  let r = map(mouseX, 0, width, 255, 200);
  let g = map(mouseY, 0, height, 100, 0);
  let b = map(mouseX + mouseY, 0, width + height, 100, 255);
  
  stroke(0);
  strokeWeight(0.2);
  
  let ellipseSize = 40; 
  fill(r, g, b, 50);
  ellipse(mouseX, mouseY, ellipseSize, ellipseSize);
}