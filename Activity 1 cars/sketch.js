function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  
  // Body of the car 
  fill(0, 255, 0);
  rect(50, 200, 300, 50);
  rect(100, 160, 200, 40);
  
  // Wheels
  fill(0);
  ellipse(120, 270, 40, 40);
  ellipse(280, 270, 40, 40);
  fill(200);
  ellipse(120, 270, 20, 20);
  ellipse(280, 270, 20, 20);
  
  // Roof
  fill(0, 255, 0);
  rect(140, 130, 120, 30);
  
  // Headlights
  fill(255, 255, 0);
  ellipse(50, 200, 15, 15);
  ellipse(350, 200, 15, 15);
  
  // Taillights
  fill(255, 0, 0);
  ellipse(50, 250, 15, 15);
  ellipse(350, 250, 15, 15);
  
  // Windows
  fill(135, 206, 250);
  rect(160, 140, 80, 30);
}
