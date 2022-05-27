var widthM = screen.width -200;
var heightM = screen.height -200;

var minutes = 0
var seconds = 0
var totalSeconds = 0;
var test = setInterval(setTime, 1000);

function setTime() {
  ++totalSeconds;
  seconds = totalSeconds % 60;
  minutes = parseInt(totalSeconds / 60);
  }
function stop() {
  clearInterval(test);
}
var bird;
var pipes = [];
var coins = [];

var coinsnum = 0;
function setup() {
  createCanvas(widthM, heightM);
  bird = new Bird();
  pipes.push(new Floor());
  coins.push(new Coins());
}

function draw() {
  background(0,0,0);
  //while (gameongoing == true){
  textSize(32);
  text(totalSeconds, 50, 50);

  text(coinsnum, widthM - 50, 50);
  //var gameongoing = true;
  //while (gameongoing == true){
  for (var i = pipes.length - 1; i >= 0; i--) {
    pipes[i].show();
    pipes[i].update();

    if (pipes[i].hits(bird) == true) {
      //console.log('HIT');
      bird.stay();
    }
    }
    for (var i = coins.length - 1; i >= 0; i--) {
    coins[i].show();
    coins[i].update();

    if (coins[i].hits(bird) == true) {
      coinsnum += 1;
    }
      
    

  }

  bird.update();
  bird.show();


  if (frameCount % 75 == 0) {
    pipes.push(new Floor());
    coins.push(new Coins());
  }
 
  if (bird.gameongoingmain() == false){
    //gameongoing = false;
    stop()
     textSize(100);
      var score = String('Your Score Was' + ' ' +  totalSeconds + ', '  + coinsnum);
      text(score, widthM/3 - 200, heightM/2);
  }

  //}


}

function keyPressed() {
  if (key == ' ') {
    bird.up();
    //console.log("SPACE");
  }
}
