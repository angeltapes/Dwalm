var osc1;
var osc2;
var osc3;
var osc4;
var x;
var type;
var frequency;
var root;

function setup() {
  createCanvas(1400, 600);
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
  x=0;
  osc1.start();
  root=440;
  frequency=440;
  type='sine';
}

function draw(){
  background(0);
  fill(255);
  text(type,100,100);
  osc1.amp(x/100);
  osc1.freq(frequency);
  osc2.freq(mouseX/2);
  osc3.freq(2*mouseX);
  osc4.freq(mouseX/1);
  if (x>0){x=x-1};

}

function keyTyped() {
  x=100;
  if (key == 'a') {
    frequency=root;
  }
  if (key == 's') {
    frequency=root*1.13;
  }
  if (key == 'd') {
    frequency=root*1.25;
  }
  if (key == 'f') {
    frequency=root*1.34;
  }
  if (key == 'g') {
    frequency=root*1.5;
  }
  if (key == 'h') {
    frequency=root*1.66;
  }
  if (key == 'j') {
    frequency=root*1.74;
  }
  if (key == 'k') {
    frequency=root*2;
  }
  if (key == 'l') {
    frequency=root*2.26;
  }

//top keys
  if (key == 'q') {
    frequency=root*0.5;
  }
  if (key == 'w') {
    frequency=root*1.08;
  }
  if (key == 'e') {
    frequency=root*1.21;
  }
  if (key == 'r') {
    osc1.freq(180);
  }
  if (key == 't') {
    frequency=root*1.43;
  }
  if (key == 'y') {
    frequency=root*1.58;
  }
  if (key == 'u') {
    frequency=root*1.72;
  }
  if (key == 'i') {
    osc1.freq(850);
  }
  if (key == 'o') {
    osc1.freq(1000);
  }
  if (key == 'p') {
    osc1.freq(1040);
  }

  //bottom keys
    if (key == 'z') {
      osc1.freq(220);
    }
    if (key == 'x') {
      osc1.freq(250);
    }
    if (key == 'c') {
      osc1.freq(280);
    }
    if (key == 'v') {
      osc1.freq(310);
    }
    if (key == 'b') {
      osc1.freq(350);
    }
    if (key == 'n') {
      osc1.freq(390);
    }
    if (key == 'm') {
      osc1.freq(430);
    }

    if (key == '1') {
      osc1.setType('sine');
      type='sine';
    }
    if (key == '2') {
      osc1.setType('triangle');
      type='triangle';
    }
    if (key == '3') {
      osc1.setType('square');
      type='square';
    }
    if (key == '4') {
      osc1.setType('sawtooth');
      type='sawtooth';
    }



}

function keyReleased() {
  //osc1.stop();
}
