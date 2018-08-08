//basic: 2 oscillators
var osc1;
var osc2;
var osc3;
var osc4;
var oscType;
var x;
var mic, recorder1, soundFile,gotSoundFile;

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
  gotSoundFile=false;
  background(0);
      noStroke();

  //set the type of oscillator
  oscType='square';
}

  function draw(){
    x=x+1;
    if (x==300){x=0};

    if (oscType=='sine'){
    fill(255-x,20+x,200-x/2);
    ellipse(mouseX,mouseY,mouseX-pmouseX+x,mouseY-pmouseY+x);
    }

    if (oscType=='triangle'){
    fill(100-x,50+x,110-x);
    triangle(width/2,height/2,mouseX-x,mouseY+x,mouseX+x,mouseY-x);
    }

    if (oscType=='sawtooth'){
    fill(50+x,x,110-x);
    triangle(mouseX-x,mouseY-x,mouseX+x,mouseY-x,mouseX+x,mouseY+x);
    fill(x,50+x,110-x);
    triangle(mouseX-2*x,mouseY-x,mouseX+x,mouseY-2*x,mouseX+x,mouseY+x);
    }

    if (oscType=='square'){
    fill(100-x,50+x,110-x);
    rect(mouseX,mouseY,mouseX-pmouseX+x,mouseY-pmouseY+x);
    }

    fill(0,144,144);
    ellipse(width/4,height/4,width/8,width/8);
    fill(144,144,144);
    triangle(3*width/5,height/4,3*width/4,height/4,3*width/4,height/2);
    fill(144,0,144);
    triangle(width/4,height/2,width/4,2*height/3,width/3,2*height/3);
    triangle(width/4+width/16,height/2,width/4+width/16,2*height/3,width/3+width/16,2*height/3);
    fill(144,144,0);
    rect(3*width/5,3*height/5,width/8,height/4);

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

    if (mouseButton === LEFT) {
      x=0;
      if (mouseX<width/2&&mouseY<height/2){osc1.start();oscType='sine';};
      if (mouseX>width/2&&mouseY<height/2){osc2.start();oscType='triangle'};
      if (mouseX<width/2&&mouseY>height/2){osc3.start();oscType='square'};
      if (mouseX>width/2&&mouseY>height/2){osc4.start();oscType='sawtooth'};
    }

    if (mouseButton === CENTER) {
      soundFile.play(0,1,1,0,10);
      fill(random(0,255),random(0,255),random(0,255));
      ellipse(mouseX,mouseY,x,x);
    }

    if (mouseButton === RIGHT) {
      if (mouseX<width/2&&mouseY<height/2){osc1.start();oscType='sine';};
      recorder.record(soundFile);
      fill(random(0,255),random(0,255),random(0,255));
      ellipse (random(0,width),random(0,height),50,50)
      gotSoundFile=true;
    }

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

    if (key == 'h') {
      //play([startTime],[rate],[amp],[cueStart],[duration])
      soundFile.play(0,random(0,3),1,0,10);
      soundFile.loop(10);
      fill(random(0,255),random(0,255),random(0,255));
      ellipse (random(0,width),random(0,height),25,25)
    }

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

  //disable Firefox's right-click context menu
  document.oncontextmenu = function () { // Use document as opposed to window for IE8 compatibility
    return false;
  };

  window.addEventListener('contextmenu', function (e) { // Not compatible with IE < 9
    e.preventDefault();
  }, false);
