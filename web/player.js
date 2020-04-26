class Player{
  constructor(){
    this.body = [];
    this.wheel = [];


    this.w = 50;
    this.h = 60;

    this.body[0] = createVector(390, 510)
    this.body[1] = createVector(400, 520)
    this.body[2] = createVector(405, 525)
    this.wheel[0] = createVector(385, 515)
    this.wheel[1] = createVector(385, 555)
    this.wheel[2] = createVector(435, 515)
    this.wheel[3] = createVector(435, 555)
    
  }

  constrain_x() {

    this.body[0].x = constrain(this.body[0].x, 135, 660)
    this.body[1].x = constrain(this.body[1].x, 145, 670)
    this.body[2].x = constrain(this.body[2].x, 150, 675)
    this.wheel[0].x = constrain(this.wheel[0].x, 130, 655)
    this.wheel[1].x = constrain(this.wheel[1].x, 130, 655)
    this.wheel[2].x = constrain(this.wheel[2].x, 180, 705)
    this.wheel[3].x = constrain(this.wheel[3].x, 180, 705)
  }

  constrain_y() {
    this.body[0].y = constrain(this.body[0].y, 0, 540)
    this.body[1].y = constrain(this.body[1].y, 10, 550)
    this.body[2].y = constrain(this.body[2].y, 15, 555)
    this.wheel[0].y = constrain(this.wheel[0].y, 5, 545)
    this.wheel[1].y = constrain(this.wheel[1].y, 45, 585)
    this.wheel[2].y = constrain(this.wheel[2].y, 5, 545)
    this.wheel[3].y = constrain(this.wheel[3].y, 45, 585)
  }

  turnRight() {

    for (let i = 0; i < 3; i++) {
      this.body[i].x += 6;

    }

    for (let i = 0; i < 4; i++) {
      this.wheel[i].x += 6;

    }

    this.constrain_x();

  }

  turnLeft() {

    for (let i = 0; i < 3; i++) {
      this.body[i].x -= 6;

    }

    for (let i = 0; i < 4; i++) {
      this.wheel[i].x -=6;

    }


    this.constrain_x();

  }

  up() {

    for (let i = 0; i < 3; i++) {
      this.body[i].y -= 4;

    }

    for (let i = 0; i < 4; i++) {
      this.wheel[i].y -= 4;

    }

    this.constrain_y();

  }

  down() {

    for (let i = 0; i < 3; i++) {
      this.body[i].y += 5;

    }

    for (let i = 0; i < 4; i++) {
      this.wheel[i].y += 5;

    }

   
    this.constrain_y();

  }

  show() {

    noStroke()
    fill(0);
    for (let i = 0; i < 4; i++) {
      rect(this.wheel[i].x, this.wheel[i].y, 10, 10)
    }

    fill(139, 0, 0);
    rect(this.body[0].x, this.body[0].y, 50, 60)

    fill(0)
    rect(this.body[1].x, this.body[1].y, 30, 40)

    fill(139, 0, 0);
    rect(this.body[2].x, this.body[2].y, 20, 30)


  }
}