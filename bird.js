class Bird {
  constructor() {
    this.y = height / 2;
    this.x = 150;
    this.size = 32;

    this.gravity = 0.8;
    this.velocity = 0;
    this.lift = 30;

  }

  show() {
    fill(240, 219, 79);
    strokeWeight(2);
    ellipse(this.x, this.y, this.size, this.size);
  }

  up() {
    this.velocity += -this.gravity * this.lift;
  }

  update() {
    this.velocity += this.gravity;
    this.velocity *= 0.9;
    this.y += this.velocity;

    if (this.y > height - (this.size / 2)) {
      this.y = height - (this.size / 2);
    }

    if (this.y < (this.size / 2)) {
      this.y = (this.size / 2);
    }

  }

}