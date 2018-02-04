//nasty broken version of the synth drum machine
var kick,clap,x,kickPosition,clapPosition,shakePosition,osc1,oscStart,oscStop,oscRecording;
function preload(){
  //create some preloaded percussion
  kick = loadSound("kick.mp3");
  clap = loadSound("clap.mp3");
  shake = loadSound("shake.mp3");
}

function setup() {
  frameRate(12);
  createCanvas(1600,900);
  background(0);
  fill(255,0,255);
  x=0;
  kickPosition=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
  clapPosition=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
  shakePosition=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
  oscPosition=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
  reverb = new p5.Reverb();
  delay = new p5.Delay();
  osc1 = new p5.Oscillator();
  osc1.setType('square');
  oscRecording='false';
}

function draw(){
  x++;
  rect(50,50,x*5,50);
  playSound();
  if (x==32){
    x=0;
  }
  //if (x==oscStart){osc1.start();}
  //if (x==oscStop){osc1.stop();}
  if (oscRecording=='true'){oscPosition[x]=mouseY}
}

function keyTyped() {
  if (key == '1') {
  kickPosition[x]=1;
  kick.play();
  }
  if (key == '2') {
  clapPosition[x]=1;
  clap.play();
  }
  if (key == '3') {
  shakePosition[x]=1;
  shake.play();
  }
}

function playSound(){
  if (kickPosition[x]==1){kick.play()}
  if (clapPosition[x]==1){clap.play()}
  if (shakePosition[x]==1){shake.play()}
  if (oscPosition[x]>0){osc1.start();osc1.freq(oscPosition[x])}
  if (oscPosition[x]==0){osc1.stop();}
}

function touchStarted(){
  oscStart=x;
  osc1.start();
  osc1.freq(mouseY/5);
  oscRecording='true';
}

function touchEnded(){
  oscStop=x;
  oscRecording='false';
  osc1.stop();
}
