var x=0;

function preload() {
  song1 = loadSound("whistle.mp3");
}

function setup() {
  createCanvas(2000, 2000);
  background(0);
  frameRate(5);
  reverb = new p5.Reverb();
}

function draw()
{
  x=x+1;
  fill(255-x)
  ellipse (width/2,height/2,100,100)
  
  if (x>10){song1.pan(1/(random(-1,1)));song1.play()};
  if (x>20){song1.pan(1/(random(-1,1)));song1.play();song1.rate(random(3));};
  if (x>30){song1.pan(1/(random(-1,1)));song1.play();song1.rate(random(5))};
  if (x>50){x=0;};
}
