var song;
var slider;
var sliderVolume;
var sliderRate;
var sliderPan;

function preload (){
  //display a loading message until this has loaded


}

function setup(){
  createCanvas(200,200);
  song = loadSound ("long.mp3",loaded);
  song.setVolume(0.5);
  //change the playback rate
  sliderRate=createSlider(0,1,0,0.01);
  //change the playback pan
  sliderPan=createSlider(0,1,0,0.01);

}

function loaded (){
   
  song.play();

}
function draw(){
  background(0);
  song.pan(sliderPan.value());
  song.rate(sliderPan.value());
}
