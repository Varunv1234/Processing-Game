function Coins() {
  this.y = random(height/8,7*width/8);
  this.top = height/3;
  this.bottom = height - (this.top + this.spacing);
  this.x = width;
  this.w = random(width/12,width/8);
  this.speed = 6;
  this.coinsnum = 0;
  this.clicked = false;

  this.highlight = false;

  this.hits = function(bird) {
    hit = collideCircleCircle(bird.x, bird.y, 32, this.x, this.y, 32);
    if (hit==true && this.clicked == false) {
      return true;
    }
    else {
      return false;
    }

  };


  this.show = function() {
    fill(255, 213, 0);
    if (this.highlight) {
      fill(0, 0, 0);
    }
    ellipse(this.x, this.y, 32, 32);
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
