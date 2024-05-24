let img;

// Load the image.
function preload() {
  img = loadImage('flower.jpg');
}

function setup() {
  createCanvas(735, 727);

  // Display the image.
  image(img, 0, 0);

  // Apply the INVERT filter.
  filter(INVERT);
  
}