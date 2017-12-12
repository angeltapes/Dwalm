var x=0;

function preload() {

}

function setup() {

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
