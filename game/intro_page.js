class IntroPage {

  show() {

    background(100);

    roadLine.show();
    grass.show();
    brokenLine.show();
    opponent.show();
    tree.show();
    this.againDraw();


  }

  againDraw() {
    if (start_game == false) {
      this.col = color(255, 215, 0);
      fill(0);
      rect(385, 515, 10, 10);
      rect(385, 555, 10, 10);
      rect(435, 515, 10, 10);
      rect(435, 555, 10, 10);
      fill(139, 0, 0);
      rect(390, 510, 50, 60);
      fill(0);
      rect(400, 520, 30, 40);
      fill(139, 0, 0);
      rect(405, 525, 20, 30);


      textSize(32);
      fill(this.col);
      rect(222, 85, 380, 50, 10);
      fill(0);
      text('K A M İ K A Z E  R A C E', 232, 122.5);

      textSize(11);
      fill(this.col);
      rect(282, 310, 255, 50, 10);
      fill(0);
      text('Oyunu başlatmak için yukarı ok "↑" tuşuna basınız.', 292, 340);

      fill(this.col);
      textSize(20);
      rect(385, 190, 50, 50, 10);
      fill(0);
      text('↑', 404.5, 220);

      fill(this.col);
      textSize(20);
      rect(385, 245, 50, 50, 10);
      fill(0);
      text('↓', 403.5, 275);

      fill(this.col);
      textSize(20);
      rect(440, 245, 50, 50, 10);
      fill(0);
      text('→', 452.5, 277.5);

      fill(this.col);
      textSize(20);
      rect(330, 245, 50, 50, 10);
      fill(0);
      text('←', 345, 277.5);



      if(clicked == 1){button_easy.style('background-color', col2);}
      else {button_easy.style('background-color', this.col);}
      button_easy.style('font-size', '15px');
      button_easy.style('border-radius', '10px');
      button_easy.style('padding', '8px 20px');
      button_easy.style('cursor', 'pointer');
      button_easy.style('border', 'none');
      button_easy.position(285, 380);
      button_easy.mousePressed();

      if(clicked == 2){button_normal.style('background-color', col2);}
      else {button_normal.style('background-color', this.col);}
      button_normal.style('font-size', '15px');
      button_normal.style('border-radius', '10px');
      button_normal.style('padding', '8px 23px');
      button_normal.style('cursor', 'pointer');
      button_normal.style('border', 'none');
      button_normal.position(375, 380);
      button_normal.mousePressed();

      if(clicked == 3){button_hard.style('background-color', col2);}
      else {button_hard.style('background-color', this.col);}
      button_hard.style('font-size', '15px');
      button_hard.style('border-radius', '10px');
      button_hard.style('padding', '8px 25px');
      button_hard.style('cursor', 'pointer');
      button_hard.style('border', 'none');
      button_hard.position(465, 380);
      button_hard.mousePressed();

    }
  }
}