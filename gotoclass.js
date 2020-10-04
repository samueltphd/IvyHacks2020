let hallway = 200;
let hallway1 = 202;
let left_class = -40;
let right_class = 40;
var count = 0;
var time = 0;

var position1 = 0;
var position2 = 0;

let class1 = 20 + 15;
let class2 = 86 + 15;
let class3 = 152 + 15;
let class4 = 218 + 15;
let class5 = 284 + 15;
let class6 = 350 + 15;

function setup() {
  createCanvas(900, 400);
}

function draw() {
  var lclass = false;
  var rclass = false;
  let edge = 0;

  if (abs(position1 - position2) < 40) {
    document.getElementById("footer").innerHTML = '<a href="zoom.us">Wanna Chat?</a>';
  }
  else {
    document.getElementById("footer").innerHTML = "";
  }

  // my schedule
  let r = random(10);

  if (time < 3) {
    position1 = min(position1 + r, class5);

    if (position1 == class5) {
      lclass = true;
    } else {
      lclass = false;
    }
  } else if (time < 7) {
    lclass = true;
  } else if (time < 15) {
    position1 = max(position1 - r, class3);

    if (position1 == class3) {
      rclass = true;
    } else {
      rclass = false;
    }
  } else if (time < 21) {
    rclass = true;
  } else if (time < 31) {
    position1 = max(position1 - r, class2);

    if (position1 == class2) {
      lclass = true;
    } else {
      lclass = false;
    }
  } else if (time < 52) {
    lclass = true;
  } else if (time < 90) {
    position1 = min(position1 + r, class6);

    if (position1 == class6) {
      rclass = true;
    } else {
      rclass = false;
    }
  }


  if (lclass) {
    x = edge + hallway + left_class;
  } else if (rclass) {
    x = edge + hallway + right_class;
  } else {
    x = edge + hallway;
  }

  // other schedule 1
  lclass = false;
  rclass = false;
  let r1 = random(10);

  if (time < 8) {
    position2 = min(position2 + r1, class4);

    if (position2 == class4) {
      lclass = true;
    } else {
      lclass = false;
    }
  } else if (time < 12) {
    lclass = true;
  } else if (time < 14) {
    position2 = max(position2 - r1, class1);

    if (position2 == class1) {
      lclass = true;
    } else {
      lclass = false;
    }
  } else if (time < 19) {
    lclass = true;
  } else if (time < 73) {
    position2 = min(position2 + r1, class6);

    if (position2 == class6) {
      rclass = true;
    } else {
      rclass = false;
    }
  } else if (time < 81) {
    rclass = true;
  } else if (time < 90) {
    position2 = max(position2 - r1, class5);

    if (position2 == class5) {
      rclass = true;
    } else {
      rclass = false;
    }
  } else {
    time = 0;
    position1 = 0;
    position2 = 0;
  }


  if (lclass) {
    x1 = edge + hallway + left_class;
  } else if (rclass) {
    x1 = edge + hallway + right_class;
  } else {
    x1 = edge + hallway1;
  }

  background(220);

  c = color(55);
  noStroke();
  fill(c);
  circle(x, position1, 10);

  c = color(255, 0, 0);
  fill(c);
  circle(x1, position2, 10);

  c = color(255, 255, 255);
  fill(c);
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


  fill(color(0, 0, 0));
  textSize(12);
  text("Programming 103", edge + 70, 86 + 17);
  textSize(12);
  text("Break!", edge + 248, 350 + 17);
  textSize(12);
  text("Programming 102", edge + 220, 152 + 17);
  textSize(12);
  text("Programming 101", edge + 70, 284 + 17);

  textSize(32);
  text("Announcements", edge + 500, 100);
  textSize(12);
  text("Sports Game - Post-Pandemic!", edge + 500, 150);
  text("Trivia! Link on Facebook!", edge + 500, 175);

  textSize(20);
  text("Current time: " + time, edge + 500, 300);

  textSize(10);
  fill(color(55));
  text("Me!", edge + 500, 375);

  fill(color(255, 0, 0));
  text("User1", edge + 500, 390)

  count++;

  if (count % 60 == 0) {
    time++;
  }
}
