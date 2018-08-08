//BLUR, THRESHOLD, POSTERIZE, INVERT, GRAY,ERODE,DILATE
var capture, x1, y1, x2, y2, x3, y3;
function setup() {
  createCanvas(1400, 600);
  capture = createCapture(VIDEO);
  frameRate(4);
  noise1=new p5.Noise();
  x1=400;
  y1=300;
  x2=700;
  y2=300;
  x3=1000;
  y3=300;
}

function draw() {
  //saveFrames("image-", "png", 5, 30);

image(capture, mouseX, mouseY, mouseX-1400,mouseY);



filter(THRESHOLD, 0.5);
  //image(capture, width/2+mouseX, -200, width/2-mouseX/2, 2*height-mouseY);

 //text (c,50,50);
 stroke(255);
 fill(255,0,0);
 ellipse(x1,y1);
 var c=get (x1,y1);
 if (red(c)==255){fill(255,0,0,150);ellipse(x1,y1,300,300)}
 fill(0,255,0);
 ellipse(x2,y2);
  var c=get (x2,y2);
 if (red(c)==255){fill(0,255,0,150);ellipse(x2,y2,300,300)}
 fill(0,0,255);
 ellipse(x3,y3);
  var c=get (x3,y3);
if (red(c)==255){fill(0,0,255,150);ellipse(x3,y3,300,300)}


 //fill(c);
 //ellipse(50,50,50,50);

  //filter(INVERT);
  //image(capture, 0, 10*mouseY, width/2+mouseX,height+mouseY);
}
