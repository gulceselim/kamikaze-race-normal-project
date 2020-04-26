class Opponent {
  constructor(){
    this.body = [];
    this.wheel = [];

    this.isOvertakenBy = false;

    this.w = 50;
    this.h = 60;



    this.r = random(0, 255);
    this.g = random(0, 255);
    this.b = random(0, 255);

    this.r2 = random(0, 255);
    this.g2 = random(0, 255);
    this.b2 = random(0, 255);

    this.r3 = random(0, 255);
    this.g3 = random(0, 255);
    this.b3 = random(0, 255);

    this.r4 = random(0, 255);
    this.g4 = random(0, 255);
    this.b4 = random(0, 255);

    this.r5 = random(0, 255);
    this.g5 = random(0, 255);
    this.b5 = random(0, 255);

    this.r6 = random(0, 255);
    this.g6 = random(0, 255);
    this.b6 = random(0, 255);

    this.r7 = random(0, 255);
    this.g7 = random(0, 255);
    this.b7 = random(0, 255);


    this.r8 = random(0, 255);
    this.g8 = random(0, 255);
    this.b8 = random(0, 255);



    this.body[3] = createVector(270, 510)
    this.body[4] = createVector(280, 520)
    this.body[5] = createVector(285, 525)
    this.wheel[4] = createVector(265, 515)
    this.wheel[5] = createVector(265, 555)
    this.wheel[6] = createVector(315, 515)
    this.wheel[7] = createVector(315, 555)

    this.body[6] = createVector(160, 50)
    this.body[7] = createVector(170, 60)
    this.body[8] = createVector(175, 65)
    this.wheel[8] = createVector(155, 55)
    this.wheel[9] = createVector(155, 95)
    this.wheel[10] = createVector(205, 55)
    this.wheel[11] = createVector(205, 95)

    this.body[9] = createVector(390, 10)
    this.body[10] = createVector(400, 20)
    this.body[11] = createVector(405, 25)
    this.wheel[12] = createVector(385, 15)
    this.wheel[13] = createVector(385, 55)
    this.wheel[14] = createVector(435, 15)
    this.wheel[15] = createVector(435, 55)


    this.body[12] = createVector(630, 510)
    this.body[13] = createVector(640, 520)
    this.body[14] = createVector(645, 525)
    this.wheel[16] = createVector(625, 515)
    this.wheel[17] = createVector(625, 555)
    this.wheel[18] = createVector(675, 515)
    this.wheel[19] = createVector(675, 555)

    this.body[15] = createVector(505, 335)
    this.body[16] = createVector(515, 345)
    this.body[17] = createVector(520, 350)
    this.wheel[20] = createVector(500, 340)
    this.wheel[21] = createVector(500, 380)
    this.wheel[22] = createVector(550, 340)
    this.wheel[23] = createVector(550, 380)

    this.body[18] = createVector(630, 180)
    this.body[19] = createVector(640, 190)
    this.body[20] = createVector(645, 195)
    this.wheel[24] = createVector(625, 185)
    this.wheel[25] = createVector(625, 225)
    this.wheel[26] = createVector(675, 185)
    this.wheel[27] = createVector(675, 225)


    this.body[21] = createVector(270, 210)
    this.body[22] = createVector(280, 220)
    this.body[23] = createVector(285, 225)
    this.wheel[28] = createVector(265, 215)
    this.wheel[29] = createVector(265, 255)
    this.wheel[30] = createVector(315, 215)
    this.wheel[31] = createVector(315, 255)

    this.body[24] = createVector(160, 370)
    this.body[25] = createVector(170, 380)
    this.body[26] = createVector(175, 385)
    this.wheel[32] = createVector(155, 375)
    this.wheel[33] = createVector(155, 415)
    this.wheel[34] = createVector(205, 375)
    this.wheel[35] = createVector(205, 415)


    this.ydir2 = 0;

  }
  
  setDirOfline(y) {
    this.ydir2 = y;
  }

  update() {

    if (this.body[3].y == 670) {
      this.r = random(0, 255);
      this.g = random(0, 255);
      this.b = random(0, 255);
      this.x = random(135, 355 - this.w);
      this.body[3].y = -70;
      this.body[3].x = this.x;
      this.body[4].y = -60;
      this.body[4].x = this.x + 10;
      this.body[5].y = -55;
      this.body[5].x = this.x + 15;
      this.wheel[4].y = -65;
      this.wheel[4].x = this.x + 45;
      this.wheel[5].y = -65;
      this.wheel[5].x = this.x - 5;
      this.wheel[6].y = -25;
      this.wheel[6].x = this.x + 45;
      this.wheel[7].y = -25;
      this.wheel[7].x = this.x - 5;

    }

    if (this.body[6].y == 670) {
      this.r2 = random(0, 255);
      this.g2 = random(0, 255);
      this.b2 = random(0, 255);
      this.x2 = random(135, 355 - this.w);
      this.body[6].y = -70;
      this.body[6].x = this.x2;
      this.body[7].y = -60;
      this.body[7].x = this.x2 + 10;
      this.body[8].y = -55;
      this.body[8].x = this.x2 + 15;
      this.wheel[8].y = -65;
      this.wheel[8].x = this.x2 + 45;
      this.wheel[9].y = -65;
      this.wheel[9].x = this.x2 - 5;
      this.wheel[10].y = -25;
      this.wheel[10].x = this.x2 + 45;
      this.wheel[11].y = -25;
      this.wheel[11].x = this.x2 - 5;

    }

    if (this.body[9].y == 670) {
      this.r3 = random(0, 255);
      this.g3 = random(0, 255);
      this.b3 = random(0, 255);
      this.x3 = random(364, 710 - this.w);
      this.body[9].y = -70;
      this.body[9].x = this.x3;
      this.body[10].y = -60;
      this.body[10].x = this.x3 + 10;
      this.body[11].y = -55;
      this.body[11].x = this.x3 + 15;
      this.wheel[12].y = -65;
      this.wheel[12].x = this.x3 + 45;
      this.wheel[13].y = -65;
      this.wheel[13].x = this.x3 - 5;
      this.wheel[14].y = -25;
      this.wheel[14].x = this.x3 + 45;
      this.wheel[15].y = -25;
      this.wheel[15].x = this.x3 - 5;

    }

    if (this.body[12].y == 670) {
      this.r4 = random(0, 255);
      this.g4 = random(0, 255);
      this.b4 = random(0, 255);
      this.x4 = random(364, 710 - this.w);
      this.body[12].y = -70;
      this.body[12].x = this.x4;
      this.body[13].y = -60;
      this.body[13].x = this.x4 + 10;
      this.body[14].y = -55;
      this.body[14].x = this.x4 + 15;
      this.wheel[16].y = -65;
      this.wheel[16].x = this.x4 + 45;
      this.wheel[17].y = -65;
      this.wheel[17].x = this.x4 - 5;
      this.wheel[18].y = -25;
      this.wheel[18].x = this.x4 + 45;
      this.wheel[19].y = -25;
      this.wheel[19].x = this.x4 - 5;

    }

    if (this.body[15].y == 675 || this.body[15].y == 670) {
      this.r5 = random(0, 255);
      this.g5 = random(0, 255);
      this.b5 = random(0, 255);
      this.x5 = random(364, 710 - this.w);
      this.body[15].y = -70;
      this.body[15].x = this.x5;
      this.body[16].y = -60;
      this.body[16].x = this.x5 + 10;
      this.body[17].y = -55;
      this.body[17].x = this.x5 + 15;
      this.wheel[20].y = -65;
      this.wheel[20].x = this.x5 + 45;
      this.wheel[21].y = -65;
      this.wheel[21].x = this.x5 - 5;
      this.wheel[22].y = -25;
      this.wheel[22].x = this.x5 + 45;
      this.wheel[23].y = -25;
      this.wheel[23].x = this.x5 - 5;

    }

    if (this.body[18].y == 670) {
      this.r6 = random(0, 255);
      this.g6 = random(0, 255);
      this.b6 = random(0, 255);
      this.x6 = random(364, 710 - this.w);
      this.body[18].y = -70;
      this.body[18].x = this.x6;
      this.body[19].y = -60;
      this.body[19].x = this.x6 + 10;
      this.body[20].y = -55;
      this.body[20].x = this.x6 + 15;
      this.wheel[24].y = -65;
      this.wheel[24].x = this.x6 + 45;
      this.wheel[25].y = -65;
      this.wheel[25].x = this.x6 - 5;
      this.wheel[26].y = -25;
      this.wheel[26].x = this.x6 + 45;
      this.wheel[27].y = -25;
      this.wheel[27].x = this.x6 - 5;

    }

    if (this.body[21].y == 670) {
      this.r7 = random(0, 255);
      this.g7 = random(0, 255);
      this.b7 = random(0, 255);
      this.x7 = random(135, 355 - this.w);
      this.body[21].y = -70;
      this.body[21].x = this.x7;
      this.body[22].y = -60;
      this.body[22].x = this.x7 + 10;
      this.body[23].y = -55;
      this.body[23].x = this.x7 + 15;
      this.wheel[28].y = -65;
      this.wheel[28].x = this.x7 + 45;
      this.wheel[29].y = -65;
      this.wheel[29].x = this.x7 - 5;
      this.wheel[30].y = -25;
      this.wheel[30].x = this.x7 + 45;
      this.wheel[31].y = -25;
      this.wheel[31].x = this.x7 - 5;

    }
    
    if (this.body[24].y == 670) {
      this.r8 = random(0, 255);
      this.g8 = random(0, 255);
      this.b8 = random(0, 255);
      this.x8 = random(135, 355 - this.w);
      this.body[24].y = -70;
      this.body[24].x = this.x8;
      this.body[25].y = -60;
      this.body[25].x = this.x8 + 10;
      this.body[26].y = -55;
      this.body[26].x = this.x8 + 15;
      this.wheel[32].y = -65;
      this.wheel[32].x = this.x8 + 45;
      this.wheel[33].y = -65;
      this.wheel[33].x = this.x8 - 5;
      this.wheel[34].y = -25;
      this.wheel[34].x = this.x8 + 45;
      this.wheel[35].y = -25;
      this.wheel[35].x = this.x8 - 5;

    }



    for (let i = 3; i <= 26; i++) {
      this.body[i].y += this.ydir2;
  

    }
    for (let i = 4; i <= 35; i++) {
      this.wheel[i].y += this.ydir2;
    }

  }




  show() {


    noStroke()
    fill(0);
    for (let i = 4; i <= 35; i++) {
      rect(this.wheel[i].x, this.wheel[i].y, 10, 10)
    }

    fill(this.r, this.g, this.b)
    rect(this.body[3].x, this.body[3].y, 50, 60)

    fill(this.r2, this.g2, this.b2)
    rect(this.body[6].x, this.body[6].y, 50, 60)

    fill(this.r3, this.g3, this.b3)
    rect(this.body[9].x, this.body[9].y, 50, 60)

    fill(this.r4, this.g4, this.b4)
    rect(this.body[12].x, this.body[12].y, 50, 60)

    fill(this.r5, this.g5, this.b5)
    rect(this.body[15].x, this.body[15].y, 50, 60)

    fill(this.r6, this.g6, this.b6)
    rect(this.body[18].x, this.body[18].y, 50, 60)

    fill(this.r7, this.g7, this.b7)
    rect(this.body[21].x, this.body[21].y, 50, 60)

    fill(this.r8, this.g8, this.b8)
    rect(this.body[24].x, this.body[24].y, 50, 60)



    fill(0)
    rect(this.body[4].x, this.body[4].y, 30, 40)
    rect(this.body[7].x, this.body[7].y, 30, 40)
    rect(this.body[10].x, this.body[10].y, 30, 40)
    rect(this.body[13].x, this.body[13].y, 30, 40)
    rect(this.body[16].x, this.body[16].y, 30, 40)
    rect(this.body[19].x, this.body[19].y, 30, 40)
    rect(this.body[22].x, this.body[22].y, 30, 40)
    rect(this.body[25].x, this.body[25].y, 30, 40)


    fill(this.r, this.g, this.b)
    rect(this.body[5].x, this.body[5].y, 20, 30)

    fill(this.r2, this.g2, this.b2)
    rect(this.body[8].x, this.body[8].y, 20, 30)

    fill(this.r3, this.g3, this.b3)
    rect(this.body[11].x, this.body[11].y, 20, 30)

    fill(this.r4, this.g4, this.b4)
    rect(this.body[14].x, this.body[14].y, 20, 30)

    fill(this.r5, this.g5, this.b5)
    rect(this.body[17].x, this.body[17].y, 20, 30)

    fill(this.r6, this.g6, this.b6)
    rect(this.body[20].x, this.body[20].y, 20, 30)

    fill(this.r7, this.g7, this.b7)
    rect(this.body[23].x, this.body[23].y, 20, 30)

    fill(this.r8, this.g8, this.b8)
    rect(this.body[26].x, this.body[26].y, 20, 30)

  }

  hits(player) {
    for (let i = 3; i <= 24; i += 3) {
      if (player.body[0].y < this.body[i].y + this.h && player.body[0].y + player.h > this.body[i].y) {
        if (player.body[0].x < this.body[i].x + this.w && player.body[0].x + player.w > this.body[i].x) {
          return true;
        }
      }
    }
  }

  overtakenBy(player) {
    for (let i = 3; i <= 24; i += 3) {
      if (player.body[0].y < this.body[i].y) {
        return true;
      }
    }
  }

}