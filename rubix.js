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
const side_lenght = 180;
const explosion = 1.1;
const animationFrames = 300;

function draw() {
  const first_animation = min(frameCount / animationFrames, 1);
  background("lightblue");
  noStroke();
  rotateY(frameCount);

  fill("rgba(200,100,0, 0.5)");
  push();
  rotateX(90);
  translate(0, 0, (side_lenght / 2) * explosion * first_animation);
  plane(180);
  pop();

  fill("rgba(200,100,0, 0.5)");
  push();
  rotateX(270);
  translate(0, 0, (side_lenght / 2) * explosion * first_animation);
  plane(180);
  pop();
  //------------------------------------------------------------
  //this one
  fill("rgba(200,255,200, 0.7)");
  push();
  rotateY(90);
  translate(0, 0, (side_lenght / 2) * explosion * first_animation);
  plane(55);
  pop();

  push();
  rotateY(90);
  translate(
    60 * first_animation,
    0,
    (side_lenght / 2) * explosion * first_animation
  );
  plane(55);
  pop();

  push();
  rotateY(90);
  translate(
    -60 * first_animation,
    0,
    (side_lenght / 2) * explosion * first_animation
  );
  plane(55);
  pop();

  push();
  rotateY(90);
  translate(
    0,
    60 * first_animation,
    (side_lenght / 2) * explosion * first_animation
  );
  plane(55);
  pop();

  push();
  rotateY(90);
  translate(
    60 * first_animation,
    60 * first_animation,
    (side_lenght / 2) * explosion * first_animation
  );
  plane(55);
  pop();

  push();
  rotateY(90);
  translate(
    -60 * first_animation,
    60 * first_animation,
    (side_lenght / 2) * explosion * first_animation
  );
  plane(55);
  pop();

  push();
  rotateY(90);
  translate(0, 0, (side_lenght / 2) * explosion * first_animation);
  plane(55);
  pop();

  push();
  rotateY(90);
  translate(
    60 * first_animation,
    0,
    (side_lenght / 2) * explosion * first_animation
  );
  plane(55);
  pop();

  push();
  rotateY(90);
  translate(
    -60 * first_animation,
    0,
    (side_lenght / 2) * explosion * first_animation
  );
  plane(55);
  pop();

  push();
  rotateY(90);
  translate(
    0,
    -60 * first_animation,
    (side_lenght / 2) * explosion * first_animation
  );
  plane(55);
  pop();

  push();
  rotateY(90);
  translate(
    60 * first_animation,
    -60 * first_animation,
    (side_lenght / 2) * explosion * first_animation
  );
  plane(55);
  pop();

  push();
  rotateY(90);
  translate(
    -60 * first_animation,
    -60 * first_animation,
    (side_lenght / 2) * explosion * first_animation
  );
  plane(55);
  pop();

  //------------------------------------------------------------------
  fill("rgba(0,100,200, 0.5)");
  push();
  rotateY(180);
  translate(0, 0, (side_lenght / 2) * explosion * first_animation);
  plane(180);
  pop();

  fill("rgba(0,255,0, 0.5)");
  push();
  rotateY(-90);
  translate(0, 0, (side_lenght / 2) * explosion * first_animation);
  plane(180);
  pop();

  fill("rgba(0,100,200, 0.5)");
  push();
  translate(0, 0, (side_lenght / 2) * explosion * first_animation);
  plane(180);
  pop();
}
