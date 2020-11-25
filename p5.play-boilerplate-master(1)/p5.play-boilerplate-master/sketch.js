
var speed, weight, bullet, thickness, wall, deformation;

function setup() {
  createCanvas(1600,400);
  speed=245
  thickness=random(22,83)
  weight=random(30,52);
  bullet=createSprite(50, 200, 80, 20);
  wall=createSprite(1500, 200, thickness, height/2);
  wall.shapeColor="white"
  bullet.velocityX=speed;
  bullet.shapeColor=(192,192,192)
  console.log(speed)
}

function draw() {

  background("black");  
  if (collided(bullet,wall)){
    bullet.velocityX=0;
    deformation=.5*weight*speed*speed/(thickness*thickness*thickness)
    console.log(deformation)
    if (deformation<=10){
      wall.shapeColor="lime"
    }
    else if (deformation>10){
      wall.shapeColor="red"
    }
    else {
      wall.shapeColor=(192,192,192)
    }
  }
  

  drawSprites();
}
function collided(object1,object2){
  if(object1.x-object2.x<=object2.width/2+object1.width/2 && 
    object2.x-object1.x<object2.width/2+object1.width/2 &&
    object1.y-object2.y<object2.height/2+object1.height/2 &&
    object2.y-object1.y<object2.height/2+object1.height/2){
      return true
    }
    else {
      return false
    }
}