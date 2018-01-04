//click and drag and P5 makes music
var x=0;

//var daNote = (random(1));
var osc1, osc2;
var startTheTime, endTheTime, startX,startY,endX,endY,moveX,moveY, clap;

function setup() {
  createCanvas(2000, 2000);
  background(0);
  endTheTime=0;
  reverb = new p5.Reverb();
  delay = new p5.Delay();
  osc1 = new p5.Oscillator();
  osc2 = new p5.Oscillator();
  osc3 = new p5.Oscillator();
  osc4 = new p5.Oscillator();
  osc1.setType('sine');
  osc2.setType('triangle');
  osc3.setType('sawtooth');
  osc4.setType('square');
  clap = loadSound("clap.mp3");
}

function draw(){
  fill(144,100,144);
  rect(0,0,500,250);
  fill(100,144,144);
  rect(500,0,500,250);

  fill(255);
  textSize(56);
  text ('Click and drag to start',50,100);

  ellipse(startX,startY,50,50);
  rect(endX,endY,50,50);
  fill(144,144,90);
  rect(moveX,moveY,25,25);
  //if (moveX=2*endX){clap.play(1);};
  if(moveX<endX){moveX++};
  if(moveY<endY){moveY++};
  if(moveX>endX){moveX--};
  if(moveY>endY){moveY--};
  if(moveX==endX&&moveY==endY){
    moveX=startX;
    moveY=startY;
  }
  osc1.freq(moveX);
}

function touchStarted(){
  startTheTime=frameCount;
  startX=mouseX;
  startY=mouseY;
  osc1.start();
}

function touchEnded(){
  endTheTime=frameCount-startTheTime;
  endX=mouseX;
  endY=mouseY;
  moveX=startX;
  moveY=startY;
}
