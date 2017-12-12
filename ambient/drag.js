var x=0;

function preload() {
  song1 = loadSound("voice1.mp3");
  song2 = loadSound("clap.mp3");
}

function setup() {
  createCanvas(2000, 2000);
    background(0);

    fill(200);
    rect (0,0,width/4,height);
    fill(150);
    rect (width/4,0,width/4,height);
    fill(100);
    rect (width/2,0,width/4,height);
    fill(50);
    rect ((3*width)/4,0,width/4,height);
}

function draw()
{

}

function touchStarted(){
  if (mouseX<width/4){song1.play();song1.rate(0.25);}
  if (mouseX>width/4&&mouseX<width/2){song1.play();song1.rate(0.5);}
  if ((mouseX>width/2&&mouseX<(3*width)/4)){song1.play();song1.rate(0.75);}
  if (mouseX>(3*width)/4){song1.play();song1.rate(1);}
  return false;
  }

  function touchMoved(){
    if (mouseX<width/4){song1.play();song1.rate(0.25);}
    if (mouseX>width/4&&mouseX<width/2){song1.play();song1.rate(0.5);}
    if ((mouseX>width/2&&mouseX<(3*width)/4)){song1.play();song1.rate(0.75);}
    if (mouseX>(3*width)/4){song1.play();song1.rate(1);}
    return false;
    }
