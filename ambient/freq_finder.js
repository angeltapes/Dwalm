var mic, fft, kick, clap, shake, markerX1, markerY1, markerX2, markerY2, c, x1, x2;

function preload(){
  kick = loadSound("kick.mp3");
  clap = loadSound("clap.mp3");
  shake = loadSound("shake.mp3");
  voice = loadSound("whistle.mp3");
}

function setup() {
   markerX1=width;
   markerY1=height;
   markerX2=width;
   markerY2=height;

   createCanvas(2000,2048);
   noFill();
   osc1 = new p5.Oscillator();
   osc2 = new p5.Oscillator();

   playMode = 'restart';

   mic = new p5.AudioIn();
   mic.start();
   fft = new p5.FFT();
   fft.setInput(mic);

   // Instantiate the envelope
    envelope = new p5.Env();

    // set attackTime, decayTime, sustainRatio, releaseTime
    envelope.setADSR(0.001, 0.5, 0.1, 0.5);

    // set attackLevel, releaseLevel
    envelope.setRange(1, 0);

    osc1.start();
    osc2.start();
    x1=0;
    x2=0;
}

function draw() {
   osc1.amp(x1/10);
   osc2.amp(x2/10);
   if (x1>0){x1--};
   if (x2>0){x2--};

   background(255);

   fill(0);
   text(x1,600,10);
   text(x2,600,30);

   var spectrum = fft.analyze();

   stroke(0);
   fill(255);
   rect(markerX1-10,markerY1*10-10,30,30);
   rect(markerX1,markerY1*10,10,10);
   ellipse(markerX2,markerY2*10,30,30);
   ellipse(markerX2,markerY2*10,10,10);

   stroke(255);
   for (i = 0; i<spectrum.length; i++) {
    rect(0,i*10,spectrum[i]*2,10);
    fill(20+spectrum[i],50+spectrum[i],spectrum[i]);
    if (i==markerY1+1&&spectrum[i]*2>markerX1){textSize(spectrum[i]);text("YAS",520,300);x1=10;osc1.freq(spectrum[i]*2)}
    if (i==markerY2+1&&spectrum[i]*2>markerX2){textSize(spectrum[i]);text("AYE",520,500);x2=10;osc2.freq(spectrum[i]*2)}
  }
}

function touchStarted(){
  if (mouseButton === LEFT) {
    markerX1=mouseX;
    markerY1=int(mouseY/10);
    x1=10;
  }
  if (mouseButton === RIGHT) {
    markerX2=mouseX;
    markerY2=int(mouseY/10);
    x2=10;
  }
}

//disable Firefox's right-click context menu
document.oncontextmenu = function () { // Use document as opposed to window for IE8 compatibility
  return false;
};

window.addEventListener('contextmenu', function (e) { // Not compatible with IE < 9
  e.preventDefault();
}, false);
