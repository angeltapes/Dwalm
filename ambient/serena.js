function setup() {

  createCanvas(4000, 2000);
  noStroke();
  background(0);

}


function draw(){

}
text("Serena",100,100,100,100);
// mouseClick triggers envelope
function touchMoved() {
  fill(0);
//ellipse(mouseX,mouseY,100,100);
  Ellipses();
  }




function Ellipses(){
  fill(255);
  ellipse(mouseX,mouseY,100,100)
}
