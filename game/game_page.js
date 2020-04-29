class GamePage{
  
  show() {
    
    if (start_game && end_game == false) {
      background(100);
      roadLine.show();

      grass.show();

      if(clicked  == 1) { mod.easyMode();player.score += 0.005;}
      if(clicked  == 2) { mod.normalMode();player.score += 0.0075;}
      if(clicked  == 3) { mod.hardMode();player.score += 0.01;}
        
      brokenLine.show();

      player.show();

      opponent.show();

      tree.show();
      
      score.hide();
      
    }
    
    control.controlKey();

  }
}

