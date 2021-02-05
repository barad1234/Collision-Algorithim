var fixedRect, movingRect;

function setup() {
  createCanvas(800,400);
  fixedRect = createSprite(400, 200, 90, 90);
  fixedRect.shapeColor="yellow";
  fixedRect.debug = true;
  movingRect = createSprite(200, 200, 50, 100);
  movingRect.shapeColor="black"
  movingRect.debug = true; 
}

function draw() {
  background(255,255,255); 
  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;
   
if(movingRect.x - fixedRect.x < fixedRect.width/2 + movingRect.width/2
  && fixedRect.x - movingRect.x < fixedRect.width/2 + movingRect.width/2
  && movingRect.y - fixedRect.y < fixedRect.height/2 + movingRect.height/2
  && fixedRect.y - movingRect.y < fixedRect.height/2 + movingRect.height/2)
{
 movingRect.shapeColor="red";
 fixedRect.shapeColor="red";
}
else
{
 movingRect.shapeColor="black";
 fixedRect.shapeColor="yellow";
}

  drawSprites();
}