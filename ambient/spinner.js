var x, expand, circleWidth;

function setup() {
	createCanvas(windowWidth, windowHeight);
	background(0);
  x=1;
	expand=true;
	circleWidth=0;
}

function draw() {
noStroke();
circleWidth=mouseY-pmouseY;
  if (expand==true){x++}
	if (x==128){expand=false}
	if (expand==false){x--}
	if (x==0){expand=true}

	translate(width/2,height/2);
	rotate(frameCount*0.01);
	fill(x+60,x*x/2,x+80-x*x/10,255-3*x);
	ellipse(mouseY,50,circleWidth,circleWidth);
fill(x*4+150,x*x/10,x+80,255-3*x);
ellipse(x+100,-x-100,50+x,50+x);
fill(x*2,x*x/10,x+80,255-3*x);
ellipse(-x,-x,50+x,50+x);



}
