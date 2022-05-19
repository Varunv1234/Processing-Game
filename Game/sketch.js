var widthM = displayWidth - 200
var heightM = displayHeight -200




var floors = new floor(widthM, heightM);
var person = new person(widthM, heightM, floor.x, floor.y, floor.width);
var spikes = new spikes(widthM, heightM);
var floorsdict = [];
var spikesdict = [];
var coinsdict = [];
//var check = floors.show();

//function offscreen1() {
  //return ;
//}
console.log(check);

function update1(i) {
  floorsdict[i].update();
}

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
  createCanvas(widthM, heightM);
  floorsdict.push(floors);
  //console.log(floors);
  //console.log(floorsdict[0].width);
}

/*
console.log(floorsdict[0].x);
floorsdict[0].update();
console.log(floorsdict[0].x);
*/

function pushNewSpike(i) {
    if (seconds % (getRandomInt(4) + 1) == 0) {
      spikesdict.push(floor);
    };
    spikesdict[i].update();
    spikesdict[i].show();
  }

function pushNewFloor(i) {
    if (check == true) {
      floorsdict.push(floor);
    }
    fill(0);
    rect(floor.x, floor.y, floor.x + floor.width, height);
    floorsdict[i].update();
    }


function showPerson() {
  person.update();
  person.show();
}




function draw() {
  background(0);
  fill(255);
  rect(0, 3*height/5, width, height);
  
  for (var i = floorsdict.length; i >= 0; i--) {
    pushNewFloor(i);
  };

  for (var i = spikesdict.length; i >= 0; i--) {
    pushNewSpike(i);
  };

  while (seconds >= 1) {
    if (seconds % 1 == 0){
    showPerson();
  };
  }

  if (person.alive() == true || spikes.hitperson() == true) {
    textSize(100);
    text('Game Over', height/2, width/2);
  }
    
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

