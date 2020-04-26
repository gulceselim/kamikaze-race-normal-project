let start_game = false;
let end_game = false;
var scoreElem = 0;
let tree,roadLine,grass,player,opponent,brokenLine,introPage,gamePage,gameOverPage;

function setup() {
  createCanvas(845, 600);
  roadLine = new RoadLine();
  grass = new Grass();
  player = new Player();
  opponent = new Opponent();
  brokenLine = new BrokenLine();
  tree = new Tree();
  introPage = new IntroPage();
  gamePage = new GamePage();
  gameOverPage = new GameOverPage();

  score = createDiv('Score = 0');
  score.position(625, 5);
  score.id = 'score';
  score.style('color', "#FFD700");

}


function draw() {

  introPage.show();
  gamePage.show();

  if (opponent.hits(player)) {
      end_game = true;
    }
    if (opponent.overtakenBy(player)) {
      let prevScore = parseInt(score.html().substring(8));
      score.html('Score = ' + (prevScore + 1));
    }
    if (end_game == true) {
      noLoop();
      const scoreVal = parseInt(score.html().substring(8));
      score.position(400, 245);
      score.style('color', "BLACK");
      score.html(scoreVal);
      gameOverPage.show();
    }
  

}
