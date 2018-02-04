//Set up envelops: https://p5js.org/examples/sound-note-envelope.html
var osc1,x;
function setup() {
osc1 = new p5.SinOsc();
osc2 = new p5.Oscillator();
osc1.setType('triangle');
x=0;
}

function draw() {
  if (x>0){x--};
  fill(100,200,255);
  rect (50,50,100,100);
  osc1.freq(mouseX/2);
  osc2.freq(mouseX/4);
  osc1.amp(map(mouseY,0,height,0,0.3)*x);
  osc2.amp(map(height-mouseY,0,height,0,1)*x);
  if (mouseX>50&&mouseX<100&&mouseY>50&&mouseY<100&&x==0){
    x=100;
    osc1.start();
    osc2.start();
  }

}
