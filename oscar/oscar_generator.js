var osc1, osc2, osc3, freqMod, oscVoice, oscTypes, speed, bend, bendChange, delayFeedback, delayOn, x, play1, play2, play3;

function setup() {
  x=0;
  createCanvas(1500,800);

  var attackLevel1 = 1.0;
  var releaseLevel1 = 0;
  var attackTime1 = 0.001
  var decayTime1 = 0.2;
  var susPercent1 = 0.2;
  var releaseTime1 = 0.5;

  env1 = new p5.Env();
  env1.setADSR(attackTime1, decayTime1, susPercent1, releaseTime1);
  env1.setRange(attackLevel1, releaseLevel1);

  var attackLevel2 = 0.5;
  var releaseLevel2 = 0;
  var attackTime2 = 0.005
  var decayTime2 = 0.8;
  var susPercent2 = 0.5;
  var releaseTime2 = 0.6;

  env2 = new p5.Env();
  env2.setADSR(attackTime2, decayTime2, susPercent2, releaseTime2);
  env2.setRange(attackLevel2, releaseLevel2);

  var attackLevel3 = 1.0;
  var releaseLevel3 = 0;
  var attackTime3 = 0.005
  var decayTime3 = 0.9;
  var susPercent3 = 0.2;
  var releaseTime3 = 0.9;

  env3 = new p5.Env();
  env3.setADSR(attackTime3, decayTime3, susPercent3, releaseTime3);
  env3.setRange(attackLevel3, releaseLevel3);

  osc1 = new p5.Oscillator();
  osc2 = new p5.Oscillator();
  osc3 = new p5.Oscillator();

  //osc1.start();
  //osc2.start();
  //osc3.start();

  oscVoice=0;
  oscTypes=0;
  bend=0;
  bendChange=0;
  delayFeedback=0.5;
  delayOn=false;

  freqMod=[0.5,1,2];

  osc1.amp(0);
  osc2.amp(0);
  osc3.amp(0);

  play1=int(random(0,127));
  play2=int(random(0,127));
  play3=int(random(0,127));

  reverb = new p5.Reverb();
  delay = new p5.Delay();
}

function draw(){
  x++;
  background(0);
  fill(250);
  text(x,50,50);
  if (bendChange!=0){bend=bend+bendChange}

  if (x==play1){env1.play(); ellipse(random(0,width),random(0,height),50,50)}
  if (x==play2){env2.play();rect(random(0,width),random (0,height),50,50)}
  if (x==play3){env3.play()}

  if (x==127){
    osc1.freq(random(200,500));osc1.pan(1);
    osc2.freq(random(200,500));
    osc3.freq(random(200,500));osc3.pan(-1);
    x=0;
  }


  osc1.amp(map(mouseY,0,800,0,1));
  osc2.amp(map(mouseY,0,800,0,1));
  osc3.amp(map(mouseY,0,800,0,1));

  speed =(mouseX-pmouseX);

  fill(228,60,103,100);//Permanent Rose
  rect((mouseX-25)*freqMod[0],mouseY-25,50+speed,50+speed);

  fill(118,171,206,100);//Antwerp Blue
  ellipse(mouseX*freqMod[2],mouseY,50+speed,50+speed);

  fill(245, 210, 53,100);//New Gamboge
  triangle(mouseX-20-speed,mouseY+20+speed,mouseX,mouseY-20-speed,mouseX+20+speed,mouseY+20+speed);

  if (delayOn==true){
  // source, delayTime, feedback, filter frequency
  delay.process(osc1, mouseX/2000, 0.5, 2300);
  reverb.process(osc3, mouseY/2000,0.8,0.5);
  delay.process(osc3, mouseX/2000, 0.5, 2300);
  }
}

function keyTyped(){
if (key == 'a') {
  osc1.start();
  osc2.start();
  osc3.start();

  }
}


function touchStarted(){
  oscVoice++;
  if (oscVoice==3){oscVoice=0}

  if (mouseButton === LEFT) {
  //  osc1.stop();
  //  osc2.stop();
  //  osc3.stop();
//    osc1.start();
  //  osc2.start();
  //  osc3.start();
    bend=0;
    bendChange=0;
  }

  if (mouseButton === CENTER) {

    freqMod[oscVoice]=map(mouseX,0,width,0,3);

    osc1.start();
    osc2.start();
    osc3.start();

        if (oscVoice==0){
          fill(228,60,103,255);//Permanent Rose
          rect((mouseX-25)*freqMod[0],mouseY-25,50+speed,50+speed)
        }

        if (oscVoice==1){
          fill(118,171,206,255);//Antwerp Blue
          ellipse(mouseX*freqMod[2],mouseY,50+speed,50+speed)
        }

        if (oscVoice==2){
          fill(245, 210, 53,255);//New Gamboge
          triangle(mouseX-20-speed,mouseY+20+speed,mouseX,mouseY-20-speed,mouseX+20+speed,mouseY+20+speed)
        }
  }

  if (mouseButton === RIGHT) {
    oscTypes++;
    if (oscTypes==0){osc1.setType('sine');osc2.setType('sine');osc3.setType('sine')};
    if (oscTypes==1){osc1.setType('square');osc2.setType('square');osc3.setType('square')};
    if (oscTypes==2){osc1.setType('triangle');osc2.setType('triangle');osc3.setType('triangle')};
    if (oscTypes==3){osc1.setType('sawtooth');osc2.setType('sawtooth');osc3.setType('sawtooth')};
    if (oscTypes==4){
      delayOn=!delayOn;
      // source, delayTime, feedback, filter frequency
      delay.process(osc1, 0, 0.5, 2300);
      reverb.process(osc3, 0,0.8,0.5);
      delay.process(osc3, 0, 0.5, 2300);
      oscTypes=0};

    //osc1.start();
    //osc2.start();
    //osc3.start();
  }

}

function mouseWheel(event) {
  bend=1;
  bendChange+=event.delta;
  osc1.start();
  osc2.start();
  osc3.start();

}

function touchEnded(){

  delayFeedback=mouseX-pmouseX;
 }

 //disable Firefox's right-click context menu
 document.oncontextmenu = function () { // Use document as opposed to window for IE8 compatibility
   return false;
 };

 window.addEventListener('contextmenu', function (e) { // Not compatible with IE < 9
   e.preventDefault();
 }, false);
