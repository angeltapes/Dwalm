// Daniel Shiffman
// http://codingtra.in
// http://patreon.com/codingtrain
// Code for: https://youtu.be/SfA5CghXw18

var song;
var button;
var jumpButton;

function setup() {
  createCanvas(200, 200);
  song = loadSound("long.mp3", loaded);
  button = createButton("play");
  button.mousePressed(togglePlaying);
  jumpButton = createButton("jump");
  jumpButton.mousePressed(jumpSong);
  background(51);

  song.addCue(2, changeBackground, color(0, 0, 255));
  song.addCue(4, changeBackground, color(0, 255, 255));
  song.addCue(6, changeBackground, color(255, 255, 255));
}

function changeBackground(col) {
  background(col);
}

function jumpSong() {
  var len = song.duration();
  var t = 0; //random(len);
  console.log(t);
  song.jump(t);
}

function draw() {
  //if (song.currentTime() > 5) {
  //background(song.currentTime() * 10, 0, 255);
  //}


}
