var mic, recorder1, soundFile;

function setup() {
  createCanvas(width,height);
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
  text('Press a to record', 20, 20);
  text('Press s to play', 20, 70);

}

function keyTyped() {
  // make sure user enabled the mic
//  if (state === 0 && mic.enabled) {
if (key == 'a') {
    // record to our p5.SoundFile
    recorder.record(soundFile);
    text('Recording!', 20, 70);
  }

  if (key == 's') {
    //play([startTime],[rate],[amp],[cueStart],[duration])
    soundFile.play(0,mouseX/1000,1,0,10);
  }
}

function keyReleased() {
  recorder.stop();
}
