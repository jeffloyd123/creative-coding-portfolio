var screen = 0;
var y = -20;
var x = 200;
var speed = 2;
var score = 0;
var objectColor;

function setup() {
  createCanvas(600, 400);
  pickRandomColor();
}

function draw() {
  if (screen == 0) {
    startScreen();
  } else if (screen == 1) {
    gameOn();
  } else if (screen == 2) {
    endScreen();
  }
}

function startScreen() {
  background(150, 200, 255);
  fill(255);
  textAlign(CENTER);
  textSize(24);
  text('WELCOME TO THE CATCH GAME', width / 2, height / 2);
  textSize(16);
  text('Click to start', width / 2, height / 2 + 30);
  reset();
}

function gameOn() {
  background(0);
  fill(255);
  textSize(16);
  text("Score: " + score, 50, 30);
  
  fill(objectColor);
  rect(x, y, 20, 20);
  
  fill(255);
  rectMode(CENTER);
  rect(mouseX, height - 10, 60, 15);
  
  y += speed;
  
  if (y > height) {
    screen = 2;
  }
  
  if (y > height - 20 && x > mouseX - 30 && x < mouseX + 30) {
    y = -20;
    speed += 0.5;
    score += 1;
    pickRandomPosition();
    pickRandomColor();
  }
}

function pickRandomPosition() {
  x = random(20, width - 20);
}

function pickRandomColor() {
  objectColor = color(random(255), random(255), random(255));
}

function endScreen() {
  background(150);
  fill(255);
  textAlign(CENTER);
  textSize(24);
  text('GAME OVER', width / 2, height / 2);
  textSize(16);
  text("Score: " + score, width / 2, height / 2 + 30);
  text('Click to play again', width / 2, height / 2 + 60);
}

function mousePressed() {
  if (screen == 0) {
    screen = 1;
  } else if (screen == 2) {
    screen = 0;
  }
}

function reset() {
  score = 0;
  speed = 2;
  y = -20;
  pickRandomColor();
}
