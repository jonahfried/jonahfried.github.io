var snake = undefined;

function setup() {
  var cnv = createCanvas(windowWidth, windowHeight);
  cnv.parent("container");
  frameRate(30);


  snake = new Snake(-10, -10);
 }



function draw() {
  background(31);


  // stroke(255);
  strokeWeight(0);
  snake.update();
  snake.draw();
}

function windowResized() {
  stars = [];
  for (let i = 0; i < NUM_STARS; i++) {
    stars.push(new Star(random(windowWidth), random(windowHeight)));
  }
  resizeCanvas(windowWidth, windowHeight);
}

