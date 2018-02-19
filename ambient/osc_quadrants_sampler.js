//basic: 2 oscillators
var osc1;
var osc2;
var osc3;
var osc4;
var x;
var mic, recorder1, soundFile,gotSoundFile;

function setup() {
  x=0;
  createCanvas(1400, 600);
  //frameRate(random(3,6));
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

  // create an audio in
  mic = new p5.AudioIn();

  // prompts user to enable their browser mic
  mic.start();

  // create a sound recorder
  recorder = new p5.SoundRecorder();

  // connect the mic to the recorder
  recorder.setInput(mic);

  // this sound file will be used to
  // playback & save the recording
  fill(255);
  soundFile = new p5.SoundFile();
  text('Press a to record', width/2,200);
  text('Press s to play', width/2, 300);
  gotSoundFile=false;
  background(0);
      noStroke();
}

  function draw(){
    x=x+1;
    if (x==200){x=0};
    //background(0);
    fill(255-x,50-x,110-x);
    ellipse(mouseX,mouseY,mouseX-pmouseX+x,mouseY-pmouseY+x);

    textSize(128);
    fill(0,144,144);
    text("Sine",200,200);
    fill(144,144,144);
    text("Triangle",width/2,0+200);
    fill(144,0,144);
    text("Sawtooth",100,1.5*height/2);
    fill(144,144,0);
    text("Square",width/2,1.5*height/2);
    osc1.freq(mouseX);
    osc2.freq(mouseX/2);
    osc3.freq(2*mouseX);
    osc4.freq(mouseX/1);

    //prevent the sound from sticking
    if (mouseY=0){
      osc1.stop();
      osc2.stop();
      osc3.stop();
      osc4.stop();
    };

    // delay.process() accepts 4 parameters:
    // source, delayTime, feedback, filter frequency

    delay.process(osc1, constrain(mouseY/1000,0.4,0.5), 0.5, mouseY);
    reverb.process(osc2,mouseY/2000,0.8,0.5);
    delay.process(osc3, constrain(mouseY/1000,0.4,0.5), 0.5, mouseY);
    reverb.process(osc4,mouseY/2000,0.8,0.5);
  }

//try multiple rainbow squares
  function touchStarted(){
    x=0;
    soundFile.play(0,mouseX/1000,1,0,10);
    if (mouseX<width/2&&mouseY<height/2){osc1.start();}
    if (mouseX>width/2&&mouseY<height/2){osc2.start();}
    if (mouseX<width/2&&mouseY>height/2){osc3.start();}
    if (mouseX>width/2&&mouseY>height/2){osc4.start();}
  }

  function touchEnded(){
    osc1.stop();
    osc2.stop();
    osc3.stop();
    osc4.stop();
  }

  function keyTyped() {
    // make sure user enabled the mic
  //  if (state === 0 && mic.enabled) {
  if (key == 'a') {
      // record to our p5.SoundFile
      recorder.record(soundFile);
      fill(random(0,255),random(0,255),random(0,255));
      ellipse (width/3,250,50,50)
      gotSoundFile=true;
    }

    if (key == 's') {
      //play([startTime],[rate],[amp],[cueStart],[duration])
      soundFile.play(0,mouseX/1000,1,0,10);
      fill(random(0,255),random(0,255),random(0,255));
      ellipse (width/3,250,50,50)
    }

    if (key == '1') {
    osc1.start();
    }

    if (key == '2') {
    osc2.start();
    }

    if (key == '3') {
    osc3.start();
    }

    if (key == '4') {
    osc4.start();
    }

  }

  function keyReleased() {
    recorder.stop();
  //  osc1.stop();
  }
