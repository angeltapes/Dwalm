var osc1, osc2, osc3, oscSettings;

function setup() {
  osc1 = new p5.Oscillator();
  osc2 = new p5.Oscillator();
  osc3 = new p5.Oscillator();

  osc1.start();
  osc2.start();
  osc3.start();

  oscSettings=[];

  //type, freqMod, amp, pan, glissando
    for (i=1;i<10;i++){
      oscSettings[i]=["sine",1,0,0,0];//add a glissando value which bends the note in either direction
    }

  osc1.amp(0);
  osc2.amp(0);
  osc3.amp(0);

}

function draw(){

  fill(250);
  text(oscSettings[1][0],10,10)
  freqBase=map(mouseX,0,width,0,300);
  osc1.freq(freqBase*oscSettings[1][1]);osc1.pan(map(mouseY,0,height,-1,1));//multiply the mapped range by a Mod
  osc2.freq(freqBase*oscSettings[2][1]);osc2.pan(map(mouseY,0,height,-1,1));
  osc3.freq(freqBase*oscSettings[3][1]);osc3.pan(map(mouseY,0,height,-1,1));

}

function keyTyped(){
if (key == 'a') {
  oscSelector(1);

  }
}

function oscSelector(thisOsc){
  oscSettings[thisOsc][0]="square";
  osc1.setType(oscSettings[thisOsc][0]);
  oscSettings[2][1]=2;
  oscSettings[3][1]=3;
}

function touchStarted(){

  if (mouseButton === LEFT) {
    osc1.amp(1);
    osc2.amp(1);
    osc3.amp(1);

  }

  if (mouseButton === CENTER) {
    osc4.amp(1);
  }

  if (mouseButton === RIGHT) {

  }

}

function touchEnded(){
   osc1.amp(0);
   osc2.amp(0);
   osc3.amp(0);
   osc4.amp(0);
 }
