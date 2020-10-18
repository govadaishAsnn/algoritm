var movingRect,fixedRect;




function setup() {
  createCanvas(800,400);
  movingRect = createSprite(200,350,100,150);
  fixedRect= createSprite(300,100,100,50);



  
}

function draw() {
  background("blue");
  movingRect.x=mouseX;
  movingRect.y=mouseY;
  if(fixedRect.x-movingRect.x<movingRect.width/2+fixedRect.width/2 &&
    movingRect.x-fixedRect.x<movingRect.width/2+fixedRect.width/2 &&
    movingRect.y-fixedRect.y<movingRect.height/2+fixedRect.height/2 &&
    fixedRect.y-movingRect.y<movingRect.height/2+fixedRect.height/2){
    movingRect.shapeColor="lightgreen";  
    fixedRect.shapeColor="lightblue";
  }

  else{
    movingRect.shapeColor="red";  
    fixedRect.shapeColor="orange";
  }


  drawSprites();
}





