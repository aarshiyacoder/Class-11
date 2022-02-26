var path,pathImage
var runner
var boy

function preload(){
  pathImage = loadImage("path.png");
  runner = loadAnimation("Runner-1.png","Runner-2.png");
}

function setup(){
  
  createCanvas(400,400);
  
// Moving background
path=createSprite(200,200);
path.addImage(pathImage);
path.velocityY = 4;
path.scale=1.2;

//creating boy running
boy = createSprite(200,370);
boy.scale=0.09;
boy.addAnimation("running",runner);
  

leftBoundary=createSprite(70,200,10,400);
 leftBoundary.visible = false;
rightBoundary=createSprite(340,220,10,400);
rightBoundary.visible = false;
}

function draw() {
  background(0);
  path.velocityX = 3;
  boy.x = World.mouseX;
  
  boy.collide(leftBoundary);
  boy.collide(rightBoundary);
  
  

  if(path.y > 400 ){
    path.y = height/2;
  }

  
  
  drawSprites();
}
