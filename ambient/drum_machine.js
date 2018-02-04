var kick,clap,x,kickPosition,clapPosition,shakePosition,osc1,oscStart,oscStop,oscRecording,tempo,daNote;
function preload(){
  //create some preloaded percussion
  kick = loadSound("kick.mp3");
  clap = loadSound("clap.mp3");
  shake = loadSound("shake.mp3");
}

function setup() {
  tempo=12;
  createCanvas(1600,900);


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
  background(0);
  osc1.freq(oscPosition[x])
  frameRate(tempo);
  x++;

  fill(255,0,255);
  rect(x*10,20,10,10);
  playSound();
  if (x==32){
    x=0;
  }
  //if (x==oscStart){osc1.start();}
  //if (x==oscStop){osc1.stop();}
  if (oscRecording=='true'){oscPosition[x]=mouseY/5}
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
  if (key == 'p') {
    tempo++;
  }
  if (key == 'l') {
    tempo--;
  }

  if (key == 'a') {
    oscPosition[x]=20;
    osc1.start();
  }
  if (key == 's') {
    oscPosition[x]=40;
    osc1.start();
  }
  if (key == 'd') {
    oscPosition[x]=45;
    osc1.start();
  }
  if (key == 'q') {
    oscPosition=[10,10,10,30,10,10,10,30,40,40,40,40,40,40,10,10,10,0,0,10,0,10,0,0,0,0,0,0,0,0,0,0];
    osc1.start();
  }
  if (key == 'w') {
    oscPosition=[5,5,5,0,5,5,5,5,5,5,0,5,5,5,30,5,5,5,0,5,5,5,30,5,5,5,0,5,5,5,30,];
    osc1.start();
  }
  if (key == 'e') {
    daNote=random(0,20);
    oscPosition=[0,0,0,daNote,daNote,daNote,0,daNote,5,5,daNote,5,5,0,daNote,5,daNote,30,5,05,5,5,30,5,5,5,0,5,5,5,30,];
    osc1.start();
  }

}

function playSound(){
  //Modulus test
  //if (x%8==0){kick.play()}
  if (kickPosition[x]==1){kick.play()}
  if (clapPosition[x]==1){clap.play()}
  if (shakePosition[x]==1){shake.play()}
  if (oscPosition[x-1]==0&&oscPosition[x]>0){osc1.start();}
  //if (oscPosition[x]==0){osc1.stop();}
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
  //osc1.stop();
}
