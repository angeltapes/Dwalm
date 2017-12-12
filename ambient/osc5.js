//2 crackly oscillators
/*
start touch - begin line
end touch - end line
start a moving pulse from position a to b
change the osc freq to position y as it goes
change the osc delay rate to position x as it goes
*/

var osc1;
var osc2;
var startX, startY, endX, endY, looperX, looperY, loopedY,loopedX,multiplierX,multiplierY;
var x,y,returnY;

function setup() {
  createCanvas(1400, 700);
  osc1 = new p5.Oscillator();
  osc1.setType('sawtooth');
  osc2 = new p5.Oscillator();
  osc2.setType('sawtooth');
  //startX=0;
  //startY=0;
  //multiplierX=random(0,2);
  //multiplierY=random(0,2);
  y=10;
  returnY=10;
  x=0;
}

function draw() {
  y=y-1;
  background(0);
  fill(255);
  if (y==0){y=returnY};
  if (y>0){
    osc1.freq(mouseX/1000*y);
    osc2.freq(mouseY/1000*y);
  };

  ellipse(x,y,25,25);

  text(x,25,25);
  text(y,25,50);

}

function touchStarted(){
  osc1.start();
  osc2.start();
  x=mouseX;
  y=mouseY;
  returnY=y;
}

function touchEnded(){

}
