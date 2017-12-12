//has a scrolling line, but overcomplicated
var osc1;
var osc2;
var osc3;
var osc4;
var x;

function setup() {
  x=0;

  createCanvas(1400, 600);
  //frameRate(random(3,6));
  reverb = new p5.Reverb();
  delay = new p5.Delay();
  osc1 = new p5.Oscillator();
  osc2 = new p5.Oscillator();
  osc3 = new p5.Oscillator();
  osc4 = new p5.Oscillator();
  osc1.setType('sine');
  osc2.setType('triangle');
  osc3.setType('sawtooth');
  osc4.setType('square');
}

  function draw(){
    background(0);
    ellipse(mouseX,mouseY,10,10)
  //  x=x+1;
    //if (x>width/8){x=0};

  //  stroke(255);
    //strokeWeight(5);
  //  line(x,0,x,height/4);
  //  strokeWeight(0);
    //if (mouseX<width/8&&mouseY<height/4){fill(255),ellipse(mouseX,mouseY,10,10)};


/*
    textSize(128);
    fill(0,144,144);
    text("Sine",200,200);
    fill(144,144,144);
    text("Triangle",width/2,0+200);
    fill(144,0,144);
    text("Sawtooth",100,1.5*height/2);
    fill(144,144,0);
    text("Square",width/2,1.5*height/2);
    osc1.freq(mouseX);
    osc2.freq(mouseX/2);
    osc3.freq(2*mouseX);
    osc4.freq(mouseX/1);
    // delay.process() accepts 4 parameters:
    // source, delayTime, feedback, filter frequency

    delay.process(osc1, constrain(mouseY/1000,0.4,0.5), 0.5, mouseY);
    reverb.process(osc2,mouseY/2000,0.8,0.5);
    delay.process(osc3, constrain(mouseY/1000,0.4,0.5), 0.5, mouseY);
    reverb.process(osc4,mouseY/2000,0.8,0.5);*/
  }

//try multiple rainbow squares
  function touchStarted(){
  if (mouseX<width/8&&mouseY<height/4){fill(255),ellipse(mouseX,mouseY,10,10)};
    /*if (mouseX<width/2&&mouseY<height/2){osc1.start();}
    if (mouseX>width/2&&mouseY<height/2){osc2.start();}
    if (mouseX<width/2&&mouseY>height/2){osc3.start();}
    if (mouseX>width/2&&mouseY>height/2){osc4.start();}*/

  }
  function touchEnded(){
    osc1.stop();
    osc2.stop();
    osc3.stop();
    osc4.stop();
  }
