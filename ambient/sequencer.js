var x=0;

function preload() {
  whistle = loadSound("whistle.mp3");
  kick = loadSound("kick.mp3");
  clap = loadSound("clap.mp3");
  voice = loadSound("voice1.mp3");
}

function setup() {
  createCanvas(2000, 2000);
  background(0);
  frameRate(3);
  reverb = new p5.Reverb();
}

function draw()
{
  x=x+1;
  fill(255-x)
  ellipse (width/2,height/2,100,100)

  if (x>0&&x<2){whistle.rate(0.5);whistle.play();kick.play()};
  if (x>1&&x<3){whistle.rate(1);whistle.play();};
  if (x>2&&x<4){};
  if (x>3&&x<5){};
  if (x>4){whistle.rate(0.1);};
  if (x>5&&x<7){voice.play()};
  if (x>6&&x<8){clap.play();};
  if (x>7){kick.play();x=0;};
}
//  if (x>30){whistle.pan(1/(random(-1,1)));whistle.play();whistle.rate(random(5))};
