let coneHeight = 270; 
let coneRadius = 100; 
let scoopRadius = 100; 

function setup() {
  createCanvas(700, 700, WEBGL);
}

function draw() {
  background(223, 230, 500);
  
  rotateX(PI / 80); 
  
  fill (224,165,38); 
  cone(coneRadius, coneHeight);
  
 
  translate(0, -coneHeight / 3 - scoopRadius / 1, 0);
  fill(223,70,97); 
  sphere(scoopRadius);
}

