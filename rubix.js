function setup() {
  createCanvas(500, 500, WEBGL);
  angleMode(DEGREES);
}

const side_lenght = 180;
const explosion = 1.1;
const animationFrames = 300;

function draw() {
  const first_animation = min(frameCount / animationFrames, 1);
  background("lightblue");
  noStroke();
  rotateY(frameCount / 2);
  rotateX(frameCount / 6);
  //------------------------------------------------------------
  //white
  fill("rgba(255, 255, 255, 0.7)");
  push();
  rotateX(90);
  translate(0, 0, (side_lenght / 2) * explosion * first_animation);
  plane(180);
  pop();

  //------------------------------------------------------------
  //yellow
  fill("rgba(255,255,0, 0.7)");
  push();
  rotateX(270);
  translate(0, 0, (side_lenght / 2) * explosion * first_animation);
  plane(180);
  pop();
  //------------------------------------------------------------
  //green
  fill("rgba(0,255,0, 0.7)");
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
  //------------------------------------------------------------
  //red
  fill("rgba(255,0,0, 0.7)");
  push();
  rotateY(180);
  translate(0, 0, (side_lenght / 2) * explosion * first_animation);
  plane(180);
  pop();

  //------------------------------------------------------------
  //blue

  fill("rgba(0,0,255, 0.7)");
  push();
  rotateY(-90);
  translate(0, 0, (side_lenght / 2) * explosion * first_animation);
  plane(180);
  pop();

  //------------------------------------------------------------
  //orange
  fill("rgba(255,165,0, 0.7)");
  push();
  translate(0, 0, (side_lenght / 2) * explosion * first_animation);
  plane(180);
  pop();
}
