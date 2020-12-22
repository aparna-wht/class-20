var fixedRect,movingRect;
function setup() {
  createCanvas(800,400);
  fixedRect = createSprite(200, 200, 50, 80);
  movingRect = createSprite(400,200,80,30);
  fixedRect.shapeColor = "green";
  movingRect.shapeColor = "green";
}

function draw() {
  background(255,255,255); 
  movingRect.x = mouseX;
  movingRect.y = mouseY; 
  console.log("1st " +(movingRect.x-fixedRect.x));
  console.log("2nd "+(fixedRect.width/2+movingRect.width/2));
  if((movingRect.x-fixedRect.x) < (fixedRect.width/2+movingRect.width/2))
  {
    movingRect.shapeColor="red";
    fixedRect.shapeColor="red";
  }
  else{
    movingRect.shapeColor="green";
    fixedRect.shapeColor="green";
  }
  drawSprites();
}