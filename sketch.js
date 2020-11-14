var city,cityImage;
var ground;
var thief,thiefImage;
var police,policeImage;
var obstacle,obstaclesGroup;
var obstacle1,obstacle2,obtsacle3;
var obs;
var score;

function preload(){

  cityImage = loadImage("backgroundCity.jpg");
  thiefImage = loadImage("thief.png");
  policeImage = loadImage("policeman_PNG89033.png");
  obstacle1 = loadImage("fence.png");
  obstacle2 = loadImage("Hydrant.png");
  obstacle3 = loadImage("blocker.png");


}

function setup() {
  createCanvas(600,300);
  
  obstaclesGroup= new Group();
  
  city = createSprite(300,100);
  city.addImage(cityImage);
  city.velocityX = -5;
  
  ground = createSprite(300,270,600,10);
  ground.visible = false;
  
  thief = createSprite(200,250);
  thief.addImage(thiefImage);
  thief.scale=0.25;
  thief.setCollider("circle",0,0,120);
  
  police = createSprite(100,220);
  police.addImage(policeImage);
  police.scale=0.18;
  
  
  score = 0;
}

function draw() {
    
  obs = Math.round(random(1,3));
  
  if(city.x<160){
 city.x = city.width/2;
  }
  if(keyDown("space")&& thief.y>=230){
    thief.velocityY = -15;
  }  
  thief.velocityY = thief.velocityY+1;
  police.velocityY = police.velocityY+1;

if(obstaclesGroup.isTouching(thief)){
  obstaclesGroup.destroyEach();
  score = 0;
}
  
  thief.collide(ground);
  police.collide(ground);
  
  drawSprites();
  obstacles();
  score = score + Math.round(getFrameRate()/60);
  textSize(20);
  fill("black");
  text("Survival Time:"+score,250,50);

}
function obstacles(){
  if(frameCount%80===0){
  obstacle = createSprite(610,240);
  obstacle.velocityX=-5;
  obstacle.lifetime = 250;
    switch(obs){
    case 1:obstacle.addImage(obstacle1);
           obstacle.scale=0.18;
           break;
    case 2:obstacle.addImage(obstacle2);
          obstacle.scale=0.1;
           break;
    case 3:obstacle.addImage(obstacle3);
           obstacle.scale=0.1;
           break;
    default: break;
  }
  obstaclesGroup.add(obstacle);
  }
}