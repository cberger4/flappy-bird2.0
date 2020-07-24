//JavaScript Flappy Bird 2.0
//Created with p5.js Web Editor
//Creator: Chris Berger
//Created on April 8, 2020
//Inspired by: Daniel Shiffman (The Coding Train)


let bird;
let pipe = [];
let firstTime = true;
let score = 0;
let lose = false;
let pipeType = 1;

function setup() {
  createCanvas(800, 600);
  bird = new Bird();
  pipe.push(new Pipe());

}

function draw() {
  background(100, 148, 255);
  pipeType = 1;
  if (score == 1) {
    pipeType = 2;
  }

  if (score % 3 == 0 && score != 0) {
    pipeType = 2;
  }

  if (score % 5 == 0 && score > 4) {
    pipeType = 3;
  }


  if (frameCount % 80 == 0) {
    switch (pipeType) {
      case 1:
        pipe.push(new Pipe());
        break;
      case 2:
        pipe.push(new MovePipe());
        break;
      case 3:
        pipe.push(new ColPipe());
        break;
      default:
        pipe.push(new Pipe());
        break;
    }
  }


  for (let i = pipe.length - 1; i >= 0; i--) {
    pipe[i].show();
    pipe[i].update();

    if (pipe[i].addPoint(bird)) {
      score += 1;
    }

    if (pipe[i].hits(bird)) {
      console.log("HITS");
      lose = true;
    }

    if (pipe[i].offscreen()) {
      pipe.splice(i, 1);
    }

  }

  bird.show();
  bird.update();


  if (lose) {
    fill(100, 200, 255);
    rect(width / 2 - 115, height / 2 - 30, 230, 60);

    fill(0);
    textSize(40);
    textAlign(CENTER, CENTER);
    text("Game Over!", width / 2, height / 2);
    text("Press SPACE to restart!", width / 2, height / 2 + 75);
  }


  textSize(24);
  fill(0);
  textAlign(CENTER, CENTER);
  text("Score: " + score, width / 2, 40);

}

function keyPressed() {
  if (key == ' ') {
    bird.up();
    if (lose) reset();
  }
}

function reset() {
  lose = false;
  pipe = [];
  score = 0;
  bird = new Bird();
  loop();

}