class Controller {

  controlKey() {

    if (keyIsDown(UP_ARROW)) {
      if(clicked  == 1) { mod.easySpeedMode();}
      if(clicked  == 2) { mod.normalSpeedMode();}
      if(clicked  == 3) { mod.hardSpeedMode();}
      player.up();
    }

    if (keyIsDown(DOWN_ARROW)) {
      player.down();
    }

    if (keyIsDown(LEFT_ARROW)) {
      player.turnLeft();
    }

    if (keyIsDown(RIGHT_ARROW)) {
      player.turnRight();
    }

  }

  controlGame() {

    if (opponent.hits(player)) {
      end_game = true;
      start_game = false;

    }

    if (end_game == true) {

      score.position(400, 245);
      score.style('color', "BLACK");
      score.html(player.score);
      gameOverPage.show();
      score.show();
      player.againDraw();
      opponent.againDraw();
      tree.againDraw();
      brokenLine.againDraw()
    }
  }

}


function keyPressed() {

  if (keyCode === UP_ARROW && end_game == false) {
    start_game = true;

    button_hard.style('display', 'none');

    button_normal.style('display', 'none');

    button_easy.style('display', 'none');

  }
  if (keyCode === 32 && end_game == true) {
    player.score = 0;
    end_game = false;
    introPage.show();
    score.hide();

    button_hard.style('display', 'block');

    button_normal.style('display', 'block');

    button_easy.style('display', 'block');

    


  }
}