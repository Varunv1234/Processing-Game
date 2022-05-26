function person(width, height, floorx, floory, floorw ) {
  this.y = 3*height / 5;
  this.x = 64;
  this.drop = 12
  this.lift = -12;
  this.velocity = 0;
  
  if (this.y >= floory && floorx <= this.x && this.x <= floorx + floorw){
    this.gravity = 0.7;
  }
  else {
    this.gravity = 0;
  }

  /*
  this.show = function() {
    fill(255);
    ellipse(this.x, this.y, 32, 32);
  };
*/
  this.up = function() {
    this.velocity += this.lift;
  };

  this.down = function() {
    this.velocity += this.drop
  }
  this.alive = function() {
    if (this.y >= height) {
      return false
    }
    else {
      return true
    }
  }

  this.update = function() {
    this.velocity += this.gravity;
    this.y += this.velocity;

    if (this.y > height) {
      this.y = height;
      this.velocity = 0;
    }

    if (this.y < 0) {
      this.y = 0;
      this.velocity = 0;
    }
  };
};


