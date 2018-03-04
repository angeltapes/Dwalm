//press keys Q-T to record a bass line and Y for a snare drum with noise and osc, using envelopes to make notes
//use touch to play a synth with pan
var mic, recorder1, soundFile, noise, x, fr, bass, osc1Env, recorded,shake;

function setup() {
  createCanvas(width,height);

  x=0;
  fr=24;
  bass=[];
  snare=[];

  shake = loadSound("shake.mp3");

  for (i=0;i<64;i++){
    bass[i]=[0,0,0];
    snare[i]=[0];
  }

  // create an audio in
  mic = new p5.AudioIn();

  // prompts user to enable their browser mic
  mic.start();

  // create a sound recorder
  recorder = new p5.SoundRecorder();

  // connect the mic to the recorder
  recorder.setInput(mic);

  // this sound file will be used to
  // playback & save the showntell
  fill(255);
  soundFile = new p5.SoundFile();
  recorded=false;
  osc1 = new p5.Oscillator();
  osc2= new p5.Oscillator();
  osc1.setType('sine');
  osc2.setType('square');
  osc1.freq(1);
  osc1.start();
  osc1.amp(1);

  //noise set up
  noise = new p5.Noise(); // other types include 'brown' and 'pink'
  noise.start();

  // multiply noise volume by 0
  // (keep it quiet until we're ready to make noise!)
  noise.amp(0);

  env = new p5.Env();
  // set attackTime, decayTime, sustainRatio, releaseTime
  env.setADSR(0.001, 0.1, 0.2, 0.2);
  // set attackLevel, releaseLevel
  env.setRange(1, 0);

  osc1Env = new p5.Env();
  // set attackTime, decayTime, sustainRatio, releaseTime
  osc1Env.setADSR(0.1, 0.5, 0.2, 0.6);
  // set attackLevel, releaseLevel
  osc1Env.setRange(1, 0);
}

function draw(){
  osc2.freq(height-mouseY);
  osc2.pan(map(mouseX/15,0,width,-1,1));
  background(0);
  fill(255-10*(x%16));
  ellipse(50,50,25,25);
  fill(255);
  text(fr, 20, 20);
  text(x, 20, 70);
  frameRate(fr);
  //noise.pan(random(-1,1));
  x++;
  //if (x%32==0){osc1.freq(100);osc1Env.play(osc1)}
  //if (x==24){osc1.freq(80);osc1Env.play(osc1)}
  if(bass[x][0]==1){osc1.freq(bass[x][1]);osc1Env.play(osc1)}
  if(snare[x]==1){env.play(noise)}
  if (x==1&&recorded==true){soundFile.play()}
  if (x%16==0){shake.play()}
  if (x==63){x=0}

}

function keyTyped() {
  // make sure user enabled the mic
  //  if (state === 0 && mic.enabled) {
if (key == 'a') {
  recorded=true;
    // record to our p5.SoundFile
    recorder.record(soundFile);
    //text('Recording!', 20, 70);
  }

  if (key == 's') {
    //play([startTime],[rate],[amp],[cueStart],[duration])
    soundFile.play(0,mouseX/1000,1,0,10);
  }

  if (key == 'p') {
     fr=fr+1;
    }

    if (key == 'l') {
      fr=fr-1;
    }

    if (key == 'q') {
      osc1.freq(50);osc1Env.play(osc1)
      bass[x][0]=1;
      bass[x][1]=50;
    }

    if (key == 'w') {
      osc1.freq(70);osc1Env.play(osc1)
      bass[x][0]=1;
      bass[x][1]=70;
    }

    if (key == 'e') {
      osc1.freq(90);osc1Env.play(osc1)
      bass[x][0]=1;
      bass[x][1]=90;
    }

    if (key == 'r') {
      osc1.freq(120);osc1Env.play(osc1)
      bass[x][0]=1;
      bass[x][1]=120;
    }

    if (key == 't') {
      osc1.freq(150);osc1Env.play(osc1)
      bass[x][0]=1;
      bass[x][1]=150;
    }
    if (key == 'y') {
      env.play(noise)
      snare[x]=1;
    }

}

function keyReleased() {
  recorder.stop();
}

function touchStarted(){
  osc2.start();
  soundFile.play(0,map(mouseX,0,width,0,2),1,0,10);
}

function touchEnded(){
  osc2.stop();
}
