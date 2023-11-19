var stars = [];
const NUM_STARS = 100;
var moons = [];

function setup() {
  var cnv = createCanvas(windowWidth, windowHeight);
  cnv.parent("container");

  for (let i = 0; i < NUM_STARS; i++) {
    stars.push(new Star(random(windowWidth), random(windowHeight)));
  }

  for (let i = 0; i < 4; i++) {
    moons[i] = new Moon(
      i,
      windowWidth / 2,
      windowHeight * 1.50,
      i * PI / 2,
      windowHeight * 1.25
    );
  }
}

function draw() {
  background(25, 20, 30);

  drawStars();
}


function drawStars() {
  fill(180, 130, 27);
  stroke(112, 91, 21);

  for (let i = 0; i < stars.length; i++) {
    stars[i].draw();
  }


  fill(255);
  for (let i = 0; i < moons.length; i++) {
    moons[i].draw();
  }

}

function windowResized() {
  stars = [];
  for (let i = 0; i < NUM_STARS; i++) {
    stars.push(new Star(random(windowWidth), random(windowHeight)));
  }
  resizeCanvas(windowWidth, windowHeight);
}
