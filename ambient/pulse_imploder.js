var song1;
var x=0;
var y=10;

function preload() {
  song1 = loadSound("kick.mp3");
}

function setup() {
  createCanvas(2000, 2000);
  //background(0);

}

function draw()
{
  background(0);
  textSize(256);
  fill(x);
  text("pulse",width/2,height/2);
  x=x+1; 
  song1.play();
  //text(x,x,y,10*x,x);
  if (mouseIsPressed){
    ellipse (mouseX,mouseY,50,50);
   x=0;
    //y=random(300);
    //var newRate = (map(mouseX, 0, 2000, -0.5, 1.5));
    song1.rate(mouseX/1000);
    }
}



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
