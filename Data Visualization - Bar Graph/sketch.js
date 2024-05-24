let data = [35, 70, 95, 45, 55]; 
let colors = ['#FFD3B6', '#FFAAA5', '#FF8B94', '#FF7070', '#FF88CC']; 

function setup() {
  createCanvas(600, 600);
  textAlign(CENTER, CENTER);
  textSize(16);
  noLoop(); 
}

function draw() {
  background(223, 230, 250);
  let barWidth = width / data.length;
  
  for (let i = 0; i < data.length; i++) {
    let x = i * barWidth;
    let barHeight = map(data[i], 0, 100, 0, height - 50);
    let y = height - barHeight;
    fill(colors[i]);
    rect(x, y, barWidth - 10, barHeight, 20);
    
    fill(0);
    text(data[i], x + barWidth / 2, y - 10);
  }
}

