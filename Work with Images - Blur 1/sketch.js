let img;

// Load the image.
function preload() {
  img = loadImage('duck.jpg');
}

function setup() {
  createCanvas(736, 736);

  // Display the image.
  image(img, 0, 0);

  // Apply the BLUR filter.
  filter(BLUR, 3);
}