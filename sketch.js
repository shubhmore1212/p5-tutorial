const CRYSTAL_SIZE = 500;
const SIDES = 6;
const PALETTE = ["red", "blue"];

const layers = [];

function setup() {
  createCanvas(530, 530);
  noLoop();
  angleMode(DEGREES);
  rectMode(CENTER);
}

function draw() {
  let picker = random(1);
  if (picker > 0.3) {
    layers.push(new Circles());
  }

  picker = random(1);
  if (picker > 0.3) {
    layers.push(new SimpleLines());
  }

  picker = random(1);
  if (picker > 0.3) {
    layers.push(new OutlineShapes());
  }

  layers.forEach((_) => _.render());
}
