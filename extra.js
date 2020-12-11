function setup() {
  createCanvas(700, 600, WEBGL);
  angleMode(DEGREES);
}

const side_lenght = 180;
const explosion = 1.01;
const animationFrames = 300;

function draw() {
  const first_animation = min(frameCount / animationFrames, 1);
  background(10, 10, 20);
  noStroke();
  rotateY(frameCount / 2);
  rotateX(frameCount / 6);
  //------------------------------------------------------------
  //white
  fill("rgba(255, 255, 255,0.8)");
  push();
  rotateX(90 * first_animation);
  translate(0, 0, (side_lenght / 2) * explosion * first_animation);
  plane(55);
  pop();

  push();
  rotateX(90 * first_animation);
  translate(
    60 * first_animation,
    0,
    (side_lenght / 2) * explosion * first_animation
  );
  plane(55);
  pop();

  push();
  rotateX(90 * first_animation);
  translate(
    -60 * first_animation,
    0,
    (side_lenght / 2) * explosion * first_animation
  );
  plane(55);
  pop();

  push();
  rotateX(90 * first_animation);
  translate(
    0,
    60 * first_animation,
    (side_lenght / 2) * explosion * first_animation
  );
  plane(55);
  pop();

  push();
  rotateX(90 * first_animation);
  translate(
    60 * first_animation,
    60 * first_animation,
    (side_lenght / 2) * explosion * first_animation
  );
  plane(55);
  pop();

  push();
  rotateX(90 * first_animation);
  translate(
    -60 * first_animation,
    60 * first_animation,
    (side_lenght / 2) * explosion * first_animation
  );
  plane(55);
  pop();

  push();
  rotateX(90 * first_animation);
  translate(0, 0, (side_lenght / 2) * explosion * first_animation);
  plane(55);
  pop();

  push();
  rotateX(90 * first_animation);
  translate(
    60 * first_animation,
    0,
    (side_lenght / 2) * explosion * first_animation
  );
  plane(55);
  pop();

  push();
  rotateX(90 * first_animation);
  translate(
    -60 * first_animation,
    0,
    (side_lenght / 2) * explosion * first_animation
  );
  plane(55);
  pop();

  push();
  rotateX(90 * first_animation);
  translate(
    0,
    -60 * first_animation,
    (side_lenght / 2) * explosion * first_animation
  );
  plane(55);
  pop();

  push();
  rotateX(90 * first_animation);
  translate(
    60 * first_animation,
    -60 * first_animation,
    (side_lenght / 2) * explosion * first_animation
  );
  plane(55);
  pop();

  push();
  rotateX(90 * first_animation);
  translate(
    -60 * first_animation,
    -60 * first_animation,
    (side_lenght / 2) * explosion * first_animation
  );
  plane(55);
  pop();

  //------------------------------------------------------------
  //yellow
  fill("rgba(255,255,0,0.8)");
  push();
  rotateX(270 * first_animation);
  translate(0, 0, (side_lenght / 2) * explosion * first_animation);
  plane(55);
  pop();

  push();
  rotateX(270 * first_animation);
  translate(
    60 * first_animation,
    0,
    (side_lenght / 2) * explosion * first_animation
  );
  plane(55);
  pop();

  push();
  rotateX(270 * first_animation);
  translate(
    -60 * first_animation,
    0,
    (side_lenght / 2) * explosion * first_animation
  );
  plane(55);
  pop();

  push();
  rotateX(270 * first_animation);
  translate(
    0,
    60 * first_animation,
    (side_lenght / 2) * explosion * first_animation
  );
  plane(55);
  pop();

  push();
  rotateX(270 * first_animation);
  translate(
    60 * first_animation,
    60 * first_animation,
    (side_lenght / 2) * explosion * first_animation
  );
  plane(55);
  pop();

  push();
  rotateX(270 * first_animation);
  translate(
    -60 * first_animation,
    60 * first_animation,
    (side_lenght / 2) * explosion * first_animation
  );
  plane(55);
  pop();

  push();
  rotateX(270 * first_animation);
  translate(0, 0, (side_lenght / 2) * explosion * first_animation);
  plane(55);
  pop();

  push();
  rotateX(270 * first_animation);
  translate(
    60 * first_animation,
    0,
    (side_lenght / 2) * explosion * first_animation
  );
  plane(55);
  pop();

  push();
  rotateX(270 * first_animation);
  translate(
    -60 * first_animation,
    0,
    (side_lenght / 2) * explosion * first_animation
  );
  plane(55);
  pop();

  push();
  rotateX(270 * first_animation);
  translate(
    0,
    -60 * first_animation,
    (side_lenght / 2) * explosion * first_animation
  );
  plane(55);
  pop();

  push();
  rotateX(270 * first_animation);
  translate(
    60 * first_animation,
    -60 * first_animation,
    (side_lenght / 2) * explosion * first_animation
  );
  plane(55);
  pop();

  push();
  rotateX(270 * first_animation);
  translate(
    -60 * first_animation,
    -60 * first_animation,
    (side_lenght / 2) * explosion * first_animation
  );
  plane(55);
  pop();

  //----------------------------------------------------
  //green
  fill("rgba(0,255,0,0.8)");
  push();
  rotateY(90 * first_animation);
  translate(0, 0, (side_lenght / 2) * explosion * first_animation);
  plane(55);
  pop();

  push();
  rotateY(90 * first_animation);
  translate(
    60 * first_animation,
    0,
    (side_lenght / 2) * explosion * first_animation
  );
  plane(55);
  pop();

  push();
  rotateY(90 * first_animation);
  translate(
    -60 * first_animation,
    0,
    (side_lenght / 2) * explosion * first_animation
  );
  plane(55);
  pop();

  push();
  rotateY(90 * first_animation);
  translate(
    0,
    60 * first_animation,
    (side_lenght / 2) * explosion * first_animation
  );
  plane(55);
  pop();

  push();
  rotateY(90 * first_animation);
  translate(
    60 * first_animation,
    60 * first_animation,
    (side_lenght / 2) * explosion * first_animation
  );
  plane(55);
  pop();

  push();
  rotateY(90 * first_animation);
  translate(
    -60 * first_animation,
    60 * first_animation,
    (side_lenght / 2) * explosion * first_animation
  );
  plane(55);
  pop();

  push();
  rotateY(90 * first_animation);
  translate(0, 0, (side_lenght / 2) * explosion * first_animation);
  plane(55);
  pop();

  push();
  rotateY(90 * first_animation);
  translate(
    60 * first_animation,
    0,
    (side_lenght / 2) * explosion * first_animation
  );
  plane(55);
  pop();

  push();
  rotateY(90 * first_animation);
  translate(
    -60 * first_animation,
    0,
    (side_lenght / 2) * explosion * first_animation
  );
  plane(55);
  pop();

  push();
  rotateY(90 * first_animation);
  translate(
    0,
    -60 * first_animation,
    (side_lenght / 2) * explosion * first_animation
  );
  plane(55);
  pop();

  push();
  rotateY(90 * first_animation);
  translate(
    60 * first_animation,
    -60 * first_animation,
    (side_lenght / 2) * explosion * first_animation
  );
  plane(55);
  pop();

  push();
  rotateY(90 * first_animation);
  translate(
    -60 * first_animation,
    -60 * first_animation,
    (side_lenght / 2) * explosion * first_animation
  );
  plane(55);
  pop();

  //------------------------------------------------------------------
  //------------------------------------------------------------
  //red
  fill("rgba(255,0,0,0.8)");
  push();
  rotateY(180 * first_animation);
  translate(0, 0, (side_lenght / 2) * explosion * first_animation);
  plane(55);
  pop();

  push();
  rotateY(180 * first_animation);
  translate(
    60 * first_animation,
    0,
    (side_lenght / 2) * explosion * first_animation
  );
  plane(55);
  pop();

  push();
  rotateY(180 * first_animation);
  translate(
    -60 * first_animation,
    0,
    (side_lenght / 2) * explosion * first_animation
  );
  plane(55);
  pop();

  push();
  rotateY(180 * first_animation);
  translate(
    0,
    60 * first_animation,
    (side_lenght / 2) * explosion * first_animation
  );
  plane(55);
  pop();

  push();
  rotateY(180 * first_animation);
  translate(
    60 * first_animation,
    60 * first_animation,
    (side_lenght / 2) * explosion * first_animation
  );
  plane(55);
  pop();

  push();
  rotateY(180 * first_animation);
  translate(
    -60 * first_animation,
    60 * first_animation,
    (side_lenght / 2) * explosion * first_animation
  );
  plane(55);
  pop();

  push();
  rotateY(180 * first_animation);
  translate(0, 0, (side_lenght / 2) * explosion * first_animation);
  plane(55);
  pop();

  push();
  rotateY(180 * first_animation);
  translate(
    60 * first_animation,
    0,
    (side_lenght / 2) * explosion * first_animation
  );
  plane(55);
  pop();

  push();
  rotateY(180 * first_animation);
  translate(
    -60 * first_animation,
    0,
    (side_lenght / 2) * explosion * first_animation
  );
  plane(55);
  pop();

  push();
  rotateY(180 * first_animation);
  translate(
    0,
    -60 * first_animation,
    (side_lenght / 2) * explosion * first_animation
  );
  plane(55);
  pop();

  push();
  rotateY(180 * first_animation);
  translate(
    60 * first_animation,
    -60 * first_animation,
    (side_lenght / 2) * explosion * first_animation
  );
  plane(55);
  pop();

  push();
  rotateY(180 * first_animation);
  translate(
    -60 * first_animation,
    -60 * first_animation,
    (side_lenght / 2) * explosion * first_animation
  );
  plane(55);
  pop();

  //------------------------------------------------------------
  //blue

  fill("rgba(0,0,255,0.8)");
  push();
  rotateY(-90 * first_animation);
  translate(0, 0, (side_lenght / 2) * explosion * first_animation);
  plane(55);
  pop();

  push();
  rotateY(-90 * first_animation);
  translate(
    60 * first_animation,
    0,
    (side_lenght / 2) * explosion * first_animation
  );
  plane(55);
  pop();

  push();
  rotateY(-90 * first_animation);
  translate(
    -60 * first_animation,
    0,
    (side_lenght / 2) * explosion * first_animation
  );
  plane(55);
  pop();

  push();
  rotateY(-90 * first_animation);
  translate(
    0,
    60 * first_animation,
    (side_lenght / 2) * explosion * first_animation
  );
  plane(55);
  pop();

  push();
  rotateY(-90 * first_animation);
  translate(
    60 * first_animation,
    60 * first_animation,
    (side_lenght / 2) * explosion * first_animation
  );
  plane(55);
  pop();

  push();
  rotateY(-90 * first_animation);
  translate(
    -60 * first_animation,
    60 * first_animation,
    (side_lenght / 2) * explosion * first_animation
  );
  plane(55);
  pop();

  push();
  rotateY(-90 * first_animation);
  translate(0, 0, (side_lenght / 2) * explosion * first_animation);
  plane(55);
  pop();

  push();
  rotateY(-90 * first_animation);
  translate(
    60 * first_animation,
    0,
    (side_lenght / 2) * explosion * first_animation
  );
  plane(55);
  pop();

  push();
  rotateY(-90 * first_animation);
  translate(
    -60 * first_animation,
    0,
    (side_lenght / 2) * explosion * first_animation
  );
  plane(55);
  pop();

  push();
  rotateY(-90 * first_animation);
  translate(
    0,
    -60 * first_animation,
    (side_lenght / 2) * explosion * first_animation
  );
  plane(55);
  pop();

  push();
  rotateY(-90 * first_animation);
  translate(
    60 * first_animation,
    -60 * first_animation,
    (side_lenght / 2) * explosion * first_animation
  );
  plane(55);
  pop();

  push();
  rotateY(-90 * first_animation);
  translate(
    -60 * first_animation,
    -60 * first_animation,
    (side_lenght / 2) * explosion * first_animation
  );
  plane(55);
  pop();

  //------------------------------------------------------------
  //orange
  fill("rgba(255,165,0,0.8)");
  push();
  translate(0, 0, (side_lenght / 2) * explosion * first_animation);
  plane(55);
  pop();

  push();
  translate(
    60 * first_animation,
    0,
    (side_lenght / 2) * explosion * first_animation
  );
  plane(55);
  pop();

  push();
  translate(
    -60 * first_animation,
    0,
    (side_lenght / 2) * explosion * first_animation
  );
  plane(55);
  pop();

  push();
  translate(
    0,
    60 * first_animation,
    (side_lenght / 2) * explosion * first_animation
  );
  plane(55);
  pop();

  push();
  translate(
    60 * first_animation,
    60 * first_animation,
    (side_lenght / 2) * explosion * first_animation
  );
  plane(55);
  pop();

  push();
  translate(
    -60 * first_animation,
    60 * first_animation,
    (side_lenght / 2) * explosion * first_animation
  );
  plane(55);
  pop();

  push();
  translate(0, 0, (side_lenght / 2) * explosion * first_animation);
  plane(55);
  pop();

  push();
  translate(
    60 * first_animation,
    0,
    (side_lenght / 2) * explosion * first_animation
  );
  plane(55);
  pop();

  push();
  translate(
    -60 * first_animation,
    0,
    (side_lenght / 2) * explosion * first_animation
  );
  plane(55);
  pop();

  push();
  translate(
    0,
    -60 * first_animation,
    (side_lenght / 2) * explosion * first_animation
  );
  plane(55);
  pop();

  push();
  translate(
    60 * first_animation,
    -60 * first_animation,
    (side_lenght / 2) * explosion * first_animation
  );
  plane(55);
  pop();

  push();
  translate(
    -60 * first_animation,
    -60 * first_animation,
    (side_lenght / 2) * explosion * first_animation
  );
  plane(55);
  pop();
}
