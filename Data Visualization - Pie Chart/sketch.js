let angles = [90, 45, 60, 90, 75]; 
let colors = ['#ffcc99', '#ff9999', '#99ffcc', '#cc99ff', '#ffcccc']; 
let animals = ['🐱', '🐶', '🐼', '🐰', '🐻']; 

function setup() {
  createCanvas(500, 500);
  background(223, 230, 250);
  noStroke();
  let total = angles.reduce((acc, val) => acc + val, 0);
  let lastAngle = 0; 
  for (let i = 0; i < angles.length; i++) {

    fill(colors[i]);
    arc(width / 2, height / 2, 300, 300, lastAngle, lastAngle + radians(angles[i]));

    drawCuteAnimal(width / 2, height / 2, 150, lastAngle + radians(angles[i] / 2), animals[i]);

    lastAngle += radians(angles[i]);
  }
}

function drawCuteAnimal(x, y, radius, angle, animal) {

  let xPos = x + cos(angle) * radius * 0.7;
  let yPos = y + sin(angle) * radius * 0.7;


  textSize(30);
  textAlign(CENTER, CENTER);
  fill(0);
  text(animal, xPos, yPos);
}
