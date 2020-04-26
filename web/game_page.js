class GamePage{
  show() {
    if (start_game && end_game == false) {
      background(100);
      roadLine.show()

      grass.show()

      brokenLine.update()
      brokenLine.show()


      player.show()

      opponent.update()
      opponent.show()

      tree.update()
      tree.show()
    }

    if (keyIsDown(UP_ARROW)) {
      brokenLine.setDir(13)
      tree.setDir(13)
      opponent.setDirOfline(10)
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
}


function keyPressed() {
  if (keyCode === UP_ARROW) {
    end_game = false;
    start_game = true;
  }
}