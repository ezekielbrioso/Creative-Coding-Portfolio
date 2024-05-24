let img;

// Load the image.
function preload() {
  img = loadImage('cars.jpg');
}

function setup() {
  createCanvas(700, 700);

  // Display the image.
  image(img, 0, 0);

  // Apply the POSTERIZE filter.
  filter(POSTERIZE, 3);
  
}