class GamePage{
  
  show() {
    
    if (start_game && end_game == false) {
      background(100);
      roadLine.show();

      grass.show();

      if(clicked  == 1) { mod.easyMode();}
      if(clicked  == 2) { mod.normalMode();}
      if(clicked  == 3) { mod.hardMode();}
        
      brokenLine.show();

      player.show();

      opponent.show();

      tree.show();
      
      player.score += 1;
      score.hide();
      
    }
    
    control.controlKey();

  }
}

