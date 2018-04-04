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
  oscSettings1={type:"sine",freq:440,amp:0,pan:0};
  /*var oscSettings2={type:"sine",freq:440,amp:0,pan:0};
  var oscSettings3={type:"sine",freq:440,amp:0,pan:0};
  var oscSettings4={type:"sine",freq:440,amp:0,pan:0};
  var oscSettings5={type:"sine",freq:440,amp:0,pan:0};
  var oscSettings6={type:"sine",freq:440,amp:0,pan:0};
  var oscSettings7={type:"sine",freq:440,amp:0,pan:0};
  var oscSettings8={type:"sine",freq:440,amp:0,pan:0};
  var oscSettings9={type:"sine",freq:440,amp:0,pan:0};*/

}

function draw(){
  //ellipse(10,10,10,10);
  text(oscSettings1.type,10,10)
}
