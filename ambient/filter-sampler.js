var mic, recorder1, soundFile;
var fft, noise, filter, freq;

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
  noise = new p5.Noise();
  // disconnect unfiltered noise,
  // and connect to filter

  text('Press a to record', 20, 20);
  text('Press s to play', 20, 70);
  filter = new p5.BandPass();

  //soundFile.disconnect();
  //soundFile.connect(filter);
  noise.disconnect();
  noise.connect(filter);
  noise.start();
//    fft = new p5.FFT();
}

function play(){
  // set the BandPass frequency based on mouseX
  var freq = map(mouseX, 0, width, 20, 10000);
  filter.freq(freq);
  // give the filter a narrow band (lower res = wider bandpass)
  filter.res(50);
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
    soundFile.play(0,1,1,0,10);
  }
}

function keyReleased() {
  recorder.stop();
}
