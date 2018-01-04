var mic, recorder1, soundFile,gotSoundFile;

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
  text('Press a to record', width/2,200);
  text('Press s to play', width/2, 300);
  gotSoundFile=false;
}

function draw(){
  if (gotSoundFile==true){soundFile.play(0,random(1,10),1,0,10)}
}
//soundFile.play(0,random(1,10),1,0,10);

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
}

function keyReleased() {
  recorder.stop();
}
