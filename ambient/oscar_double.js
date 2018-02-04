//basic: 2 oscillators
var osc1;
var osc2;
var osc3;
var osc4;
var x;

function setup() {
  x=0;
  createCanvas(1500,800);
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

  fill(random(0,255),random(0,255),random(0,255));
  background(0);
  noStroke();
}

  function draw(){

    if (x<500){x=x+1};

    osc1.freq(mouseX+x);
    osc2.freq(mouseX/2+2*x);
    osc3.freq(2*mouseX+x);
    osc4.freq(mouseX/10*x);

    //prevent the sound from sticking
    if (mouseY==0){
      osc1.stop();
      osc2.stop();
      osc3.stop();
      osc4.stop();
    };

    ellipse(mouseX,mouseY,50+x,50+x);

    delay.process(osc1, constrain(mouseY/1000,0.4,0.5), 0.5, mouseY);
    reverb.process(osc2,mouseY/2000,0.8,0.5);
    delay.process(osc3, constrain(mouseY/1000,0.4,0.5), 0.5, mouseY);
    reverb.process(osc4,mouseY/2000,0.8,0.5);
  }

  function touchStarted(){
    fill(random(0,255),random(0,255),random(0,255));
    x=0;
    osc1.start();
    osc2.start();
    osc3.start();
    osc4.start();

  }

  function touchEnded(){
    fill(random(0,255),random(0,255),random(0,255));
    x=0;
    osc1.stop();
    osc2.stop();
    osc3.stop();
    osc4.stop();
  }

  function keyTyped() {
    // make sure user enabled the mic
  //  if (state === 0 && mic.enabled) {
/*  if (key == 'a') {
      // record to our p5.SoundFile
      recorder.record(soundFile);
      fill(random(0,255),random(0,255),random(0,255));
      ellipse (random(0,width),random(0,height),50,50)
      gotSoundFile=true;

    }

    if (key == 's') {
      //play([startTime],[rate],[amp],[cueStart],[duration])
      soundFile.play(0,1,1,0,10);
      fill(random(0,255),random(0,255),random(0,255));
      ellipse (random(0,width),random(0,height),50,50)
    }

    if (key == 'd') {
      //play([startTime],[rate],[amp],[cueStart],[duration])
      soundFile.play(0,0.5,1,0,10);
      fill(random(0,255),random(0,255),random(0,255));
      ellipse (random(0,width),random(0,height),25,25)
    }

    if (key == 'f') {
      //play([startTime],[rate],[amp],[cueStart],[duration])
      soundFile.play(0,2,1,0,10);
      fill(random(0,255),random(0,255),random(0,255));
      rect (random(0,width),random(0,height),25,25)
    }

    if (key == 'g') {
      //play([startTime],[rate],[amp],[cueStart],[duration])
      soundFile.play(0,random(0,3),1,0,10);
      fill(random(0,255),random(0,255),random(0,255));
      ellipse (random(0,width),random(0,height),25,25)
    }
*/
    if (key == '1') {
    osc1.start();
    oscType='sine'
    }

    if (key == '2') {
    osc2.start();
    oscType='triangle'
    }

    if (key == '3') {
    osc3.start();
    oscType='sawtooth'
    }

    if (key == '4') {
    osc4.start();
    oscType='square'
    }

  }

  function keyReleased() {
    recorder.stop();
  //  osc1.stop();
  }
