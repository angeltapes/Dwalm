var osc1, osc2, osc3, osc4, osc5, osc6, osc7, osc8, osc9, oscSettings1, oscSettings2, oscSettings3, oscSettings4, oscSettings5, oscSettings6, oscSettings7, oscSettings8, oscSettings9;

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
  osc1.start();
  oscSettings1={type:"sine",freq:440,amp:0,pan:0};
  oscSettings3={type:"sine",freq:440,amp:0,pan:0};
  oscSettings4={type:"sine",freq:440,amp:0,pan:0};
  oscSettings5={type:"sine",freq:440,amp:0,pan:0};
  oscSettings6={type:"sine",freq:440,amp:0,pan:0};
  oscSettings7={type:"sine",freq:440,amp:0,pan:0};
  oscSettings8={type:"sine",freq:440,amp:0,pan:0};
  oscSettings9={type:"sine",freq:440,amp:0,pan:0};

}

function draw(){
  //ellipse(10,10,10,10);
  fill(250);
  text(oscSettings8.freq,10,10)
  osc1.amp(oscSettings1.amp);
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
