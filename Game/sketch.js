var widthM = screen.width - 200;
var heightM = screen.height -200;


var floors = new floor(widthM, heightM);
var person = new person(widthM, heightM, floor.x, floor.y, floor.width);
var spikes = new spikes(widthM, heightM);
var floorsdict = [];
var spikesdict = [];
var coinsdict = [];

//function offscreen1() {
  //return ;
//}
console.log(floors.show());


var minutes = 0
var seconds = 0
var totalSeconds = 0;
setInterval(setTime, 1000);

function setTime() {
  ++totalSeconds;
  seconds = totalSeconds % 60;
  minutes = parseInt(totalSeconds / 60);
  
}

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

function setup() {
  createCanvas(displayWidth - 200, displayHeight - 200);
  floorsdict.push(floor);
  spikesdict.push(spikes);
}

/*
console.log(floorsdict[0].x);
floorsdict[0].update();
console.log(floorsdict[0].x);
*/

function pushNewSpike(i) {
    if (seconds % (getRandomInt(4) + 1) == 0) {
      spikesdict.push(spikes);
    };
    console.log(spikesdict);

    spikesdict[0].update();
    spikesdict[0].show();
  }

function pushNewFloor(i) {
    if (floors.check() == true) {
      floorsdict.push(floors);
      spikesdict.push(spikes);
    }
    console.log(floorsdict);
    console.log(i);
    floorsdict[0].show();
    floorsdict[0].update();
    }

//
function showPerson() {
  fill(0);
  ellipse(person.x, person.y, 32, 32);
}
function showSpike() {
  fill(0);
  triangle(spikes.x, 3*height/5, (spikes.var2+spikes.x)/2, 3*height/5-10, spikes.var2, 3*height/5);
}
function showFloor() {
  fill(0);
  rect(floor.x, floor.y, floor.x + floor.width, height);
}



function draw() {
  background(0);
  fill(255);
  rect(0, 3*height/5, width, height);
  function hitspike(){
  while (seconds >= 1) {
    if (spikes.hitperson(person.x , person.y) == true){
      return true;
    }
    else {
      return false;
    };
  }
}
    
  //check if alive

  function gameOngoing() {
  if (person.alive() == false || hitspike() == true) {
    return false;
  }
  else {
    return true;
  }
}


  //adds more items
  for (var i = floorsdict.length; i >= 0; i--) {
    if (second % 3 == 0) {
      //create new floor every 3 seconds
      floorsdict.push(floors);
    }
  };

  for (var i = spikesdict.length; i >= 0; i--) {
      if (second % getRandomInt(3) == 0) {
        spikesdict.push(spikes);
      }

  };

    //update / show items
  while (gameOngoing() == true){
    for (var i = floorsdict.length; i >= 0; i--) {
      floorsdict[i].update();
      showFloor();
    }

    person.update();
    showPerson();

    for (var i = spikesdict.length; i >= 0; i--) {
      spikesdict[i].update();

    }
  }



  if (gameOngoing() == false) {
    textSize(100);
    text('Game Over', heightM/2, widthM/2);
  }
    
}

//register key inputs
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

