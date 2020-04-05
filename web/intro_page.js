function IntroPage() {

  this.show = function() {
    background(100);
    roadLine.show()
    grass.show()
    brokenLine.show()
    opponent.show()
    tree.show()
    
    fill(0);
    rect(385, 515, 10, 10)
    rect(385, 555, 10, 10)
    rect(435, 515, 10, 10)
    rect(435, 555, 10, 10)
    fill(139, 0, 0);
    rect(390, 510, 50, 60)
    fill(0)
    rect(400, 520, 30, 40)
    fill(139, 0, 0);
    rect(405, 525, 20, 30)
    

    textSize(32);
    fill(255, 215, 0);
    rect(222, 85, 380, 50, 10);
    fill(0);
    text('K A M İ K A Z E  R A C E', 232, 122.5);

    textSize(11);
    fill(255, 215, 0);
    rect(275, 310, 255, 50, 10)
    fill(0);
    text('Oyunu başlatmak için yukarı ok "↑" tuşuna basınız.', 285, 340);
    
    fill(255, 215, 0);
    textSize(20);
    rect(380, 190, 50, 50, 10)
    fill(0);
    text('↑', 399.5, 220);
    
    fill(255, 215, 0);
    textSize(20);
    rect(380, 245, 50, 50, 10)
    fill(0);
    text('↓', 398.5, 275);
    
    fill(255, 215, 0);
    textSize(20);
    rect(435, 245, 50, 50, 10)
    fill(0);
    text('→', 447.5, 277.5);
    
    fill(255, 215, 0);
    textSize(20);
    rect(325, 245, 50, 50, 10)
    fill(0);
    text('←', 340, 277.5);
    
  }
}