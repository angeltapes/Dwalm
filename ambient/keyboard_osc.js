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
  text("Voice:",50,110);
  text(type,170,110);
  text("Root frequency:",50,130);
  text(root,170,130);
  text("Ratio:",50,150);
  text(frequency/root,170,150);
  osc1.amp(x/100);
  osc1.freq(frequency);
  osc2.freq(mouseX/2);
  osc3.freq(2*mouseX);
  osc4.freq(mouseX/1);
  if (x>0){x=x-1};

}

function keyTyped() {
  x=100;
  //adjust the amount root is multiplied by to change the scale. 
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
    frequency=root*1.84;
  }
  if (key == 'k') {
    frequency=root*2;
  }
  if (key == 'l') {
    frequency=root*2.26;
  }

//top keys
  if (key == 'q') {
    root=440;
    frequency=root;
  }
  if (key == 'w') {
    frequency=root*1.08;
  }
  if (key == 'e') {
    frequency=root*1.21;
  }
  if (key == 'r') {
    //blank
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
    //blank
  }
  if (key == 'o') {
    //blank
  }
  if (key == 'p') {
    //blank
  }

  //bottom keys
    if (key == 'z') {
      root=root+1;
      frequency=root;
    }
    if (key == 'x') {
      root=root-1;
      frequency=root;
    }
    if (key == 'c') {
      root=root+10;
      frequency=root;
    }
    if (key == 'v') {
      root=root-10;
      frequency=root;
    }
    if (key == 'b') {
      root=root+20;
      frequency=root;
    }
    if (key == 'n') {
      root=root+20;
      frequency=root;
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
