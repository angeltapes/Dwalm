var x,waitTime;

function setup(){
  mic = new p5.AudioIn();
  mic.start();
  recorder = new p5.SoundRecorder();
  recorder.setInput(mic);
  soundFile = new p5.SoundFile();
  x=0;
  waitTime=int(random(300,900));
  createCanvas(1200,900);
    background(0);
}

function draw(){

  fill(255);
  x++;
  stroke(waitTime-x,waitTime/4-x/10,x/5);
  fill(waitTime-x,waitTime/4-x/10,x/5);
  ellipse(600,300,waitTime,waitTime);
  stroke(waitTime/4-x/10,waitTime-2*x,x-waitTime,150+x/10);
  fill(waitTime/4-x/10,waitTime-2*x,x-waitTime,150+x/10);
  ellipse(600,300,x,x);
  if (x==waitTime){x=0;recorder.record(soundFile,random(5,10));waitTime=int(random(300,900));}
  //loop([startTime], [rate], [amp], [cueLoopStart], [duration])
  if (soundFile.isLoaded()==true&&x==100){
    soundFile.rate(random(0,2));
    soundFile.loop(random(0,20));
  }


}
