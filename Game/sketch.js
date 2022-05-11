
var person;
var floor;
var floorsdict = [];




function setup() {
  createCanvas(640, 480);
  floor = new floor();
  floorsdict.push(floor);
}

function draw() {
  background(0);
  fill(255);
  rect(0, 3*height/5, width, height);
  for (i = floorsdict.length; i >= 0; i--) {
    if (floor.onscreen() == false) {
      floorsdict.push(floor);

    }
  }


  floor.show();
  floor.update();
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

