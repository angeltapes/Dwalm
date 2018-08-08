var fileName, x;

function setup(){
  createCanvas(1600,1000);
  fill(255);
  x=0;

}
function draw(){
  //background(0);
  x++;
  fill(150-mouseX-pmouseX,100+mouseY-pmouseY,random(0,255));
  fileName=month()+" "+day()+" "+hour()+" "+minute()+" "+second();
  ellipse(mouseX,mouseY,mouseX-pmouseX,mouseY-pmouseY);
  if (x==60){saveCanvas(fileName,'png');x=0}
  //text(fileName,100,100);
  //saveFrames(filename,extension,duration,framerate,[callback])
  //saveFrames(fileName,png,10,60,[callback])
}

function keyTyped() {

if (key == 'a') {
    saveCanvas(fileName,'png')

  }
}
