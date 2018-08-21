//when the mouse vibrates it makes sounds
var osc1, osc2, osc3, env;
function setup() {
  createCanvas(1500,800);
  osc1 = new p5.Oscillator();
  osc2 = new p5.Oscillator();
  osc3 = new p5.Oscillator();

  var attackLevel = 1.0;
  var releaseLevel = 0;

  var attackTime = 0.001
  var decayTime = 0.9;
  var susPercent = 0.2;
  var releaseTime = 0.9;

  env = new p5.Env();
  env.setADSR(attackTime, decayTime, susPercent, releaseTime);
  env.setRange(attackLevel, releaseLevel);

  osc1.amp(env);
  osc1.freq(150);
  osc1.start();
}

function draw() {

  if (mouseX-pmouseX>0){
  env.play();}
}
