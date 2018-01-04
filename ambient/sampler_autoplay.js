var mic, recorder1, soundFile,gotSoundFile,x,loopLength, clap;

function preload(){
  //create some preloaded percussion
  clap = loadSound("clap.mp3");
}

function setup() {
  createCanvas(2000,1000);
  background(0);

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
  //text('Press a to record', width/2,200);
  //text('Press s to play', width/2, 300);
  //gotSoundFile='false';
  x=9999;
  loopLength=100;
  //soundPlaying='false';
}

function draw(){
  background(0);
  x++;
  text(x,50,50);
  if (x==loopLength){soundFile.play();x=0;}

  //uncomment this to unleash chaos -
  //if (x==loopLength/2){soundFile.play(0,(random(0,3 )),1,0,10);}
}
//soundFile.play(0,random(1,10),1,0,10);

function keyTyped() {
  // make sure user enabled the mic
//  if (state === 0 && mic.enabled) {
if (key == 'a') {
    // record to our p5.SoundFile
    recorder.record(soundFile);
    fill(random(0,255),random(0,255),random(0,255));
    ellipse (random(width/2-50,width/2+50),random(height/2-50,height/2+50),50,50)
  }

  if (key == 's') {x=0;}
  if (key == 'd') {x=999;}
  if (key == 'z') {x=0;loopLength=10;}
  if (key == 'x') {x=0;loopLength=20;}
  if (key == 'c') {x=0;loopLength=30;}
  if (key == 'v') {x=0;loopLength=40;}
  if (key == 'b') {x=0;loopLength=50;}
  if (key == 'n') {x=0;loopLength=60;}
  if (key == 'm') {x=0;loopLength=70;}

  if (key == 'q') {soundFile.rate(0.5);}
  if (key == 'w') {soundFile.rate(1);}
  if (key == 'e') {soundFile.rate(1.3);}

  if (key == 'p') {loopLength++;}
  if (key == 'l') {loopLength--;}
}

function keyReleased() {
  recorder.stop();
  keyEnded=frameCount-keyStarted;
  text(keyStarted,300,300);
  text(keyEnded,300,500);
}
