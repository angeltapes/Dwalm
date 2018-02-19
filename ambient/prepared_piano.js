var mic, fft, kick, clap, shake;

function preload(){
  kick = loadSound("kick.mp3");
  clap = loadSound("clap.mp3");
  shake = loadSound("shake.mp3");
  voice = loadSound("whistle.mp3");
}

function setup() {
   createCanvas(710,400);
   noFill();
   osc = new p5.Oscillator();

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

    osc.start();
    osc.amp(0);
}

function draw() {
   background(200);

   var spectrum = fft.analyze();

   beginShape();
   for (i = 0; i<spectrum.length; i++) {
    vertex(i, map(spectrum[i], 0, 255, height, 0) );
   }
   endShape();
   text(fft.analyze(),50,50);


  //taken from https://en.wikipedia.org/wiki/Piano_key_frequencies
  if (spectrum[44]>100){fill(255,spectrum[44],155);ellipse(50,spectrum[44],50,50);osc.freq(87);envelope.play(osc, 0, 0.1);if(kick.isPlaying(false)){kick.play()}}
  if (spectrum[44]>100){fill(255,spectrum[44],155);ellipse(50,spectrum[44],50,50);osc.freq(87);envelope.play(osc, 0, 0.1);if(clap.isPlaying(false)){clap.play()}}
  if (spectrum[55]>100){fill(100,155,spectrum[55]);ellipse(250,spectrum[55],50,50);osc.freq(110);voice.play()}
  if (spectrum[58]>100){fill(spectrum[58],155,100);ellipse(300,spectrum[58],50,50);osc.freq(123);shake.play()}
  if (spectrum[62]>100){ellipse(200,spectrum[200],50,50);osc.freq(130);envelope.play(osc, 0, 0.1);voice.rate(-0.5);voice.play()}
  if (spectrum[65]>100){ellipse(220,spectrum[220],50,50);osc.freq(147);envelope.play(osc, 0, 0.1);voice.rate(1.3);voice.play()}
  if (spectrum[69]>100){ellipse(240,spectrum[240],50,50);osc.freq(165);envelope.play(osc, 0, 0.1);voice.rate(2);voice.play()}
}
