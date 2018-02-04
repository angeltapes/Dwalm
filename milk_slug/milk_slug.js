var coo,piggy,x,selecta;
function preload(){
  coo = loadSound("coo.mp3");
  piggy = loadSound("piggy.mp3");
}

function setup(){
  frameRate=random(40,80);
    createCanvas(1600,900);
    x=0;
}

function draw(){
  fill(255);
  x++;
  text("Boab's Vegan BBQ",mouseX,mouseY);
  if(x%20==0){playSound()};
  //coo.play();
}

function playSound(){
  selecta=int(random(1,5));
  if (selecta==1){coo.play()}
  if (selecta==2){piggy.play()}
}
