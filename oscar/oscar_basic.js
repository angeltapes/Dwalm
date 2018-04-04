//working version, simple setup
var osc1, osc2, osc3, pan,freqMod;

function setup() {
  osc1 = new p5.Oscillator();
  osc2 = new p5.Oscillator();
  osc3 = new p5.Oscillator();

  osc1.start();
  osc2.start();
  osc3.start();

  pan=[0,0.25,0.5,,0.75,1];
  freqMod=[0.25,0.5,1,2,3];


  osc1.amp(0);
  osc2.amp(0);
  osc3.amp(0);

}

function draw(){

  fill(250);

  freqBase=map(mouseX,0,width,0,300);
  osc1.freq(freqBase*freqMod[2]);osc1.pan(map(mouseY,0,height,-pan[0],pan[0]));//multiply the mapped range by a Mod
  osc2.freq(freqBase*freqMod[1]);osc2.pan(map(mouseY,0,height,-pan[1],pan[1]));
  osc3.freq(freqBase*freqMod[0]);osc3.pan(map(mouseY,0,height,pan[2],-pan[2]));

}

function keyTyped(){
if (key == 'a') {


  }
}


function touchStarted(){

  if (mouseButton === LEFT) {
    pan=[0,0.25,0.5,0.75,1];
    freqMod=[0.25,0.5,1,2,3];
    osc1.amp(1);
    osc2.amp(1);
    osc3.amp(1);

  }

  if (mouseButton === CENTER) {
    pan=[0,0.25,0.5,0.75,1];
    freqMod=[2,3,4,2,3];
    osc1.amp(1);
    osc2.amp(1);
    osc3.amp(1);
  }

  if (mouseButton === RIGHT) {
    pan=[0,0.25,0.5,0.75,1];
    freqMod=[0.2,0.4,0.5,2,3];
    osc1.amp(1);
    osc2.amp(1);
    osc3.amp(1);
  }

}

function touchEnded(){
   osc1.amp(0);
   osc2.amp(0);
   osc3.amp(0);

 }

 //disable Firefox's right-click context menu
 document.oncontextmenu = function () { // Use document as opposed to window for IE8 compatibility
   return false;
 };

 window.addEventListener('contextmenu', function (e) { // Not compatible with IE < 9
   e.preventDefault();
 }, false);
