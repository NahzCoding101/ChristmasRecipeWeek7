var bg,bg2,form,system,code,security;
var score=0;

function preload() {
  bg = loadImage("CookQuiz.jpg");
  bg2 = loadImage("PoshFood.jpg");
}

function setup() {
  createCanvas(1000,500);
  system = new System();
  security = new Security();
}

function draw() {
  background(bg);
  clues();
  security.display();
  textSize(20);
  fill("white");
  text("Score: " + score, 450, 50);

  if(score === 3) {
    clear()
    background(bg2)
    fill("white")
    textSize(30);
    text("Congratulations, You're a proffesional chef",100, 250);
  }

  drawSprites()
}