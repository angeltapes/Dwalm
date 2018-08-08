var mic, fft, x;

function setup() {

   createCanvas(2000,2048);
   noFill();

   playMode = 'restart';

   mic = new p5.AudioIn();
   mic.start();
   fft = new p5.FFT();
   fft.setInput(mic);
   x=0;
}

function draw() {

   var spectrum = fft.analyze();
   stroke(0);

   x++;
   for (i=0;i<spectrum.length;i++){
     fill(50,i+100,i);
     ellipse(x,i+100,spectrum[i],spectrum[i])
   }
}

function touchStarted(){
  if (mouseButton === LEFT) {

  }
  if (mouseButton === RIGHT) {

  }
}

//disable Firefox's right-click context menu
document.oncontextmenu = function () { // Use document as opposed to window for IE8 compatibility
  return false;
};

window.addEventListener('contextmenu', function (e) { // Not compatible with IE < 9
  e.preventDefault();
}, false);
