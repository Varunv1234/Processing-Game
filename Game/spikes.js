function spikes(width, height) {
	this.x = width;
	this.width = 20;
	this.speed = floor.speed;
	this.var2 = this.x + this.width;

	this.show = function(){
	fill(0);
	triangle(this.x, 3*height/5, (this.var2+this.x)/2, 3*height/5-10, this.var2, 3*height/5);
	};	
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