
var x=0;
var z=0;
//var daNote = (random(1));
var osc;
var bassOne=[1,0,0,0.5,0,0.3,0,0];
var kickOne=[1,0,0,0,0,0,0,0];
var clapOne=[0,0,0,0,1,0,0,0];

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
  frameRate(random(3,6));
  //reverb = new p5.Reverb();
  //delay = new p5.Delay();
  osc = new p5.Oscillator();
  osc2 = new p5.Oscillator();2
  delay = new p5.Delay();
  reverb = new p5.Reverb();
  osc.setType('sine');
  //osc.freq(240);
  osc2.setType('triangle');
  //osc2.freq(240);
//  osc.amp(1);
  //osc.start();
}

function draw(){
  background(0);
  x=x+1;
  fill(255);
  textSize(56);
  text (x-1,100,100);
  text (z-1,100,200);
  z=mouseY;
  playSound(x);
osc.freq(mouseX);
osc2.freq(3*mouseX/4);
// delay.process() accepts 4 parameters:
// source, delayTime, feedback, filter frequency
// play with these numbers!!
delay.process(osc, constrain(mouseY/1000,0.4,0.5), 0.5, mouseY);
reverb.process(osc2,mouseY/2000,0.8,0.5);
//osc.amp(constrain(mouseY/1000,0,1));

  //if (mouseIsPressed){osc.start();};
}

function playSound(y){
  shake.play(0,1.5,0.5,0,1);

  if (bassOne[y]>0){bass.play(1)};
  if (kickOne[y]>0){kick.play(1)};
  if (clapOne[y]>0){clap.play(0,1,0.1,0,0)};
  if (y>8){x=1;};
}

function touchStarted(){
  osc.start();
  osc2.start();

}
function touchEnded(){
  osc.stop();
  osc2.stop();
}

//function mouseReleased(){osc.stop();}
/*function touchStarted() {
osc.start();
osc.freq(2*mouseY);
//osc.stop(3);
    /*if (!playing) {
      // ramp amplitude to 0.5 over 0.1 seconds
      osc.amp(0.5, 0.05);
      playing = true;
      backgroundColor = color(0,255,255);
    } else {
      // ramp amplitude to 0 over 0.5 seconds
      osc.amp(0, 0.5);
      playing = false;
      backgroundColor = color(255,0,255);
    }*/



//function touchReleased() {
//osc.stop();
//}



//can amend frame rate on the fly
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
