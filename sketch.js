var car1,car2,car3,car4,car5,road;

var bCar1,gCar1,pCar1,yCar1;
var blueCar,greenCar,pinkCar,yellowCar;
var carCG2,carCG3,carCG4,carCG5;
var car1Img,car2Img,car3Img,car4Img,car5Img,roadImg,gameOverImg;
var gameState = PLAY;
var gameOver, restart;
var distance=0;
var END =0;
var PLAY =1;

function preload(){
car1Img = loadImage("car-2030056.png");
car2Img = loadImage("greenCar.png");
car3Img = loadImage("bluecar.png");
car4Img = loadImage("pinkCar.png");
car5Img = loadImage("yellocar.png");
roadImg = loadImage("path.png");
gameOverImg = loadImage("gameOver.png");
}

function setup() {
createCanvas(400,400);
road = createSprite(200,150);
road.addImage(roadImg);
road.velocityY = -5;
road.scale

car1 = createSprite(70,150);
car1.scale=0.07;

 gameOver = createSprite(350,150);
 gameOver.addImage(gameOverImg);
 gameOver.scale = 0.8;
 gameOver.visible = false; 

carCG2 = new Group();
carCG3 = new Group();
carCG4 = new Group();
carCG5 = new Group();
 

 
}

function draw() {
   background(100);
   drawSprites();
   textSize(20);
    fill(255);
    text("Distance: "+ distance,900,30);
   if(gameState===PLAY){
        car1.addImage(car1Img);
        distance = distance + Math.round(getFrameRate()/50);
        
      road.velocityX = -(6 + 2*distance/150);
      
      car1.x= World.mouseX;
      
       edges= createEdgeSprites();
       car1 .collide(edges);
      
      
      if(road.x < 0 ){
        road.x = width/2;
      }
      
        
      var select_oppCar = Math.round(random(1,4));
      
      if (World.frameCount % 150 === 0) {
        if (select_oppCar === 1) {
                blueCar();
        }
    
        if (select_oppPlayer === 2) {
                greenCar();
        }
    
        else if (select_oppPlayer === 3) {
                yellowCar;
        }
        else {
                pinkCar();
        }
      }
    
     
      
      if(carCG2.isTouching(car1)){
         gameState = END;
         bCar1.velocityY = 0;
         
        }
        
        if(carCG3.isTouching(car1)){
          gameState = END;
          gCar1.velocityY = 0;
         
        }
        
        if(carCG4.isTouching(car1)){
          gameState = END;
          pCar1.velocityY = 0;
         
        }
        
        if(carCG5.isTouching(car1)){
          gameState = END;
          yCar1.velocityY = 0;
                
              }
      }
      
    
      else if (gameState === END) {
          gameOver.visible = true;
          
          text("press UP ARROW to reset the game" ,200,250);
          if (keyDown("up_arrow")){
            reset();
          }
           
         road.velocityX = 0;
          car1.velocityY = 0;
          
          
        
          carCG2.setVelocityXEach(0);
          carCG2.setLifetimeEach(-1);
        
          carCG3.setVelocityXEach(0);
          carCG3.setLifetimeEach(-1);
        
          carCG4.setVelocityXEach(0);
          carCG4.setLifetimeEach(-1);

          carCG5.setVelocityXEach(0);
          carCG5.setLifetimeEach(-1);
      }
      
    
    
    
    }
    


function blueCar(){
        bCar1 =createSprite(1100,Math.round(random(50, 250)));
        bCar1.scale =0.06;
        bCar1.velocityX = -(6 + 2*distance/150);
        bCar1.addImage(car2Img);
        bCar1.lifetime=170;
        carCG2.add(bCar1);
}

function greenCar(){
        gCar1=createSprite(1100,Math.round(random(50, 250)));
        gCar1.scale =0.06;
        gCar1.velocityX = -(6 + 2*distance/150);
        gCar1.addImage(car3Img);
        gCar1.lifetime=170;
        carCG3.add(gCar1);
}

function pinkCar(){
        pCar1 =createSprite(1100,Math.round(random(50, 250)));
        pCar1.scale =0.06;
        pCar1.velocityX = -(6 + 2*distance/150);
        pCar1.addImage(car4Img);
        pCar1.lifetime=170;
        carCG4.add(pCar1);
}

function yellowCar(){
        yCar1 =createSprite(1100,Math.round(random(50, 250)));
        yCar1.scale =0.06;
        yCar1.velocityX = -(6 + 2*distance/150);
        yCar1.addImage(car5Img);
        yCar1.lifetime=170;
        carCG5.add(yCar1);
}

function reset(){
        gameState=PLAY;
        gameOver.visible=false;
        
        carCG2.destroyEach();
        carCG3.destroyEach();
        carCG4.destroyEach();
        carCG5.destroyEach();
        
     }

