function setup() {
  createCanvas(600, 600);
  background(223, 230, 250);
  noLoop();
}

function draw() {
  let darkRed = color(171, 35, 40); 
  let lightPink = color(242, 172, 185); 
  
  for (let y = 50; y <= height; y += 100) {
    for (let x = 50; x <= width; x += 100) {
      if ((x + y) % 200 == 0) {
        drawGlowingHeart(x, y, darkRed);
      } else {
        drawGlowingHeart(x, y, lightPink);
      }
    }
  }
}

function drawGlowingHeart(x, y, col) {
  push();
  translate(x, y);
  noStroke();
  
  // Draw the glow effect with heart shapes
  for (let i = 10; i > 0; i--) {
    let alpha = map(i, 0, 10, 0, 50);
    fill(red(col), green(col), blue(col), alpha);
    drawHeartShape(0, 0, 0.8 + i * 0.08); 
  }
  
  fill(col);
  drawHeartShape(0, 0, 0.8); 
  pop();
}

function drawHeartShape(x, y, scale) {
  beginShape();
  vertex(x, y - 5 * scale); 
  bezierVertex(x + 6 * scale, y - 15 * scale, x + 20 * scale, y - 15 * scale, x + 20 * scale, y - 2.5 * scale);
  bezierVertex(x + 20 * scale, y + 7.5 * scale, x + 10 * scale, y + 17.5 * scale, x, y + 25 * scale);
  bezierVertex(x - 10 * scale, y + 17.5 * scale, x - 20 * scale, y + 7.5 * scale, x - 20 * scale, y - 2.5 * scale);
  bezierVertex(x - 20 * scale, y - 15 * scale, x - 6 * scale, y - 15 * scale, x, y - 7.5 * scale);
  endShape(CLOSE);
}


