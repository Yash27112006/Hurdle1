var canvas, backgroundImage;

var gameState = 0;
var playerCount;
var allPlayers;
var distance = 0;
var database;

var form, player, game;

var men, man1, man2, man3, man4;

var  man1_img, man2_img, man3_img, man4_img;

function preload(){
  man1_img = loadImage("images/car1.png");
  man2_img = loadImage("images/car2.png");
  man3_img = loadImage("images/car3.png");
  man4_img = loadImage("images/car4.png");
  ground = loadImage("images/ground.png");
}

function setup(){
  canvas = createCanvas(displayWidth , displayHeight);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
}


function draw(){
  if(playerCount === 4){
    game.update(1);
  }
  if(gameState === 1){
    clear();
    game.play();
  }
  if(gameState === 2){
    game.end();
  }
}
