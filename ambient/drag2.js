var x=0;
var y1=height/2;
var y2=height/2;
var y3=height/2;
var y4=height/2;

function preload() {
  song1 = loadSound("voice1.mp3");
  song2 = loadSound("clap.mp3");
}

function setup() {
  createCanvas(2000, 2000);
    background(0);
/*
    fill(200);
    rect (0,0,width/4,height);
    fill(150);
    rect (width/4,0,width/4,height);
    fill(100);
    rect (width/2,0,width/4,height);
    fill(50);
    rect ((3*width)/4,0,width/4,height);
*/

}

function draw()
{

background(0);
  ellipse (width/8,y1,width/4,height/4);
  ellipse (3*width/8,y2,width/4,height/4);
  ellipse (5*width/8,y3,width/4,height/4);
  ellipse ((7*width)/8,y4,width/4,height/4);
}

function touchStarted(){
  if (mouseX<width/4){song1.play();y1=mouseY;song1.rate((height-y1)/1000);}
  if (mouseX>width/4&&mouseX<width/2){song1.play();y2=mouseY;song1.rate((height-y2)/1000);}
  if ((mouseX>width/2&&mouseX<(3*width)/4)){song1.play();y3=mouseY;song1.rate((height-y3)/1000);}
  if (mouseX>(3*width)/4){song1.play();y4=mouseY;song1.rate((height-y4)/1000);}
  return false;
  }

  function touchMoved(){
    if (mouseX<width/4){song1.play();y1=mouseY;song1.rate((height-y1)/1000);}
    if (mouseX>width/4&&mouseX<width/2){song1.play();y2=mouseY;song1.rate((height-y2)/1000);}
    if ((mouseX>width/2&&mouseX<(3*width)/4)){song1.play();y3=mouseY;song1.rate((height-y3)/1000);}
    if (mouseX>(3*width)/4){song1.play();y4=mouseY;song1.rate((height-y4)/1000);}
    return false;
    }
