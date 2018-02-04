var osc1,osc2,osc3,osc4,x,touchRecord,touches;

function setup() {
  x=0;
  createCanvas(1500,800);

  reverb = new p5.Reverb();
  delay = new p5.Delay();
  osc1 = new p5.Oscillator();
  osc2 = new p5.Oscillator();
  osc3 = new p5.Oscillator();
  osc4 = new p5.Oscillator();
  osc1control='enabled';
  osc2control='enabled';
  osc4control='enabled';

  osc1.setType('sine');
  osc2.setType('triangle');
  osc3.setType('sawtooth');
  osc4.setType('square');
  touchRecord=false;
	touches=[[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],
					 [0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],
					 [0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],
           [0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],
					 ];
}

function draw(){
  fill(random(0,255),random(0,255),random(0,255));
  if (x>0){x=x+1};
  osc1.freq(mouseX);


  osc3.freq(mouseX/3);
  if (x>63){
    x=1;
  }
if (touches[x][1]==0){osc2.stop()}
	if (touches[x][0]>0){
    osc2.start();
  osc2.freq(touches[x][0]/10);
  osc2.amp(touches[x][1]);
  ellipse(touches[x][0],touches[x][1],50,50);

	}
	if (touchRecord==true){
	  	touches[x][0]=mouseX;
	    touches[x][1]=mouseY;
	}
}

function touchStarted() {
  fill(random(0,255),random(0,255),random(0,255))
  x=1;
      if (mouseButton === LEFT) {
        osc1.start();
        ellipse(mouseX, mouseY, (mouseX-pmouseX)*10, (mouseY-pmouseY)*10);
      }
      if (mouseButton === RIGHT) {
        osc3.start();
        rect(mouseX, mouseY, (mouseX-pmouseX)*10, (mouseY-pmouseY)*10);
      }
      if (mouseButton === CENTER) {
        touchRecord=true;
        osc2.start();
      }
}

function touchEnded() {
  touchRecord=false;
  osc1.stop();
  //osc2.stop();
  osc3.stop();
}


//disable Firefox's right-click context menu
document.oncontextmenu = function () { // Use document as opposed to window for IE8 compatibility
  return false;
};

window.addEventListener('contextmenu', function (e) { // Not compatible with IE < 9
  e.preventDefault();
}, false);
