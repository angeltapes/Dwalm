//plays a random bassline at random pitch
var x=0;
var bassOne,kickOne,clapOne;

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
  frameRate(random(1,4));
  bassOne=[random(2),random(-5,5),random(-5,5),random(0,5),random(2),random(-5,5),random(-5,5),random(-5,5)];
  kickOne=[random(-1,1),random(-1,1),random(-1,1),random(-1,1),random(-1,1),random(-1,1),random(-1,1),random(-1,1)];
  clapOne=[random(-1,1),random(-1,1),random(-1,1),random(-1,1),random(-1,1),random(-1,1),random(-1,1),random(-1,1)];
}

function draw(){
  background(0);
  x=x+1;
  fill(255);
  textSize(56);
  text (x-1,100,100);
  playSound(x);
}

function playSound(y){
  shake.play(0,1.5,0.5,0,1);
  if (bassOne[y]>0){bass.play(0,bassOne[y]/2.5,5,0,)};
  if (kickOne[y]>0){kick.play(1)};
  if (clapOne[y]>0){clap.play(0,1,0.3,0,0)};
  if (y>8){x=1};
}

function stopSound(){
  //whistle.stop();
  x=0;
}
