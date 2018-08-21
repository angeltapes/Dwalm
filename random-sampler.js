var x;

function setup(){
  mic = new p5.AudioIn();
  mic.start();
  recorder = new p5.SoundRecorder();
  recorder.setInput(mic);
  soundFile = new p5.SoundFile();
  x=0;
}

function draw(){
  background(0);
  fill(255);
  x++;
  text (x,50,50);
}
