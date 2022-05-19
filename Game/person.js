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
  this.show = function() {
    fill(255);
    ellipse(this.x, this.y, 32, 32);
  };

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


function floor(width, height) {
  this.y = 3*height/5;
  this.width = Math.random(width/6, width/3);
  this.spacing = Math.random(width/10, width/6);
  this.speed = 6;
  this.forward1 = 5;
  this.backward1 = -5;
  this.x = width - this.width;

  this.forward = function(){
    this.x += this.forward1
    return this.forward1
  };
  
  this.backward = function(){
    this.x += this.backward1
  };
 
   this.hitsperson = function(){
    if (this.x <= person.x && this.var2 >= person.x){
      if (this.y <= person.y && this.y + 32 >= person.y) {
        return true;
      }
    else {
      return false;
    };
  };
  };

  this.show = function() {
    fill(0);
    rect(this.x, this.y, this.x + this.width, height);
  };

  this.update = function() {
    this.x -= this.speed;
    //this.width -= this.speed;
  };



  this.test = function() {
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
