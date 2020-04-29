class BrokenLine {
  constructor(){
  this.cizgi = [];

  this.againDraw();
    
  }

  setDir(y) {
    this.ydir = y;
  }
  
  againDraw(){
    
    this.cizgi[0] = createVector(227, -80);
    this.cizgi[1] = createVector(227, 70);
    this.cizgi[2] = createVector(227, 220);
    this.cizgi[3] = createVector(227, 370);
    this.cizgi[4] = createVector(227, 520);


    this.cizgi[5] = createVector(344, -80);
    this.cizgi[6] = createVector(344, 70);
    this.cizgi[7] = createVector(344, 220);
    this.cizgi[8] = createVector(344, 370);
    this.cizgi[9] = createVector(344, 520);

    this.cizgi[10] = createVector(461, -80);
    this.cizgi[11] = createVector(461, 70);
    this.cizgi[12] = createVector(461, 220);
    this.cizgi[13] = createVector(461, 370);
    this.cizgi[14] = createVector(461, 520);

    this.cizgi[15] = createVector(578, -80);
    this.cizgi[16] = createVector(578, 70);
    this.cizgi[17] = createVector(578, 220);
    this.cizgi[18] = createVector(578, 370);
    this.cizgi[19] = createVector(578, 520);

    this.ydir = 0;
    
  }
  
  easyMode(){
     for (let i = 0; i <= 19; i += 1) {
      if (this.cizgi[i].y == 670 || this.cizgi[i].y == 676) {
        this.cizgi[i].y = -80;
      }
    }

    for (let i = 0; i <= 19; i++) {
      this.cizgi[i].y += this.ydir;
      
    }
  }
  normalMode() {

    for (let i = 0; i <= 15; i += 5) {
      if (this.cizgi[i].y == 674) {
        this.cizgi[i].y = -80;
      }
    }
    
     for (let i = 1; i <= 16; i += 5) {
       if (this.cizgi[i].y == 681 || this.cizgi[i].y == 674) {
        this.cizgi[i].y = -80;
      }
    }
    
     for (let i = 2; i <= 17; i += 5) {
      if (this.cizgi[i].y == 675 || this.cizgi[i].y == 674) {
        this.cizgi[i].y = -80;
      }
    }
      
    for (let i = 3; i <= 18; i += 5) {
      if (this.cizgi[i].y == 682 || this.cizgi[i].y == 674) {
        this.cizgi[i].y = -80;
      }
    }
     for (let i = 4; i <= 19; i += 5) {
      if (this.cizgi[i].y == 676 || this.cizgi[i].y == 674) {
        this.cizgi[i].y = -80;
      }
    }
  
    for (let i = 0; i <= 19; i++) {
      this.cizgi[i].y += this.ydir;
      
    }

  }
  hardMode(){
    for (let i = 0; i <= 19; i += 1) {
      if (this.cizgi[i].y == 670) {
        this.cizgi[i].y = -80;
      }
    }


    for (let i = 0; i <= 19; i++) {
      this.cizgi[i].y += this.ydir;
    }

  }
  
  
  show() {
    
    fill(255)

    for (let i = 0; i <= 19; i++) {
      rect(this.cizgi[i].x, this.cizgi[i].y, 20, 80);
    }
  }
}