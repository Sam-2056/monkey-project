var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score

function preload(){
  
monkey_running =           loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstaceImage = loadImage("obstacle.png");
 
}

function setup() {
  createCanvas(windowWidth,windowHeight)
  
  var survivalTime=0
 
  monkey = createSprite(150,height-200,20,50);
  monkey.addAnimation("monkey", monkey_running);
  monkey.scale = 0.2;

  ground = createSprite(width/2,height-70,width*2,20);
  ground.x = ground.width /2;
  ground.velocityX = -4;
  
  obstaclesGroup = new Group();
  bannasGroup = new Group();
}

spawnBanna();

function draw() {
  background("white")

 //console.log(monkey.y)
  
  if(frameCount % 80 === 0){
    bannasGroup();
}
  
  if(keyDown("space")) {
    monkey.velocityY = -12;
  
  }
    monkey.velocityY = monkey.velocityY + 0.8
      if (ground.x < 0){
    ground.x = ground.width/2;
  }

  monkey.collide(ground);
  
 drawSprites();

  stroke("black");
  textSize(20);
  fill("black");
  survivalTime=Math.ceil(frameCount/frameRate())
  text("Survival Time: "+survivalTime,100,50)
}

function spawnBanna(){
if (frameCount%60===0){
banna = createSprite(width+20,height,20,50);
banna.velocityX = -4;
var rand = Math.round(random(100,600));
banna.y = rand;
banna.addImage("banna",bannaImage);
//console.log (banna.depth)
banna.depth = monkey.depth;
trex.depth = monkey.depth +1
banna.lifetime = 220
}
bannasGroup.add(banna);
}


