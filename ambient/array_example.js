var x=0;
var beat=[1,2,3,4,5,6];

function preload() {
  whistle = loadSound("whistle.mp3");
  kick = loadSound("kick.mp3");
  bass = loadSound("bass.mp3");
  clap = loadSound("clap.mp3");
  voice = loadSound("voice1.mp3");
  shake = loadSound("shake.mp3");
}

function setup() {
  createCanvas(2000, 2000);
  frameRate(3);
  //reverb = new p5.Reverb();
  //delay = new p5.Delay();
}

function draw(){
  background(0);
  x=x+1;
  fill(255);
  textSize(56);
  text (x,100,100);
  playSound(x);
}

function playSound(y){
  text (beat[y],200,100);
}

//play([startTime],[rate],[amp],[cueStart],[duration])
/*
function playSound1(){kick.play();bass.play(0,1,1,0,1);shake.play();}
function playSound2(){shake.play();bass.play(0,0.8,1,0,1);clap.play();}
function playSound3(){shake.play();whistle.play(0,random(0,1),1,0,5);}
function playSound4(){shake.play();}
function playSound5(){shake.play();bass.play(0,0.5,1,0,1);}
function playSound6(){shake.play();}
function playSound7(){shake.play();bass.play(0,0.75,1,0,1)}
function playSound8(){shake.play();stopSound();}
*/
function stopSound(){
  //whistle.stop();
  x=0;
}
/*function draw()
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
}*/
//  if (x>30){whistle.pan(1/(random(-1,1)));whistle.play();whistle.rate(random(5))};
