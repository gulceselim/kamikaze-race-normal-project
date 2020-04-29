class Mods {
  
  easyMode() {
    tree.easyMode();
    opponent.easyMode();
    brokenLine.easyMode();
    

  }

  normalMode() {
    tree.normalMode();
    opponent.normalMode();
    brokenLine.normalMode();
    
  }


  hardMode() {
    tree.hardMode();
    opponent.hardMode();
    brokenLine.hardMode();
    
  }

  easySpeedMode() {
    brokenLine.setDir(12)
    tree.setDir(12)
    opponent.setDirOfline(9)
  }

  normalSpeedMode() {
    brokenLine.setDir(13)
    tree.setDir(13)
    opponent.setDirOfline(10)
  }

  hardSpeedMode() {
    brokenLine.setDir(15)
    tree.setDir(15)
    opponent.setDirOfline(12)
  }
  
  controlEasyMode(){
    
    button_easy.style('background-color', col2);
    clicked = 1;
    print(clicked)
  }
  
  controlNormalMode(){
    clicked = 2
  }
  
  controlHardMode(){
    clicked = 3;
  }
  
  
  
  
  
  
  
  
  
}