//var noise, env, delay;
//var x=0;
//var pointX=width/2;
//var pointY=height/2;

function setup() {
  createCanvas(2000, 2000);
  noStroke();
  background(0);
}


function draw(){

}

// mouseClick triggers envelope
function mousePressed() {
  fill(0);
//ellipse(mouseX,mouseY,100,100);
  Ellipses();
  }

function Ellipses(){
  fill(255);
  ellipse(mouseX,mouseY,100,100)
}
