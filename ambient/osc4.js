//throws balls around playing synths
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
var x;

function setup() {
  createCanvas(1400, 700);
  osc1 = new p5.Oscillator();
  osc1.setType('sine');
  osc2 = new p5.Oscillator();
  osc2.setType('sine');
  startX=0;
  startY=0;
  multiplierX=random(0,2);
  multiplierY=random(0,2);
}

function draw() {

  //osc2.start();
  background(0);
  fill(255);
  //south east
  if (startX<endX&&startY<endY){startX=startX+2;endX=endX+1;startY=startY+2;endY=endY+1};
  //south west
  if (startX>endX&&startY<endY){startX=startX-2;endX=endX-1;startY=startY+2;endY=endY+1};
  //north east
  if (startX<endX&&startY>endY){startX=startX+2;endX=endX+1;startY=startY-2;endY=endY-1};
  //north west
  if (startX>endX&&startY>endY){startX=startX-2;endX=endX-1;startY=startY-2;endY=endY-1};
  ellipse(startX,startY,25,25);
  ellipse(endX,endY,25,25);
  osc1.freq(startY*endX/200);
  osc2.freq(startX*endX/2);
  if (endX>width){startX=looperX;startY=looperY;endX=loopedX;endY=loopedY;looperX=looperX*multiplierX};
  if (endY>height){startX=looperX;startY=looperY;endX=loopedX;endY=loopedY;looperY=looperY*multiplierY};
  text(startX,25,25);
  text(startY,25,50);
  if (startX==endX){startX=looperX;startY=looperY;endX=loopedX;endY=loopedY;looperX=looperX*multiplierX};
  if (startY==endY){startX=looperX;startY=looperY;endX=loopedX;endY=loopedY;looperY=looperY*multiplierY};
  //if (startX=endX){osc1.stop()};
}

function touchStarted(){
   osc1.start();
   looperX=mouseX;
   startX=mouseX;
   looperY=mouseY;
   startY=mouseY;
}

function touchEnded(){
  loopedX=mouseX;
  endX=mouseX;
  loopedY=mouseY;
  endY=mouseY;

}
