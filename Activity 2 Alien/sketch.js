function setup() {
  createCanvas(500, 500);
  background(250);
}

function draw() {
  // Antenna
  fill(255, 0, 0);
  line(250, 95, 250, 65);
  circle(250, 65, 10);
  
  // Body
  fill(255, 0, 0);
  rect(200, 200, 100, 100);
  
  // Head
  fill(255, 0, 0);
  ellipse(250, 150, 110, 150);
  
  // Eyes
  fill(0);
  ellipse(230, 150, 20, 40);
  ellipse(270, 150, 20, 40);
  
  // Feet
  fill(255, 0, 0);
  ellipse(220, 300, 50, 20);
  ellipse(280, 300, 50, 20);
  
  // Arms
  fill(255, 0, 0);
  ellipse(180, 240, 30, 80);
  ellipse(320, 240, 30, 80);
  
  // Triangle on the body
  fill(0, 255, 0);
  triangle(235, 236, 275, 236, 255, 270);
}
