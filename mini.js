function setup() {
  createCanvas(500, 500, WEBGL);
  angleMode(DEGREES);
}

// const faces = [
//   [0, 0, 0, "255, 0, 0"],
//   [0, 90, 0, "0, 255, 0"],
//   [0, 180, 0, "255, 0, 0"],
//   [0, -90, 0, "0, 255, 0"],
//   [90, 0, 0, "0, 0, 255"],
//   [270, 0, 0, "0, 0, 255"],
// ];
const edgeLength = 180;
const explodeFactor = 1.2;
const animationFrames = 300;
const transparency = 0.3;

function draw() {
  const doneness = min(frameCount / animationFrames, 1);
  background("lightblue");
  noStroke();
  rotateY(frameCount);

  fill("rgba(200,100,0, 0.5)");
  push();
  rotateX(90);
  translate(0, 0, (edgeLength / 2) * explodeFactor * doneness);
  plane(180);
  pop();

  fill("rgba(200,100,0, 0.5)");
  push();
  rotateX(270);
  translate(0, 0, (edgeLength / 2) * explodeFactor * doneness);
  plane(180);
  pop();

  fill("rgba(0,255,0, 0.5)");
  push();
  rotateY(90);
  translate(0, 0, (edgeLength / 2) * explodeFactor * doneness);
  plane(180);
  pop();

  fill("rgba(0,100,200, 0.5)");
  push();
  rotateY(180);
  translate(0, 0, (edgeLength / 2) * explodeFactor * doneness);
  plane(180);
  pop();

  fill("rgba(0,255,0, 0.5)");
  push();
  rotateY(-90);
  translate(0, 0, (edgeLength / 2) * explodeFactor * doneness);
  plane(180);
  pop();

  fill("rgba(0,100,200, 0.5)");
  push();
  translate(0, 0, (edgeLength / 2) * explodeFactor * doneness);
  plane(180);
  pop();
}
