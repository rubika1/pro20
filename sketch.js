var car,wall
var speed,weight


function setup() {
  createCanvas(1600,400);
  createSprite(400, 200, 50, 50);

  speed=random(55,90);
  weight=random(400,1500);

  car=createSprite(50,200,50,50);
  wall=createSprite(1500,200,60,height/2);

  car.velocityX=speed
}

function draw() {
  background(0);  
  if(wall.X-car.X<(car.width+wall.width)/2){
    car.velocityX=0
    var deformation=0.5*weight*speed*speed/22500

    if(deformation>180){
      car.shapeColour="red";
      wall.shapeColour="white"
    }

    if(deformation<180 && deformation>100){
      car.shapeColour="yellow"
      wall.shapeColour="white"
    }

    if(deformation<100 ){
      car.shapeColour="green";
      wall.shapeColour="white"
    }
  }
  drawSprites();
}