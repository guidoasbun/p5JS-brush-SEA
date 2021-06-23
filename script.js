// let colorlist = ['gold', 'yellow', 'turquoise', 'red']

let images = ['fireworks1.png', 'fireworks2.png', 'fireworks3.png', 'fireworks4.png']

function preload() {
  img = loadImage('fireworks2.png');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
    background('#383838');

}

function draw() {
  noStroke();
  // fill(random(colorlist));
  // ellipse(mouseX, mouseY, 25, 25);
  if (frameCount % 20 == 0) {
    let size = random(50, 300)
    // let currImg = images[frameCount % images.length]
    image(img, mouseX, mouseY, size, size)
  }
  
}

