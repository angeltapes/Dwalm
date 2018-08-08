var button,osc1,osc2,osc3;

function preload(){
  clap = loadSound("clap.mp3");
}
function setup() {
  canvas=createCanvas(1200,1200);
  background(155);
  /*button = createButton('click me now');
  button.position(19, 19);
  button.touchMoved(changeBG);
  button.class('playButton');
  canvas.class('phoneCanvas');*/
  osc1 = new p5.Oscillator();
osc2 = new p5.Oscillator();
osc3 = new p5.Oscillator();

}

function draw(){
  ellipse(mouseX,mouseY,50,50);
  osc1.freq(mouseX);
  osc1.amp(1);
  if(frameCount%10==10){clap.play()}
}

function changeBG() {

}

  function touchMoved(){
    var val = random(255);
    background(val);
//osc1.start();

return false;
}

/*  function touchEnded(){
    osc1.stop();
    return false;
  }*/
