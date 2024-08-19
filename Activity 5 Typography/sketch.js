function setup() {
  createCanvas(800, 200);
  background(255); // White background
}

function draw() {
  background(255); // Ensure the background is white every frame

  // Set the text characteristics
  fill(0); // Black text color
  textAlign(CENTER, CENTER);
  textSize(64);
  textFont('Helvetica'); // Change to any font you prefer

  // Draw the text
  text("Bath Spa University", width / 2, height / 2);
}
