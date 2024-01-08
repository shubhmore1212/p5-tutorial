class Layer {
  constructor() {
    this.sides = SIDES;
    this.numShapes = this.sides;
    this.angle = 360 / this.numShapes;
    this.stepsOut = 8;
    this.singleStep = CRYSTAL_SIZE / 2 / this.stepsOut;
    this.thinStroke = 1;
    this.thickStroke = 3;
    this.randomStroke = getRandomBetweenTwo()
      ? this.thickStroke
      : this.thinStroke;
    this.strokeColor = getRandomPalette();
  }
}

class Circles extends Layer {
  constructor() {
    super();
    this.shapeSize = (CRYSTAL_SIZE / 2) * 0.93;
    this.position = CRYSTAL_SIZE / 2 - this.shapeSize / 2;
  }

  render() {
    noFill();
    stroke(this.strokeColor);
    strokeWeight(this.thinStroke);
    push();
    translate(width / 2, height / 2);
    for (let i = 0; i < this.numShapes; i++) {
      ellipse(this.position, 0, this.shapeSize, this.shapeSize);
      rotate(this.angle);
      console.log(this.position);
    }
    pop();
  }
}

class SimpleLines extends Layer {
  constructor() {
    super();
    this.numSteps = getRandomBetweenTwo()
      ? this.stepsOut
      : this.stepsOut * 1.25;
    this.step = CRYSTAL_SIZE / 2 / this.numSteps;
    this.start = floor(random(0, this.numSteps));
    this.stop = floor(random(this.start, this.numSteps + 1));
    this.numShapes = getRandomBetweenTwo() ? this.sides : this.sides * 2;
  }

  render() {
    noFill();
    stroke(this.strokeColor);
    strokeWeight(this.randomStroke);
    push();
    translate(width / 2, height / 2);
    for (let i = 0; i < this.numShapes; i++) {
      line(this.start * this.step, 0, this.stop * this.step, 0);
      rotate(this.angle);
    }
    pop();
  }
}

class OutlineShapes extends Layer {
  constructor() {
    super();
  }

  render() {
    strokeWeight(this.randomStroke);
    stroke(this.strokeColor);
    push();
    translate(width / 2, height / 2);
    if (getRandomBetweenTwo()) {
      hexagon(0, 0, CRYSTAL_SIZE / 2);
    } else {
      ellipse(0, 0, CRYSTAL_SIZE, CRYSTAL_SIZE);
    }
    pop();
  }
}
