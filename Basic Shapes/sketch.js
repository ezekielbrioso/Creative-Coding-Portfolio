function setup() {
  createCanvas(400, 400);
  background(223, 230, 250); 
}

function draw() {
  panda(width/2, height/2); 
}

function panda(x, y) { 
  
  fill(0);
  ellipse(x - 50, y - 50, 50, 60);
  ellipse(x + 50, y - 50, 50, 60);

  fill(255);
  noStroke();
  ellipse(x, y, 150, 150);

  fill(0);
  ellipse(x - 25, y - 20, 40, 60);
  ellipse(x + 30, y - 20, 40, 60);

  fill(255);
  ellipse(x + 30, y - 20, 10, 10);
  ellipse(x - 25, y - 20, 10, 10);

  fill(0);
  ellipse(x, y + 15, 30, 10);

  noFill();
  stroke(0);
  strokeWeight(2);
  beginShape();
  vertex(x - 10, y + 35); 
  quadraticVertex(x - 5, y + 40, x, y + 35); 
  quadraticVertex(x + 5, y + 40, x + 10, y + 35); 
  endShape();
}
