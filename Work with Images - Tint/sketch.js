var img;
function preload() {
  
  img = loadImage("drink.jpg");
}
function setup () {
  createCanvas (350,700);
  background(0);
}

function draw() {
  
  background(0);
  
  tint('purple');
  
  image(img, 0, 0, img.width/2, img.height/2);
  
  noTint(0);
  
  image(img, 0, img.height/2, img.width/2, img.height/2);
}