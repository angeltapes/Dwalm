var mic, fft, kick, clap, shake;

function preload(){

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
   //text(fft.analyze(),50,50);

   text (Math.max.apply(null, spectrum),50,50);

   //try this to trigger a sound on the note A -
  //if (spectrum[55]==Math.max.apply(null, spectrum)){fill(100,155,spectrum[55]);ellipse(250,spectrum[55],50,50);osc.freq(110);envelope.play(osc, 0, 0.1);}


  //taken from https://en.wikipedia.org/wiki/Piano_key_frequencies
  if (spectrum[24]>100){fill(255,spectrum[24],155);ellipse(50,spectrum[44],50,50);osc.freq(87);envelope.play(osc, 0, 0.1);}
  if (spectrum[44]>100){fill(255,spectrum[44],155);ellipse(50,spectrum[44],50,50);osc.freq(87);envelope.play(osc, 0, 0.1);}
  if (spectrum[55]>100){fill(100,155,spectrum[55]);ellipse(250,spectrum[55],50,50);osc.freq(110);envelope.play(osc, 0, 0.1);}
  if (spectrum[58]>100){fill(spectrum[58],155,100);ellipse(300,spectrum[58],50,50);osc.freq(123);envelope.play(osc, 0, 0.1);}
  if (spectrum[62]>100){fill(155,100,spectrum[62]);ellipse(200,spectrum[62],50,50);osc.freq(256);envelope.play(osc, 0, 0.1);}
  if (spectrum[65]>100){fill(50,spectrum[65],100);ellipse(220,spectrum[65],50,50);osc.freq(317);envelope.play(osc, 0, 0.1);}
  if (spectrum[69]>100){fill(spectrum[69],155,50);ellipse(240,spectrum[69],50,50);osc.freq(400);envelope.play(osc, 0, 0.1);}

}
