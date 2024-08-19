var numbers = [30, 10, 45, 35, 60, 38, 75, 67];

function setup() {
  createCanvas(400, 400);
  colorMode(HSB, 200, 400, 100, 100);
  background(0, 0, 100);
  noStroke();
  
  var barWidth = width / numbers.length;
  for (var i = 0; i < numbers.length; i++) {
    var n = numbers[i];
    var c = map(n, 0, max(numbers), 0, 100);
    fill(0, 100, c);
    var barHeight = map(n, 0, max(numbers), 0, height);
    rect(i * barWidth, height - barHeight, barWidth, barHeight);
  }
}
