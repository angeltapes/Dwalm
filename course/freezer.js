// Daniel Shiffman
// http://codingtra.in
// http://patreon.com/codingtrain
// Code for: https://youtu.be/YcezEwOXun4

var song;
var button;

function setup() {
  createCanvas(200, 200);
  song = loadSound("long.mp3", loaded);
  button = createButton("play");
  button.mousePressed(togglePlaying);
  background(51);
}

function draw (){
  if (mouseX>100){togglePlaying;ellipse(50,50,50,50)};
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
