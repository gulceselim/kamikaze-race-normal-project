class GameOverPage {

  show() {

    if (end_game) {
      
      background(0);
      textSize(32);
      fill(255, 215, 0);
      text('Game Over', 305, 200);

      textSize(17);
      fill(255, 215, 0);
      rect(325, 230, 120, 50, 10)
      fill(0);
      text('Puan : ', 335, 260);
      
      textSize(17);
      fill(255, 215, 0);
      rect(210, 300, 370, 50, 10)
      fill(0);
      text('Anasayfaya dönmek için SPACE tuşuna basınız.', 220, 330);
      
    }
  }
}