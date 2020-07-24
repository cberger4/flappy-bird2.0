class ColPipe {
  constructor() {
    this.top = 50;
    this.bottom = height - 50;
    this.x = width;
    this.w = 45;
    this.speed = 2;
    this.colSpeed = 0.5;
  }

  show() {
    strokeWeight(2);
    fill(0, 255, 0);
    rect(this.x, 0, this.w, this.top);
    rect(this.x, this.bottom, this.w, height);

    rect(this.x - 5, this.top - 15, 55, 15);
    rect(this.x - 5, this.bottom, 55, 15);

    strokeWeight(0);
    fill(0, 100, 40, 90);
    rect(this.x + 33, this.bottom + 14, 6, height - this.bottom);
    rect(this.x + 33, 0, 6, this.top - 16);

    rect(this.x + 36, this.bottom, 6, 15);
    rect(this.x + 36, this.top - 15, 6, 15);

  }

  update() {
    this.x -= this.speed;
    this.top += this.colSpeed;
    this.bottom -= this.colSpeed;
  }

  offscreen() {
    return (this.x < -this.w);
  }

  addPoint(bird) {
    if (((bird.x - bird.size / 2) > this.x + this.w) && ((bird.x - bird.size / 2) < this.x + this.w + this.speed)) {
      return true;
    }
  }

  hits(bird) {

    if ((bird.x + bird.size / 2) > this.x && (bird.x - bird.size / 2) < this.x + this.w) {
      if ((bird.y - bird.size / 2) < this.top || (bird.y + bird.size / 2 > this.bottom)) {
        noLoop();
        return true;
      }
    }
  }

}