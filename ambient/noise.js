function setup(){
  createCanvas(1600,600);
  noise1=new p5.Noise();
  noise2=new p5.Noise();
  noise1.setType('brown');
  noise2.setType('white');
}

function draw(){
  noise1.start();
  noise2.start();
  noise1.amp(map(mouseX,0,width,0,1));
    noise2.amp(1-map(mouseX,0,width,0,1));
}
