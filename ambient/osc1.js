//basic: 2 oscillators
var osc1;
var osc2;

function setup() {

  createCanvas(2000, 2000);
  //frameRate(random(3,6));
  reverb = new p5.Reverb();
  delay = new p5.Delay();
  osc = new p5.Oscillator();
  osc2 = new p5.Oscillator();2
  osc.setType('sine');
  osc2.setType('triangle');
}

  function draw(){
    background(0);
    osc.freq(mouseX);
    osc2.freq(3*mouseX/4);
    // delay.process() accepts 4 parameters:
    // source, delayTime, feedback, filter frequency

    delay.process(osc, constrain(mouseY/1000,0.4,0.5), 0.5, mouseY);
    reverb.process(osc2,mouseY/2000,0.8,0.5);

  }

  function touchStarted(){
    osc.start();
    osc2.start();

  }
  function touchEnded(){
    osc.stop();
    osc2.stop();
  }
