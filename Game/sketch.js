
var floor;
var person;
var spikes;
var floorsdict = [];
var spikesdict =[];


function setup() {
  createCanvas(1920, 1080);
  floorsdict.push(new floor());
}

function draw() {
  background(0);
  fill(255);
  rect(0, 3*height/5, width, height);
  for (var i = floorsdict.length; i >= 0; i--) {
    if (floor.onscreen() == false) {
      floorsdict.push(new floor());

    }

    floorsdict[i].update();
    floorsdict[i].show();
  }



  person.update();
  person.show();

  
    
}

function keyPressed() {
  if (key == '') {
    person.up();
  }

  if (key == 'UP_ARROW') {
    person.up();
  }
  
  else if (key == 'RIGHT_ARROW') {
    person.forward();
  }
  else if (key == 'LEFT_ARROW') {
    person.backward();
  }
  
  else if (key == 'DOWN_ARROW') {
    person.down();
  }
}

