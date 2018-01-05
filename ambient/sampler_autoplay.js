var mic, recorder1, soundFile,gotSoundFile,x,loopLength, kick,delayTime,feedback,filterFrequency,newReverb;

function preload(){
  //create some preloaded percussion
  kick = loadSound("kick.mp3");
}

function setup() {
  createCanvas(2000,1000);
  select('canvas').position(300, 50);
  background(0);

  // create an audio in
  mic = new p5.AudioIn();

  // prompts user to enable their browser mic
  mic.start();

  // create a sound recorder
  recorder = new p5.SoundRecorder();

  // connect the mic to the recorder
  recorder.setInput(mic);

  // this sound file will be used to
  // playback & save the recording
  fill(255,255,255);
  soundFile = new p5.SoundFile();

  gotSoundFile='false';
  x=9999;
  loopLength=100;
  newReverb='false';

  delay = new p5.Delay();
  delayTime=0;
  feedback=0.1;
  filterFrequency=2300;

  reverb = new p5.Reverb();
  reverbTime=0;
  reverbDecay=1;
}

function draw(){
  background(0);
  x++;
  textSize(36);

  if (gotSoundFile=='false'){
    fill(255,255,255)
    text("Hold down A to record a loop",50,80);
  }

  if (gotSoundFile=='true'&&x>loopLength){
    fill(255,255,0);
    text("Click S to start looping",50,80)
  }

  if (gotSoundFile=='true'&&x<=loopLength){
    fill(0,255,0);
    text("Progress",50,80);
    rect(50,100,x,50);
    text("Loop Length",50,200);
    rect(50,220,loopLength,50);
  }

  if(reverbTime>0){
    fill(0,255,255);
    text("Reverb Time",50,330);
    rect(50,350,reverbTime*20,50);
    text("Reverb Decay",350,330);
    rect(350,350,reverbDecay*2,50);
  }

  if(delayTime>0){
    fill(150,155,255);
    text("Delay Time",50,460);
    rect(50,480,delayTime*200,50);
    text("Feedback",350,460);
    rect(350,480,feedback*200,50);
  }

  if (x==loopLength){
    //fill(0,255,0);
    //rect(50,100,loopLength,50);
    if(newReverb=='true'){
      reverb.process(soundFile,reverbTime,reverbDecay);


    };

    soundFile.play();x=0;}
    if (x==1){kick.play();}
    delay.process(soundFile, delayTime, feedback, filterFrequency);

  }

function keyTyped() {
  // make sure user enabled the mic
//  if (state === 0 && mic.enabled) {
if (key == 'a') {
    // record to our p5.SoundFile
    recorder.record(soundFile);
    fill(255,0,0);
    gotSoundFile='true'
  }

  if (key == 's') {x=0;}
  if (key == 'd') {x=999;}
  if (key == 'z') {x=0;loopLength=10;}
  if (key == 'x') {x=0;loopLength=20;}
  if (key == 'c') {x=0;loopLength=30;}
  if (key == 'v') {x=0;loopLength=40;}
  if (key == 'b') {x=0;loopLength=50;}
  if (key == 'n') {x=0;loopLength=60;}
  if (key == 'm') {x=0;loopLength=70;}

  if (key == 'q') {soundFile.rate(0.5);}
  if (key == 'w') {soundFile.rate(1);}
  if (key == 'e') {soundFile.rate(1.3);}

  //reverb and delay kill switch
  if (key == 'y'){delayTime=0;feedback=0;reverbTime=0;reverbDecay=0;newReverb='true'}

  //delay.process() accepts 4 parameters:
  //source, delayTime, feedback, filter frequency
  if (key == 'u') {if(delayTime<=0.7){delayTime=delayTime+0.1}}
  if (key == 'j') {if(delayTime>0){delayTime=delayTime-0.1}}
  if (key == 'i') {if(feedback<=0.7){feedback=feedback+0.1}}
  if (key == 'k') {if(feedback>0){feedback=feedback-0.1}}

  //connect soundFile to reverb
  if (key == 'r') {if(reverbTime<=7){if(reverbTime==0){reverb = new p5.Reverb()};reverbTime=reverbTime+1;newReverb='true'}}
  if (key == 'f') {if(reverbTime>0){reverbTime=reverbTime-1;newReverb='true';if(reverbTime==0){reverb.disconnect()};}}
  if (key == 't') {if(reverbDecay<=100){reverbDecay=reverbDecay+20;newReverb='true'}}
  if (key == 'g') {if(reverbDecay>1){reverbDecay=reverbDecay-20;newReverb='true'}}

  //adjust loop length
  if (key == 'p') {loopLength++;}
  if (key == 'l') {loopLength--;}
}

function keyReleased() {
  recorder.stop();
}

function mouseClicked()
{fill(255);ellipse(100,100,100,100)}
