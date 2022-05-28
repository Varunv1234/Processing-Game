// Daniel Shiffman
// http://codingtra.in
// http://patreon.com/codingtrain
// Code for: https://youtu.be/cXgA1d_E-jY&

function Bird() {
  this.y = height / 2;
  this.x = width / 2;

  this.gravity = 0.7;
  this.lift = -height/30;
  this.velocity = 0;
  this.gameongoing = true;
  this.numjumps = 3;

  this.show = function() {
    fill(255);
    ellipse(this.x, this.y, 32, 32);
  };


  this.up = function() {
    if ( this.numjumps > 0){
    this.velocity += this.lift;
    this.numjumps -= 1;
    }
  };

  this.update = function() {
    this.velocity += this.gravity;
    // this.velocity *= 0.9;
    this.y += this.velocity;

    if (this.y > height -30 && totalSeconds > 3) {
      this.y = height;
      this.velocity = 0;
      this.gameongoing = false;
    }

    if (this.y < 5) {
      this.y = 10;
      //this.velocity = 0;
    }
  };
  this.gameongoingmain = function() {
    if (this.gameongoing == true ){
      return true;
    }
    else {
      return false;
    }
  }
}
