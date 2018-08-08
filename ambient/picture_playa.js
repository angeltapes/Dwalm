var img, reverb, delay, osc1, env, reverb, delay, clickX,clickY, cnv;

function preload(){
  img = loadImage('Van-gogh-Starry-Night.jpg');
}
function setup(){
  cnv = createCanvas(1200, 800);
  reverb = new p5.Reverb();
  delay = new p5.Delay();
  osc1 = new p5.Oscillator();
  osc2 = new p5.Oscillator();
  osc3 = new p5.Oscillator();
  osc4 = new p5.Oscillator();
  osc1.setType('sine');
  osc2.setType('triangle');
  osc3.setType('sawtooth');
  osc4.setType('square');

  env = new p5.Env();
  //env.setADSR(attackTime, decayTime, susPercent, releaseTime);
  env.setADSR(50, 0.01, 0.001, 1);
  //env.setRange(attackLevel, releaseLevel);
  env.setRange(1, 0);

  osc1.amp(env);
  osc1.start();
  clickX=width/2;
  clickY=height/2;
}

function draw(){
  image(img,0,0,width,height);
  ellipse(clickX,clickY,50,50);
  cnv.mousePressed(playEnv());
}

function playEnv(){
  clickX=mouseX;
  clickY=mouseY;

  osc1.freq(clickX);
  env.play();
}

/*
function touchStarted(){
  clickX=mouseX;
  clickY=mouseY;

  osc1.freq(clickX);
  env.play();
}

function touchEnded(){
//  osc1.stop();
}*/
