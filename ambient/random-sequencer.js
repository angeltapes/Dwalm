var x=0;


function preload() {
  song1 = loadSound("whistle.mp3");
  song2 = loadSound("kick.mp3");
  song3 = loadSound("clap.mp3");
  song4 = loadSound("voice1.mp3");
}

function setup() {
  createCanvas(2000, 2000);
  background(0);
  frameRate(1);
  reverb = new p5.Reverb();
}

function draw()
{
  background (0);
  x=x+1;
  fill(255);
  ellipse (width/2,height/2,100,100);
  var y = int(random(1,4));
  textSize(50);
  text (y + "/" + x,50,50,50,50);
  if (x=100){
  startSound();

  //y = int(random(1,4));
  //x=0;
  }
  if (x=200){stopSound();x=0};
}

function startSound(){
if (y=1){song1.play()}
else if (y=2){song2.play()}
else if (y=3){song3.play()}
else if (y=4){song4.play()};
}

function stopSound()
{
  song1.stop();
  song2.stop();
  song3.stop();
  song4.stop();
}
/*
  if (x>0&&x<2){whistle.rate(0.5);whistle.play();kick.play()};
  if (x>1&&x<3){whistle.rate(1);whistle.play();};
  if (x>2&&x<4){};
  if (x>3&&x<5){};
  if (x>4){whistle.rate(0.1);};
  if (x>5&&x<7){voice.play()};
  if (x>6&&x<8){clap.play();};
  if (x>7){kick.play();x=0;};*/
//}
//  if (x>30){whistle.pan(1/(random(-1,1)));whistle.play();whistle.rate(random(5))};
