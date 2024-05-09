const STAR_MAX = 16

class Star {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.radius = random(10 * STAR_MAX) / 10;
  }


  update() {
    this.radius += .02;
    if (this.radius >= STAR_MAX) {
      this.radius = STAR_MAX / 3
    }
  }

  draw() {
    this.update();
    circle(this.x, this.y, min(this.radius, 3 * STAR_MAX / 4));
  }

}
