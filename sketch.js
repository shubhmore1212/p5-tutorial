const CRYSTAL_SIZE = 500;
const SIDES = 6;
const PALETTE = ["red", "blue"];

function setup() {
  createCanvas(530, 530);
  noLoop();
  angleMode(DEGREES);
  rectMode(CENTER);
}

function draw() {
  //testLines();
  simpleLines();
  //outlineShapes();
}

function outlineShapes() {
  const strokeColor = getRandomPalette();
  const weight = getRandomBetweenTwo() ? 1 : 3;

  strokeWeight(weight);
  stroke(strokeColor);
  push();
  translate(width / 2, height / 2);
  if (getRandomBetweenTwo()) {
    hexagon(0, 0, CRYSTAL_SIZE / 2);
  } else {
    ellipse(0, 0, CRYSTAL_SIZE, CRYSTAL_SIZE);
  }
  pop();
}

function testLines() {
  let numShapes = getRandomBetweenTwo() ? SIDES : SIDES * 2;

  noFill();
  push();
  translate(width / 2, height / 2);
  stroke(PALETTE[0]);
  ellipse(0, 0, CRYSTAL_SIZE, CRYSTAL_SIZE);

  stroke(getRandomPalette());
  for (let i = 0; i < numShapes; i++) {
    line(0, 0, CRYSTAL_SIZE / 2, 0);
    rotate(360 / numShapes);
  }
  pop();
}

function simpleLines() {
  const stepsOut = 8;
  const numSteps = getRandomBetweenTwo() ? stepsOut : stepsOut * 1.25;
  const step = CRYSTAL_SIZE / 2 / numSteps;
  const start = floor(random(0, numSteps));
  const stop = floor(random(start, numSteps + 1));
  let numShapes = getRandomBetweenTwo() ? SIDES : SIDES * 2;
  const angle = 360 / numShapes;
  const weight = getRandomBetweenTwo() ? 1 : 3;

  strokeWeight(weight);
  noFill();
  stroke(getRandomPalette());
  push();
  translate(width / 2, height / 2);
  for (let i = 0; i < numShapes; i++) {
    line(start * step, 0, stop * step, 0);
    rotate(angle);
  }
  pop();
}
