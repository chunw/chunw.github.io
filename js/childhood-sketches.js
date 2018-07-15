// Clock sketch
var s = function( p ) { // p could be any variable name
  var x = 100;
  var y = 100;
  var TWO_PI = 6.2831855;
  p.setup = function() {
    p.createCanvas(innerWidth-8, innerHeight);
  };

  p.draw = function() {
    p.background(0);
    p.fill(255);
    p.rect(x,y,50,50);

    //Body of the clock
      p.background(255);
      p.fill(0);
      p.translate(innerWidth/2,innerHeight/2);
      p.strokeWeight(12);
      p.stroke(255);
      p.ellipse(0,0,200,200);
      p.ellipse(0,0,2,2);
    //Seconds hand
      p.push();
      p.strokeWeight(2);
      p.rotate((new Date().getSeconds() /60.0 )* TWO_PI);
      p.stroke(255,0,0,200);
      p.line(0,0,0,-99);
      p.pop();
    //Minute hand
      p.push();
      p.strokeWeight(3);
      p.stroke(255);
      p.rotate((new Date().getMinutes() /60.0 )* TWO_PI);
      p.line(0,0,0,-99);
      p.pop();
    //Hour hand
      p.push();
      p.rotate(new Date().getHours() * .5235987756);
      p.line(0,0,0,-60);
      p.pop();
  };
};
var myp5 = new p5(s, 'work2');

// Cover Sketch
var t = function( p ) {
  var adult1, adult2, bg;
  var myState = 22;
  p.setup = function() {
    p.createCanvas(innerWidth-8, innerHeight);
    p.frameRate(2);
    p.smooth() ;
    adult1 = p.loadImage("images/childhood/adult1.png");
    adult2 = p.loadImage("images/childhood/adult2.png");
    bg = p.loadImage("images/childhood/ladder_bg.png");
  };
  p.draw = function() {
    p.background(bg);
    p.fill(255);
    p.rect(200,0,5,480);
    p.rect(250,0,5,480);
    p.rect(200,465,50,5);
    p.rect(200,435,50,5);
    p.rect(200,405,50,5);
    p.rect(200,375,50,5);
    p.rect(200,345,50,5);
    p.rect(200,315,50,5);
    p.rect(200,285,50,5);
    p.rect(200,255,50,5);
    p.rect(200,225,50,5);
    p.rect(200,195,50,5);
    p.rect(200,165,50,5);
    p.rect(200,135,50,5);
    p.rect(200,105,50,5);
    p.rect(200,75,50,5);
    p.rect(200,45,50,5);
    p.rect(200,15,50,5);
    myState = myState - 1;

    if (myState < 0) {
      myState = -1;
    }

    switch(myState) {
    case -1:
      p.image(adult2, 190, -240);
      break;

    case 0:
      p.image(adult2, 190, -180);
      break;

    case 1:
      p.image(adult1, 190, -150);
      break;

    case 2:
      p.image(adult2, 190, -120);
      break;

    case 3:
      p.image(adult1, 190, -90);
      break;

    case 4:
      p.image(adult2, 190, -60);
      break;

    case 5:
      p.image(adult1, 190, -30);
      break;

    case 6:
      p.image(adult2, 190, 0);
      break;

    case 7:
      p.image(adult1, 190, 30);
      break;

    case 8:
      p.image(adult2, 190, 60);
      break;

    case 9:
      p.image(adult1, 190, 90);
      break;

    case 10:
      p.image(adult2, 190, 120);
      break;

    case 11:
      p.image(adult1, 190, 150);
      break;

    case 12:
      p.image(adult2, 190, 180);
      break;

    case 13:
      p.image(adult1, 190, 210);
      break;

    case 14:
      p.image(adult2, 190, 240);
      break;

    case 15:
      p.image(adult1, 190, 270);
      break;

    case 16:
      p.image(adult2, 190, 300);
      break;

    case 17:
      p.image(adult1, 190, 330);
      break;

    case 18:
      p.image(adult2, 190, 360);
      break;

    case 19:
      p.image(adult1, 190, 390);
      break;

    case 20:
      p.image(adult2, 190, 420);
      break;

    case 21:
      p.image(adult1, 190, 450);
      break;

    case 22:
      p.image(adult2, 190, 480);
      break;
    }
  }
};
var myp5 = new p5(t, 'work1');
