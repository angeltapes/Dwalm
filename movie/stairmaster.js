//Crashes the browser
var waveform;

function preload(){
  instruments = loadSound('sound/instruments.mp3');
  john = loadSound('sound/john.mp3');
  stuart = loadSound('sound/stuart.mp3');
  bobby = loadSound('sound/bobby.mp3');
}

function setup(){
  var cnv = createCanvas(1400,800);
  cnv.mouseClicked(togglePlay);
  fft = new p5.FFT();
  instruments.amp(1);

}

function draw(){
  background(0);

  var spectrum = fft.analyze();
  ellipse(100,spectrum[100],50,50);
  ellipse(200,spectrum[200],50,50);
  ellipse(300,spectrum[200],50,50);
  noStroke();
  fill(0,255,0); // spectrum is green
  for (var i = 0; i< spectrum.length; i++){
    var x = map(i, 0, spectrum.length, 0, width);
    var h = -height + map(spectrum[i], 0, 255, height, 0);
    //rect(x, height, width / spectrum.length, h )
  }

  // create a new Amplitude analyzer
  //analyzer = new p5.Amplitude();

  // Patch the input to an volume analyzer
  //analyzer.setInput(song);

  instAmp = new p5.Amplitude();
  instAmp.setInput(john);
  noFill();
  beginShape();
  stroke(255,0,0); // waveform is red
  strokeWeight(1);
  for (var i = 0; i< instAmp.length; i++){
    var x = map(i, 0, instAmp.length, 0, width);
    var y = map( instAmp[i], -1, 1, 0, height);
    vertex(x,y);
  }
  endShape();

  text('click to play/pause', 4, 10);
}

// fade sound if mouse is over canvas
function togglePlay() {
  if (instruments.isPlaying()) {
    instruments.pause();
    john.pause();
    stuart.pause();
    bobby.pause();
  } else {
    instruments.loop();
    john.loop();
    stuart.loop();
    bobby.loop();
  }
}
