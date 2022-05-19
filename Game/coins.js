function coins() {
	this.x = width;
	this.y = 3*height/5;
	this.speed = floor.speed;

	this.hitsperson = function() {
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
	this.show = function(){
		fill(245, 230, 66);
		ellipse(this.x, this.y + 16, 16, 16);
	};
	
	this.update = function() {
		this.x -= this.speed;
	};
};