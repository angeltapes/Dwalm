var song1;
var x=0;
var y=20;
var markerX=1000;
var markerY=500;
var mic, recorder1, soundFile,gotSoundFile,recorded;

function preload() {
  song1 = loadSound("kick.mp3");
}

function setup() {
  createCanvas(2000, 1000);
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
  recorded='false';
}

function draw()
{
  background(0);
  fill(255);
  textSize(48);
  //text(markerX + "&" + markerY,markerX,markerY,100,100);
  textSize(256);
  fill(x+10);
  text("pulse",width/2-300,200);
  ellipse(markerX,markerY,50,50)
  x=x+1;
  if (x/2>y){
    x=0;
    song1.play(1);
  }
/*  if (recorded=='true'){
    //soundFile.rate((height-mouseY)/1000);
    soundFile.play();
    //song1.play();
  ellipse(50,50,50,50);
}*/

}

  if (mouseIsPressed){
    markerX=mouseX;
    markerY=mouseY;
    x=0;
    y=((width-mouseX)/50);
    song1.rate((height-mouseY)/500);
    }


function keyTyped() {
  // make sure user enabled the mic
//  if (state === 0 && mic.enabled) {
if (key == 'a') {
    // record to our p5.SoundFile
    recorder.record(soundFile);

  }

  if (key == 's') {
    //play([startTime],[rate],[amp],[cueStart],[duration])
    soundFile.play(0,1,1,0,10);
    //recorded=true;
  }
}

function keyReleased() {
  recorder.stop();
  recorded='true';
}
