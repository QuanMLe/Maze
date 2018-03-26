var img
function setup() { 
  createCanvas(500, 500);
  frameRate(60);
}

function draw() {
  background(0);
  fill(255);
  rect(0,0,500,25);
  console.log(get(mouseX, mouseY));
}



