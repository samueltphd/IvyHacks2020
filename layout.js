var dx = 1;
var current_x = 0;

var _case = "case1";

let origin_x = 200;
let origin_y = 200;

function setup() {
  createCanvas(900, 400);
}

function draw() {
  let edge = 500;

  background(220);

  left_room(200 - (abs((199 + dx) % 199)));
  left_room(200 - (abs((99 + dx) % 199)));

  right_room(origin_x + (301 + dx) % 201);
  right_room(origin_x + (201 + dx) % 201);

  circle(edge + 200, current_x, 10);

  square(edge + 100, 20, 30);
  square(edge + 100, 86, 30);
  square(edge + 100, 152, 30);
  square(edge + 100, 218, 30);
  square(edge + 100, 284, 30);
  square(edge + 100, 350, 30);

  square(edge + 250, 20, 30);
  square(edge + 250, 86, 30);
  square(edge + 250, 152, 30);
  square(edge + 250, 218, 30);
  square(edge + 250, 284, 30);
  square(edge + 250, 350, 30);


  if(current_x < 400 && _case == "case1") {
    _case = "case1";
  }
  else if(current_x >= 400 && _case == "case1") {
    _case = "case2";
  }
  else if(current_x > 0 && _case == "case2") {
    _case = "case2";
  }
  else if(current_x <= 0 && _case == "case2") {
    _case = "case1";
  }
  if (_case == "case1") {
    dx = dx + 1;
    current_x = current_x + 1;
  }
  else if (_case == "case2") {
    dx = dx - 1;
    current_x = current_x - 1;
  }
}

function left_room(x) {
  let side_length = 50 * (abs(x - origin_x) / 200);
  let slope = 1;

  beginShape();
  vertex(x, x * slope);// top left
  vertex(x - side_length, (x - side_length) * slope); // top right
  vertex(x - side_length, origin_y + (origin_y - ((x - side_length) * slope))); // bottom left
  vertex(x, origin_y + (origin_y - (x * slope))); // bottom right
  endShape(CLOSE);
}

function right_room(x) {
  let side_length = 50 * (abs(x - origin_x) / 200);
  let slope = 1;

  beginShape();
   vertex(x, (x - side_length) * slope);// top right
  vertex(x + side_length, x * slope); // top left
  vertex(x  + side_length, origin_y + (origin_y - (x * slope))); // bottom left
  vertex(x, origin_y + (origin_y - ((x - side_length) * slope)));  // bottom right
  endShape(CLOSE);
}
