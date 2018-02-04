//overcomplicated mouse oscillator, doesn't work with more than one voice.
var osc1,osc2,osc3,osc4,x,loopOneRecord,loopTwoRecord,loopThreeRecord,loopOne,loopTwo,loopThree,loopOrder,loopOneStart,loopOneEnd,loopTwoStart,loopTwoEnd,loopThreeStart,loopThreeEnd,daColor;

function setup() {
  background(0);
  x=0;
  daColor=[random(0,255),random(0,255),random(0,255)];
  createCanvas(1500,800);
  frameRate(24);
  reverb = new p5.Reverb();
  delay = new p5.Delay();
  osc1 = new p5.Oscillator();
  osc2 = new p5.Oscillator();
  osc3 = new p5.Oscillator();
  osc4 = new p5.Oscillator();
  osc1control='enabled';
  osc2control='enabled';
  osc4control='enabled';

  osc1.setType('triangle');
  osc2.setType('square');
  osc3.setType('sawtooth');
  osc4.setType('sine');
  loopOrder='One';
  loopOneRecord=false;
  loopTwoRecord=false;
  loopThreeRecord=false;
  loopOneStart=-1;
  loopOneEnd=0;
  loopTwoStart=-1;
  loopTwoEnd=0;
  loopThreeStart=-1;
  loopThreeEnd=0;
  loopOne=[];
  loopTwo=[];
  loopThree=[];
  for (i = 0; i < 101; i++) {
    loopOne[i]=[0,0,0];
    loopTwo[i]=[0,0,0];
    loopThree[i]=[0,0,0];
  }
}

function draw(){
  print(loopTwoStart);
  fill(daColor);
  x=x+1;
  osc1.freq(loopOne[x][0]/10);
  osc2.freq(loopTwo[x][0]/10);
  osc3.freq(loopThree[x][0]/10);
  ellipse(loopOne[x][0],loopOne[x][1],50,50);
  ellipse(loopTwo[x][0],loopTwo[x][1],50,50);
  ellipse(loopThree[x][0],loopThree[x][1],50,50);
  osc4.freq(mouseX/10);

  if (x==loopOneStart){osc1.start()}
  if (x==loopOneEnd){osc1.stop()}
  if (x==loopTwoStart){osc2.start()}
  if (x==loopTwoEnd){osc2.stop()}
  if (x==loopThreeStart){osc3.start()}
  if (x==loopThreeEnd){osc3.stop()}

  if (x>50){
    daColor=[random(0,255),random(0,255),random(0,255)];
    x=1;
  }

	if (loopOneRecord==true&&loopOrder=='One'){
    ellipse(mouseX,mouseY,50,50);
	  	loopOne[x][0]=mouseX;
	    loopOne[x][1]=mouseY;
	}
  if (loopTwoRecord==true&&loopOrder=='Two'){
    ellipse(mouseX,mouseY,50,50);
      loopTwo[x][0]=mouseX;
      loopTwo[x][1]=mouseY;
  }
  if (loopThreeRecord==true&&loopOrder=='Three'){
    ellipse(mouseX,mouseY,50,50);
      loopThree[x][0]=mouseX;
      loopThree[x][1]=mouseY;
  }
}

function mousePressed() {
      if (mouseButton === LEFT) {
        osc4.start();
        ellipse(mouseX, mouseY, 50,50);
      }
      if (mouseButton === RIGHT) {
        osc4.start();
        rect(mouseX, mouseY,50,50);
      }
      if (mouseButton === CENTER) {

        if(loopOrder=='One'){loopOneRecord=true;loopOneStart=x;osc1.start();background(100,100,100)}
        if(loopOrder=='Two'){loopTwoRecord=true;loopTwoStart=x;osc2.start();background(100,255,100)}
        if(loopOrder=='Three'){loopThreeRecord=true;loopThreeStart=x;osc3.start();background(200,100,100)}
      }
}

function mouseReleased() {

  if(loopOrder=='One'){loopOneRecord=false;loopOrder='Two';loopOneEnd=x}
  if(loopOrder=='Two'){loopTwoRecord=false;loopOrder='Three';loopTwoEnd=x}
  if(loopOrder=='Three'){loopThreeRecord=false;loopOrder='One';loopThreeEnd=x}

  osc1.stop();
  osc2.stop();
  osc3.stop();
  osc4.stop();
}


//disable Firefox's right-click context menu
document.oncontextmenu = function () { // Use document as opposed to window for IE8 compatibility
  return false;
};

window.addEventListener('contextmenu', function (e) { // Not compatible with IE < 9
  e.preventDefault();
}, false);
