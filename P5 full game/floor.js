

function Floor() {
 
  

  this.spacing = random(width/8,width/4);
  this.top = height/3;
  this.bottom = height - (this.top + this.spacing);
  this.x = width;
  this.w = random(width/12,width/6);
  this.speed = 6 * (1+totalSeconds/500);

  this.highlight = false;

  this.hits = function(bird) {
    hit = collideRectCircle(this.x, height - this.bottom, this.w, this.bottom, bird.x, bird.y, 32);
    if (hit == true){
      bird.velocity = 0;
      bird.gravity = 0;
      bird.numjumps = 2;
    }
    else {
      bird.gravity = 0.7;
    }
    /*
    if (bird.y < this.bottom + 64 && bird.y > this.bottom ) {
      if (bird.x > this.x && bird.x < this.w) {
        this.highlight = true;
        bird.y = this.bottom;
        return true;
      }
    }
    this.highlight = false;
    return false;
    */
  };


  this.show = function() {
    this.color1 = 255 % totalSeconds;
    this.color2 = 255 % (5*totalSeconds + 50);
    this.color3 = 255 % (10*totalSeconds + 75);
    fill(this.color1,this.color2,this.color3);
    rect(this.x, height - this.bottom, this.w, this.bottom);
  };

  this.update = function() {
    this.x -= this.speed;
  };

  this.offscreen = function() {
    if (this.x < -this.w) {
      return true;
    } else {
      return false;
    }
  };
}
