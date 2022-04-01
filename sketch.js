var space,ship,cow,sheep,goat,asteroid;
var spaceImg,shipImg,cowImg,sheepImg,goatImg,asteroidImg,endImg;
var treasureCollection = 0;
var cowG,diamondsG,goatG,asteroidGroup;

//Game States
var PLAY=1;
var END=0;
var gameState=1;

function preload(){
  spaceImg = loadImage("space.png");
  shipImg = loadImage("spaceship.png");
  cowImg = loadImage("cow.png");
  sheepImg = loadImage("sheep.png");
  goatImg = loadImage("goat.png");
  asteroidImg = loadImage("asteroid.png");
  endImg =loadImage("explosion.png");
}

function setup(){
  
  createCanvas(400,600);
// Moving background
space=createSprite(200,200);
space.addImage(spaceImg);
space.velocityY = 4;
space.scale = 4.3


//creating boy running
ship = createSprite(70,580,20,20);
ship.addImage(shipImg);
ship.scale = 0.5;
  
  
cowG=new Group();
sheepG=new Group();
goatG=new Group();
asteroidGroup=new Group();

}

function draw() {

  if(gameState===PLAY){
  background(0);
  ship.x = World.mouseX;
  
  edges= createEdgeSprites();
  ship.collide(edges);
  
  //code to reset the background
  if(space.y > 400 ){
    space.y = height/2;
  }
  
    createCow();
    createSheep();
    createGoat();
    createAsteroid();

    if (cowG.isTouching(ship)) {
      cowG.destroyEach();
      treasureCollection=treasureCollection+50;
    }
    else if (sheepG.isTouching(ship)) {
        sheepG.destroyEach();
      treasureCollection=treasureCollection+100;
      
    }else if(goatG.isTouching(ship)) {
        goatG.destroyEach();

     
      treasureCollection= treasureCollection + 150;
      
    }else{
      if(asteroidGroup.isTouching(ship)) {
        gameState=END;
        
        
         ship.addImage(endImg);
        

        ship.x=200;
        ship.y=300;
        ship.scale=0.6;
        
        
        
        cowG.destroyEach();
        sheepG.destroyEach();
       goatG.destroyEach();
       asteroidGroup.destroyEach();
         
        
    
        
        cowG.setVelocityYEach(0);
        sheepG.setVelocityYEach(0);
        goatG.setVelocityYEach(0);
        asteroidGroup.setVelocityYEach(0);
     
    }
  }
  
  drawSprites();
  textSize(20);
  fill(255);
  text("Treasure: "+ treasureCollection,10,30);
  }

}

function createCow() { 
  if (World.frameCount % 200 == 0) {
  var cow = createSprite(Math.round(random(50, 350),40, 10, 10));
  cow.addImage(cowImg);
  cow.scale=0.3;
  cow.velocityY = 3;
  cow.lifetime = 170;
  cowG.add(cow);
  }
}

function createSheep() {
  if (World.frameCount % 320 == 0) {
  var sheep = createSprite(Math.round(random(50, 350),40, 10, 10));
  sheep.addImage(sheepImg);
  sheep.scale=0.3;
  sheep.velocityY = 3;
  sheep.lifetime = 170;
  sheepG.add(sheep);
}
}

function createGoat() {
  if (World.frameCount % 410 == 0) {
  var goat = createSprite(Math.round(random(50, 350),40, 10, 10));
  goat.addImage(goatImg);
  goat.scale=0.30;
  goat.velocityY = 3;
  goat.lifetime = 170;
  goatG.add(goat);
  }
}

function createAsteroid(){
  if (World.frameCount % 530 == 0) {
  var asteroid = createSprite(Math.round(random(50, 350),40, 10, 10));
  asteroid.addImage(asteroidImg);
  asteroid.scale=0.25;
  asteroid.velocityY = 3;
  asteroid.lifetime = 150;
  asteroidGroup.add(asteroid);
  }
}