//babymouse - mouse operated sound toy
var x, pressTime, osc1, osc2, osc3, recordings, recorded, voice, voiceSelected;
//try adding freq, amp, oscRecorded, oscGliss,
var osc1=new p5.Oscillator;
var osc2=new p5.Oscillator;
var osc3=new p5.Oscillator;
var osc4=new p5.Oscillator;
var osc5=new p5.Oscillator;

function setup(){
  recorded=false;
  createCanvas(1500,800);
  oscSetting=[];
  voice=[];

  /*
  voice[1]={enabled:"on",mode:"sine",playing="off"};
  voice[2]={enabled:"on",mode:"sine",playing="off"};
  voice[3]={enabled:"off",mode:"sine",playing="off"};
  voice[4]={enabled:"off",mode:"sine",playing="off"};
  voice[5]={enabled:"off",mode:"sine",playing="off"};
  */
  for (i=1;i<6;i++){
    //var voice[i]={enabled:"off",mode:"sine",playing:"off"};
    //settings for each voice - enabled, mode, playing, freq, amp
    oscSetting[i]=[1,1,0,240,0];
  }

  voiceSelected=2;

  osc1.start();
  osc1.amp(1);
  //osc1.freq(oscSetting[1][3]);
  x=0;

  //for (i=1;i<65;i++){
  //  recordings=[0,0,0,0,0]
//  }

}

 function draw(){
   //  print (voice[4].mode);
   print (oscSetting[1][3]);
   ellipse(mouseX,mouseY,50,50);
   osc1.freq(oscSetting[1][3]);
 }

function mousePressed() {
   if (mouseButton === LEFT) {
     ellipse(mouseX+50, mouseY, 50,100);
  oscSetting[1][3]=300;
  //   for(i=1;i=5;i++){

  //   }
   }

   if (mouseButton === RIGHT) {

     rect(mouseX, mouseY,50,50);
   }
   if (mouseButton === CENTER) {

   ellipse(mouseX,mouseY,50,50)
   }

 }

 //disable Firefox's right-click context menu
 document.oncontextmenu = function () { // Use document as opposed to window for IE8 compatibility
   return false;
 };

 window.addEventListener('contextmenu', function (e) { // Not compatible with IE < 9
   e.preventDefault();
 }, false);
