function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  // Background with a gradient color
  background(0, 102, 204); // Deep blue background

  noStroke();
  
  // Adjust loop parameters to cover the entire canvas
  for (let x = 0; x < width; x += 40) {
    for (let y = 0; y < height; y += 40) {
      // Get the distance from the circle to the mouse;
      let distance = dist(mouseX, mouseY, x, y);
      // Map the distance to a range that looks better;
      let diameter = map(distance, 0, max(width, height), 10, 50);
      
      // Gradient color changes from yellow to purple
      let r = map(x, 0, width, 255, 128);
      let g = map(y, 0, height, 255, 0);
      let b = map(distance, 0, max(width, height), 255, 128);
      fill(r, g, b);
      
      circle(x, y, diameter);
    }
  }
  
  // Add text with a different font and style
  fill(255); // White color for text
  textSize(80); // Increase the text size
  textStyle(BOLD);
  textAlign(CENTER, CENTER);
  stroke(0); // Black color for outline
  strokeWeight(5); // Adjust the outline thickness as needed
  text("Explore the", width/2, height/2 - 60); // Adjust y position for the first line
  text("Wonders of Art", width/2, height/2 + 60); // Adjust y position for the second line
}
