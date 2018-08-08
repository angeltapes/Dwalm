var mic, fft, recorder, soundfile, recordTimer, markerX1, markerY1, markerX2, markerY2;

function setup() {
   markerX1=width;
   markerY1=height;
   markerX2=width;
   markerY2=height;

   createCanvas(2000,2048);
   noFill();
   frameRate(5);

   playMode = 'restart';

   mic = new p5.AudioIn();
   mic.start();
   fft = new p5.FFT();
   fft.setInput(mic);
   recorder = new p5.SoundRecorder();
   recorder.setInput(mic);
   soundFile = new p5.SoundFile();
   recordTimer=0;
}

function draw() {
   background(255);
   textSize(24);
   text("PRESS A TO RECORD",700,100);
   text("LEFT/RIGHT MOUSE BUTTONS - SET MARKERS",700,130);
   if (keyIsPressed==true){fill(255,0,0);text("RECORDING",700,190);}
   var spectrum = fft.analyze();
   stroke(0);
   fill(0);
   text("PLAY",markerX1-10,markerY1*10-5);
   rect(markerX1,markerY1*10,10,10);
   text("HALF SPEED",markerX2-10,markerY2*10-10);
   ellipse(markerX2,markerY2*10,10,10);

   //draw the bars for sound visualisation and evaluate if each marker is being touched by a bar
   stroke(255);
   for (i = 0; i<spectrum.length; i++) {
     rect(0,i*10,spectrum[i]*2,10);
     fill(20+spectrum[i],50+spectrum[i],spectrum[i]);
     if (i==markerY1+1&&spectrum[i]*2>markerX1){
       textSize(spectrum[i]);text("PLAY",520,300);
       if (soundFile.isLoaded()==true&&soundFile.isPlaying()==false){
         soundFile.play(0,1,1,0,10)
       }
   }

   if (i==markerY2+1&&spectrum[i]*2>markerX2&&recordTimer==0){
     textSize(spectrum[i]);text("HALF SPEED",520,500);
     if (soundFile.isLoaded()==true&&soundFile.isPlaying()==false){
       soundFile.play(0,0.5,1,0,10)
     }
   }

  }
}

function startRecording(){
  text("startrecording",width/2,200);
  if (recordTimer==0){recordTimer=20;
    //recorder.record(soundFile)
  }
}

function touchStarted(){
  if (mouseButton === LEFT) {
    markerX1=mouseX;
    markerY1=int(mouseY/10);
  }
  if (mouseButton === RIGHT) {
    markerX2=mouseX;
    markerY2=int(mouseY/10);
  }
  if (mouseButton === CENTER) {
    background(255,0,0);
    recorder.record(soundFile);
  }
}

function keyTyped() {
  // make sure user enabled the mic
//  if (state === 0 && mic.enabled) {
if (key == 'a'||key == 'A') {
    // record to our p5.SoundFile
    recorder.record(soundFile);
  }

  if (key == 's'||key == 'S') {
    //play([startTime],[rate],[amp],[cueStart],[duration])
    soundFile.play(0,1,1,0,10);
  }
}

function keyReleased() {
  recorder.stop();
}

function touchEnded() {
  recorder.stop();
}

//disable Firefox's right-click context menu
document.oncontextmenu = function () { // Use document as opposed to window for IE8 compatibility
  return false;
};

window.addEventListener('contextmenu', function (e) { // Not compatible with IE < 9
  e.preventDefault();
}, false);
