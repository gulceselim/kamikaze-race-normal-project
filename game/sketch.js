let start_game = false;
let end_game = false;
var scoreElem = 0,clicked = 2;
let button_easy, button_normal, button_hard, col, col2;
let tree, roadLine, grass, player, opponent, brokenLine, introPage, gamePage, gameOverPage, score;


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
  control = new Controller();
  mod = new Mods();
  score = createDiv();
  button_easy = createButton('Kolay');
  button_normal = createButton('Orta');
  button_hard = createButton('Zor');
  col2 = color(148, 125, 0);
}


function draw() {

  introPage.show();
  gamePage.show();
  control.controlGame();

  button_easy.mousePressed(mod.controlEasyMode);
  button_normal.mousePressed(mod.controlNormalMode);
  button_hard.mousePressed(mod.controlHardMode);
}