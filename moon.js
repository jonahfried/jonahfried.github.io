const MOON_RAD = 65;


class Moon {

  constructor(id, x, y, a, radius) {
    this.id = id;
    this.x = x;
    this.y = y;
    this.a = a;
    this.radius = radius;
  }

  update() {
    this.a -= .001;
  }

  draw() {
    this.update();

    circle(
      this.x + this.radius * cos(this.a), 
      this.y - this.radius * sin(this.a), 
      MOON_RAD
    );

    if (this.id == 1) {
      push();

      fill(25, 20, 30, 255);
      stroke(25, 20, 30, 255);

      let radius = this.radius - 20;
      circle(
        this.x + radius * cos(this.a), 
        this.y - this.radius * sin(this.a), 
        MOON_RAD
      );

      pop();
    }

    if (this.id == 3) {
      push();

      fill(25, 20, 30);
      stroke(25, 20, 30);

      let radius = this.radius + 20;
      circle(
        this.x + radius * cos(this.a), 
        this.y - this.radius * sin(this.a), 
        MOON_RAD
      );

      pop();
    }

  }

}
