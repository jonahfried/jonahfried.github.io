const MAX_SPEED = 5
const MAX_LEN = 200

const noiseLevel = 1;
const noiseScale = .01;

class Snake {
  constructor(x, y) {
    this.body = [createVector(x, y)];

    this.vel = createVector(3, 3);
    this.acc = createVector(.1, .5);
  }


  update() {
    let head = this.body[0].copy();
    head.add(this.vel);

    if (head.x > windowWidth+20) {
      head.x = -10;
    }
    if (head.x < -20) {
      head.x = windowWidth+10;
    }
    if (head.y > windowHeight+20) {
      head.y = -10;
    }
    if (head.y < -20) {
      head.y = windowHeight+10;
    }


    this.body.unshift(head);
    if (this.body.length > MAX_LEN) {
      this.body.pop();
    }

    this.vel.add(this.acc);
    this.vel.limit(MAX_SPEED);

    let ang = random(PI * 2)
    this.acc.set(cos(ang)*.3, sin(ang)*.3);

  }


  draw() {
    fill(252, 247, 232);
    for (let i = 0; i < this.body.length; i++) {
      circle(this.body[i].x, this.body[i].y, 10 + (MAX_LEN - abs(i - 4))/7);
    }
  }
}
