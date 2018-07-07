void setup()
{
  size(1100,600);
}

  void draw()
{
//Body of the clock
  background(255);
  fill(0);
  translate(width/2,height/2);
  strokeWeight(12);
  stroke(255);
  ellipse(0,0,200,200);
  ellipse(0,0,2,2);
//Seconds hand
  pushMatrix();
  strokeWeight(2);
  rotate((second() /60.0 )* TWO_PI);
  stroke(255,0,0,200);
  line(0,0,0,-99);
  popMatrix();
//Minute hand
  pushMatrix();
  strokeWeight(3);
  stroke(255);
  rotate((minute() /60.0 )* TWO_PI);
  line(0,0,0,-99);
  popMatrix();
//Hour hand
  pushMatrix();
  rotate(hour() * .5235987756);
  line(0,0,0,-60);
  popMatrix();
}