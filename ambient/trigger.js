var sound, amplitude, cnv;

function preload(){
  sound = loadSound('voice1.mp3');
}

function setup() {
  mic = new p5.AudioIn();
  mic.start();
  createCanvas(1300,900);
  amplitude = new p5.Amplitude();
  amplitude.setInput(mic);
}

function draw() {
  background(0);
  fill(255);
  var level = amplitude.getLevel();
  text(level,50,50);
//  var size = map(level, 0, 1, 0, 200);
//  ellipse(width/2, height/2, level, level);
}
