function platform(){
	this.width = 15;
	this.height = 5;
	this.speed = floor.speed + 2
	this.x = width;
	this.y = Math.random(height/3,height/2);
	
	this.var2 = this.x + this.width;
/*
	this.show = function(){
		fill(0);
		rect(this.x,this.y+this.height, this.x + this.width, this.y);
	};
*/
	this.update = function(){
		this.x -= this.speed
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
};