let images = [];
let mySound;

function preload() {
  soundFormats("mp3", "ogg");
  mySound = loadSound("StarsAndStripesForever.mp3");
  img1 = loadImage("fireworks1.png");
  img2 = loadImage("fireworks2.png");
  img3 = loadImage("fireworks3.png");
  img4 = loadImage("fireworks4.png");
  images = [img1, img2, img3, img4];
  
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  background("#383838");
}

function mouseClicked() {
  mySound.stop();
  mySound.play();
}

function draw() {
  noStroke();
  if (frameCount % 20 == 0) {
    let currImage = random(images);
    let size = random(50, 200);
    image(currImage, mouseX, mouseY, size, size);
  }
}
