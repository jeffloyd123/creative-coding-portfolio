function setup() {
  createCanvas(2000, 2000);
  frameRate(100);
}

function draw() {
  // Create a semi-transparent black background
  fill(0, 10);
  noStroke();
  rect(0, 0, width, height); // Use width and height for flexibility
  
  // Generate random colors
  let r = random(100, 255);
  let g = random(100, 255);
  let b = random(100, 255);
  
  // Draw red circles at random positions near the mouse
  fill(255, 0, 0);
  ellipse(mouseX + random(-50, 50), mouseY + random(-50, 50), 40);
  
  // Draw colored triangles around the mouse
  fill(r, g, b);
  let size = random(20, 40);
  triangle(mouseX - size, mouseY - size, 
           mouseX + size, mouseY - size, 
           mouseX, mouseY + size);
  
  // Draw a semi-transparent white rectangle centered on the mouse
  fill(255, 200);
  rect(mouseX, mouseY, 150, 150);
}
