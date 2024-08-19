var rows = 20;
var cols = 20;
var distanceX = 30;
var distanceY = 30;

var palette = ["#1abc9c", "#e74c3c", "#3498db"];

function setup() {
  createCanvas(600, 600);
  // Automatically trigger on setup
  mousePressed();
}

function mousePressed() {
  background(0);
  rectMode(CENTER);
  noStroke();
  colorMode(RGB);
  
  for (var r = 1; r < rows; r++) {
    for (var c = 1; c < cols; c++) {
      
      var randomColor = random(palette);
      fill(randomColor);
      
      var size = random(20, 30);
      
      print("The random size is " + size);
      
      // Randomize a number between 0 and 3 (floor rounds down so 3 never happens)
      var shape = floor(random(0, 3)); 
      
      // Use if to choose between a shape or another one or another shape when random number is 2
      if (shape == 0) {
        ellipse(c * distanceX, r * distanceY, size, size);
      } else if (shape == 1) {
        rect(c * distanceX, r * distanceY, size, size);
      } else if (shape == 2) {
        triangle(c * distanceX, r * distanceY - size / 2, 
                 c * distanceX - size / 2, r * distanceY + size / 2, 
                 c * distanceX + size / 2, r * distanceY + size / 2);
      }
    }
  }
}
