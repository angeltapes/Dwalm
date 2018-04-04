var osc1, osc2, osc3, osc4, osc5, osc6, osc7, osc8, osc9, oscSettings;

function setup() {
  osc1 = new p5.Oscillator();
  osc2 = new p5.Oscillator();
  osc3 = new p5.Oscillator();
  osc4 = new p5.Oscillator();
  osc5 = new p5.Oscillator();
  osc6 = new p5.Oscillator();
  osc7 = new p5.Oscillator();
  osc8 = new p5.Oscillator();
  osc9 = new p5.Oscillator();
  osc1.freq(440);
  osc2.freq(220);
  osc3.freq(110);
  osc1.start();
  osc2.start();
  osc3.start();
//  osc4.start();
//  osc5.start();
//  osc6.start();
//  osc7.start();
//  osc8.start();
//  osc9.start();
//  var oscSettings=[];

  //oscType, freq, amp, pan
  for (i=1;i=10;i++){
  //    oscSettings[i]=['sine',0,0,0];
    }
}

function draw(){
  //print(oscSettings[1][1])
}

function touchStarted(){

  if (mouseButton === LEFT) {
    osc1.amp(1);
  }

  if (mouseButton === CENTER) {

  }

  if (mouseButton === RIGHT) {

  }

}

function touchEnded(){
   osc1.amp(0);
 }
