var x, startPoint,endPoint;

function setup()
{
background(0);
  createCanvas(1600,800);
  x=width/12;
  fill(255);
  rect(width/12,height/12,width/4,height/4);
  startPoint=0;
}

function draw()
{
  x++;
  text(x,50,50);
  text(startPoint,50,100);
  stroke(255);
  line(x,height/12,x,height/3);
  if (x>width/3){x=width/12};
  if (x==startPoint){fill(255);ellipse(width/2,height/2,100,100);};
}

function touchStarted(){
  fill(255,255,255);
  ellipse(mouseX,mouseY,50,50)
  startPoint=mouseX;
}

function touchEnded(){
  fill(255);
  rect(mouseX,mouseY,50,50)
  endPoint=mouseX;

}
