const canvasSketch = require('canvas-sketch');
const p5 = require('p5');
new p5()

const settings = {
  pixelsPerInch: 300,
  p5: true,
  duration: 3,
  animate: false,
  dimensions: [512, 512],
  bleed: 1 / 8,
};

canvasSketch(() => {


  return ({ context, width, height }) => {
  // Set the default blend mode
  blendMode(BLEND);
  
  // Black background
  background(255);
  
  // Set foreground as white
  fill(255);
  
  // Set x-or / difference blend mode
  blendMode(DIFFERENCE);
  
  // Disable stroke
  noStroke();

  // Center of screen
  const x = width / 2;
  const y = height / 2;
  
  // Fraction of screen dim
  const dim = min(width, height);
  const size = dim * 0.5;
  
  // Make a rectangle centred on the screen
  rectMode(CENTER);
  rect(x, y, size, size);
  
  // Create a circle slightly offset down and right
  push();
  translate(size / 4, size / 4);
  ellipse(x, y, size, size);
  pop();
  
  // Create a triangle slightly offset up and left
  push();
  translate(-size / 4, -size / 4);
  triangle(
    x, y - size / 2,
    x + size / 2, y + size / 2,
    x - size / 2, y + size / 2
  );
  pop();
  
  }
}, settings);
