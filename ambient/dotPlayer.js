var x=0;

function setup() {
  createCanvas(2000, 2000);
    background(0);
}

function draw()
{
  x=x+1;
  fill(255-10*x);
  ellipse(mouseX,mouseY,30,30);
  textSize(256);
  text("dot dot dot dot",width/2-300,200);
}

function mouseDragged(){
  //fill(255-x);

  ellipse(mouseX,mouseY,30,30);
  }

  function mouseReleased(){
    x=0;
    }
