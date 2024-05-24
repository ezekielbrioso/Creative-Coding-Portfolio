let img;
let levels = 3; 

function preload() {
  img = loadImage('tea and flower.jpg');
}

function setup() {
  createCanvas(720, 720);
}

function draw() {
  background(255);

  image(img, 0, 0);


  let adjustedLevels = int(map(mouseX, 0, width, 2, 10)); 
  
  filter(POSTERIZE, adjustedLevels);
}
