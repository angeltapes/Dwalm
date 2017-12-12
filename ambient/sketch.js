/*10-Paediophile.mp3
15-Who The Fuck Is Fred_.mp3
17-Bouncing Betty.mp3
2-Garibaldi.mp3
3-Come On James.mp3
4-Conquor Your Fears.mp3
5-You Know I Was Wondering.mp3
7-Ethical Hacking.mp3
8-One Step Beyond.mp3
*/

var song1;
//var song2;
//var imgcover;
//var imgqueen;
var x=0;
//var button;
//var jumpButton;


function preload() {
  //imgcover = loadImage("best-of-british-cover.jpg")
  //imgqueen = loadImage("Queen-Bohemian-Rhapsody.jpg");
  //imgbetty = loadImage("bouncing-betty.svg");
  song1 = loadSound("voice1.mp3");
}

function setup() {
  createCanvas(2000, 2000);
  background(0);
  //image(imgcover,50,50);

  //song2 = loadSound("15-Who The Fuck Is Fred_.mp3");
  //button = createButton("play");
//  var x=0;
}

function draw()
{song1.play();
  fill(255);
  ellipse(100,100,100,100);
/*  x=x+1;
  background(0);
  if (x=20){
    song1.play();
    x=0;*/
  }
  //image(imgcover,width/2-x/5,x/5,50+x/5,50+x/5);
//}

/*function mouseClicked(){
  if (mouseX>width/2 && mouseY>height/2) {
  // text("+YAS",100,100);
song1.stop();
  song1.play();
  image(imgqueen,mouseX,x,200,200);
 }
 else if (mouseX>width/2 && mouseY<height/2) {
song2.stop();
   song2.play();
   fill (random(255),random(255),random(255));
    image(imgbetty,mouseX,x,200,200);
 }
 else if(mouseX<width/2 && mouseY>height/2) {
   song2.play();
   fill (random(255),random(255),random(255));
   image(imgbetty,mouseX,x,200,200);
 }

}*/

/*
var img;
var imgMask;

function preload() {
  img = loadImage("assets/moonwalk.jpg");
  imgMask = loadImage("assets/mask.png");
}

function setup() {
  createCanvas(720, 400);
  img.mask(imgMask);
  imageMode(CENTER);
}

function draw() {
  background(0, 102, 153);
  image(img, width/2, height/2);
  image(img, mouseX, mouseY);
}
*/
  /*button.mousePressed(togglePlaying);
  jumpButton = createButton("jump");
  jumpButton.mousePressed(jumpSong);
  background(51);*/

  //song.addCue(2, changeBackground, color(0, 0, 255));
  //song.addCue(4, changeBackground, color(0, 255, 255));
  //song.addCue(6, changeBackground, color(255, 255, 255));


/*function changeBackground(col) {
  background(col);
}*/
/*
function jumpSong() {
  var len = song.duration();
  song.jump(random(20));
//  var t = 0; //random(len);
  //console.log(t);
  //song.jump(t);
}

function togglePlaying() {
  if (!song.isPlaying()) {
    song.play();
    song.setVolume(0.3);
    button.html("pause");
  } else {
    //change to .stop() to stop completely
    song.pause();
    button.html("play");
  }
}

function loaded() {
  console.log("loaded");
}
*/
/*function draw() {
  if (song.currentTime() > 5) {
  background(song.currentTime() * 10, 0, 255);
  }
}*/
