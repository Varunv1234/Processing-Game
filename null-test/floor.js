function floor(width, height) {
  this.y = 3*height/5;
  this.width = Math.random(width/6, width/3);
  this.spacing = Math.random(width/10, width/6);
  this.speed = 6;
  this.forward1 = 5;
  this.backward1 = -5;
  this.x = width - this.width;

  this.show = function() {
    this.x -= this.speed;
    this.width -= this.speed;
  };

  this.forward = function(){
    this.x += this.forward1;
    return this.forward1;
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