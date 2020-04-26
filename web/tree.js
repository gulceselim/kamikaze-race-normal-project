class Tree {
  constructor(){
    this.govde = [];
    this.dal = [];

    this.govde[0] = createVector(42.5, -80)
    this.govde[1] = createVector(42.5, 70)
    this.govde[2] = createVector(42.5, 220)
    this.govde[3] = createVector(42.5, 370)
    this.govde[4] = createVector(42.5, 520)

    this.govde[5] = createVector(787.5, -80)
    this.govde[6] = createVector(787.5, 70)
    this.govde[7] = createVector(787.5, 220)
    this.govde[8] = createVector(787.5, 370)
    this.govde[9] = createVector(787.5, 520)

    this.dal[0] = createVector(50, -80)
    this.dal[1] = createVector(50, 70)
    this.dal[2] = createVector(50, 220)
    this.dal[3] = createVector(50, 370)
    this.dal[4] = createVector(50, 520)

    this.dal[5] = createVector(795, -80)
    this.dal[6] = createVector(795, 70)
    this.dal[7] = createVector(795, 220)
    this.dal[8] = createVector(795, 370)
    this.dal[9] = createVector(795, 520)

    this.ydir = 0;

  }
  setDir(y) {
    this.ydir = y;
  }

  update() {

      if (this.dal[0].y == 674) {
        this.dal[0].y = -80;
      }
     if (this.dal[1].y == 681 || this.dal[1].y == 674) {
        this.dal[1].y = -80;
      }
    if (this.dal[2].y == 675 || this.dal[2].y == 674) {
        this.dal[2].y = -80;
      }
    if (this.dal[3].y == 682 || this.dal[3].y == 674) {
        this.dal[3].y = -80;
    }
    if (this.dal[4].y == 676 || this.dal[4].y == 674) {
        this.dal[4].y = -80;
      }
    if (this.dal[5].y == 674) {
        this.dal[5].y = -80;
      }
    if (this.dal[6].y == 681 || this.dal[6].y == 674) {
        this.dal[6].y = -80;
      }
    if (this.dal[7].y == 675 || this.dal[7].y == 674) {
        this.dal[7].y = -80;
      }
    if (this.dal[8].y == 682 || this.dal[8].y == 674) {
        this.dal[8].y = -80;
      }
    if (this.dal[9].y == 676 || this.dal[9].y == 674) {
        this.dal[9].y = -80;
      }
    
    
    
    
    
     if (this.govde[0].y == 670 || this.govde[0].y == 674) {
        this.govde[0].y = -80;
      }
     if (this.govde[1].y == 681 || this.govde[1].y == 674) {
        this.govde[1].y = -80;
      }
    if (this.govde[2].y == 675 || this.govde[2].y == 674) {
        this.govde[2].y = -80;
      }
    if (this.govde[3].y == 682 || this.govde[3].y == 674) {
        this.govde[3].y = -80;
      }
    if (this.govde[4].y == 676 || this.govde[4].y == 674) {
        this.govde[4].y = -80;
      }
    if (this.govde[5].y == 674) {
        this.govde[5].y = -80;
      }
    if (this.govde[6].y == 681 || this.govde[6].y == 674) {
        this.govde[6].y = -80;
      }
    if (this.govde[7].y == 675 || this.govde[7].y == 674) {
        this.govde[7].y = -80;
      }
    if (this.govde[8].y == 682 || this.govde[8].y == 674) {
        this.govde[8].y = -80;
      }
    if (this.govde[9].y == 676 || this.govde[9].y == 674) {
        this.govde[9].y = -80;
      }
  
    

    for (let i = 0; i <= 9; i++) {
      this.dal[i].y += this.ydir;

      this.govde[i].y += this.ydir;


    }

  }

  show() {
    fill(139, 69, 19)
    for (let i = 0; i <= 9; i++) {

      rect(this.govde[i].x, this.govde[i].y, 15, 60)
    }

    fill(0, 100, 0)
    for (let i = 0; i <= 9; i++) {
      circle(this.dal[i].x, this.dal[i].y, 50);
    }

  }

}