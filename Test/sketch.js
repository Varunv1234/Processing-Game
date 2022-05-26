var widthM = screen.width - 200;
var heightM = screen.height -200;

var minutes = 0
var seconds = 0
var totalSeconds = 0;
setInterval(setTime, 1000);

function setTime() {
  ++totalSeconds;
  seconds = totalSeconds % 60;
  minutes = parseInt(totalSeconds / 60);
  
}


function person(height, up1) {
  this.y = height/2;
  this.g = 0;
  this.update = function() {
    this.y += this.g;
  }
  
  this.up = {
    if (up1 == false) {
    this.g = 5;
  }

  }
  if (up1 == true){
    this.g = -4
  }
}


function floor(width, height, persony) {
  this.y = height;
  this.width = width
  this.speed = 6;
  this.forward1 = 5;
  this.backward1 = -5;
  this.x = width - width/10;


  this.forward = function(){
    this.x += this.forward1;
    return this.forward1;
  };
  
  this.backward = function(){
    this.x += this.backward1
  };
 
   this.hitsperson = function(){
    if (this.x <= width/3 + width/10 && this.x >= width/3 - width/10){
      if (this.y <= persony && this.y + 32 >= persony) {
        return true;
      }
    else {
      return false;
    };
  };
  };

  this.update = function() {
    this.x -= this.speed;
    this.width -= this.speed;
  };


  this.check = function() {
     if (this.x < 0) {
      return true;
    } else {
      return false;
    };
  };


}




function setup() {
  createCanvas(displayWidth - 200, displayHeight - 200);
}

function draw() {
  fill(0);
  ellipse(widthM/3, heightM/2, height/10, height/10);


}