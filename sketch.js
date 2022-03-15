var a 

function setup() {
  createCanvas(400,400);
  a = createSprite(200,200,30,30);
}

function draw() 
{
  background(30);
  if (keyIsDown(RIGHT_ARROW)){
    a.position.x += 5
  }
  if (keyIsDown(LEFT_ARROW)){
    a.position.x -= 5
  }
drawSprites();
}




