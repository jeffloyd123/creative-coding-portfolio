var img;

function preload() {

img = loadImage("tree.png");

}



function setup () {

createCanvas (400, 400);

background(0);

}



function draw() {

background(0);

image(img, 0, 0);

filter(BLUR, 10);

}