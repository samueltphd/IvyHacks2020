function setup() {
  createCanvas(400, 400)
}

function draw() {
  let edge = 0;

  background(220);

  square(edge + 100, 20, 30);
  square(edge + 100, 86, 30);
  textSize(12);
  text("Programming 103", edge + 70, 86 + 17);
  square(edge + 100, 152, 30);
  square(edge + 100, 218, 30);
  square(edge + 100, 284, 30);
  textSize(12);
  text("Programming 101", edge + 70, 284 + 17);
  square(edge + 100, 350, 30);

  square(edge + 250, 20, 30);
  square(edge + 250, 86, 30);
  square(edge + 250, 152, 30);
  textSize(12);
  text("Programming 102", edge + 220, 152 + 17);
  square(edge + 250, 218, 30);
  square(edge + 250, 284, 30);
  square(edge + 250, 350, 30);
  textSize(12);
  text("Break!", edge + 248, 350 + 17);
}
