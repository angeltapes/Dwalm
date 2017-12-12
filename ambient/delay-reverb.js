var noise, env, delay;
var x=0;
var pointX=width/2;
var pointY=height/2;

function setup() {
  background(0);
  createCanvas(2000, 2000);
  noStroke();
  fill(255);
  textAlign(CENTER);
  text('click to play', width/2, height/2);


  noise = new p5.Noise('brown');
  noise.amp(0);
  noise.start();

  delay = new p5.Delay();

  // delay.process() accepts 4 parameters:
  // source, delayTime, feedback, filter frequency
  // play with these numbers!!
  //delay.process(noise, .12, .7, 2300);
  delay.process(noise, .5, .7, 2300);

  // play the noise with an envelope,
  // a series of fades ( time / value pairs )
  //env = new p5.Env(.01, 0.2, .2, .1);
  env = new p5.Env(3, 0.2, .2, .1);
}

// mouseClick triggers envelope
function mouseClicked() {
  // is mouse over canvas?
  if (mouseX > 0 && mouseX < width && mouseY > 0 && mouseY < height) {
    env.play(noise);
    x=0;
    pointX=mouseY;
    pointY=mouseY;
  }
}

function draw(){background(0);
  x=x+1
  fill(255,100+x,100+x,255-x);
  ellipse(pointX,pointY,x,x);
}
