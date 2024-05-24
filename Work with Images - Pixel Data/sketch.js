var img, x, y;
function preload(){
  img = loadImage ('sea.jpg')
}


function setup() {
  createCanvas(650, 650);
  background(0);
}

function draw() {
  background(220);
  x = mouseX ;
  y = mouseY ;
  image(img,0,0);
  var c = get(x,y);
  fill(c);
  ellipse(x,y,100,100);
}