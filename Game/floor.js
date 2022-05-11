function floor() {
  this.y = 3*height/5
  this.width = random(width/6, width/3);
  this.spacing = random(width/10, width/6);
  this.speed = 6;
  this.forward1 = 5;
  this.backward1 = -5;
  this.x = width - this.width;


  this.forward = function(){
    this.speed += this.forward1
  }
  this.backward = function(){
    this.speed += this.backward1
  }
  this.hits_top = function(person) {
    if (person.y < this.y) {
      return true;
      }
    else {
    return false;
    }
  };

  this.show = function() {
    fill(0);
    rect(this.x, this.y, this.x + this.width, height);
  };

  this.update = function() {
    this.x -= this.speed;
    this.width -= this.speed;
  }

  this.onscreen = function() {
    if (this.x < 0) {
      return true;
    } else {
      return false;
    };
  };
};
