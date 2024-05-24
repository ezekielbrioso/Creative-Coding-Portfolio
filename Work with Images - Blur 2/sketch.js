let img;

// Load the image.
function preload() {
  img = loadImage('cherryblossom.jpg');
}

function setup() {
  createCanvas(735, 718);

  // Display the image.
  image(img, 0, 0);

  // Apply the BLUR filter.
  filter(BLUR, 3);
}