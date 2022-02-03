//stuff in setup runs once in your sketch
// only make one setup function
function setup() {
  createCanvas(windowWidth, windowHeight);
  background('rgba(0,255,0, 0.25)');
  rectMode(CENTER);
  print(windowWidth);
}

//stuff in draw runs over and over (60fps)
//only make one draw function
function draw() {
//caterpillar body
let c = color('rgba(0,270,0, 0.25)');
  fill(c)
  circle (450, 500, 100)
  fill(c)
  circle (500, 500, 100)
  fill(c)
  circle (550, 500, 100)
  fill (c)
  circle (600, 500, 100)
  fill(c)
  circle (650, 500, 100)
  fill (c)
  circle (700, 500, 100)
  fill(c)
  circle (750, 500, 100)
  fill(c)
  circle (800, 475, 100)
  fill(c)
  circle (850, 425, 100)
  fill(40)
  circle (833, 415, 10)
  fill(40)
  circle (867, 415, 10)

arc(863, 450, 30, 20, 0, PI + QUARTER_PI, OPEN);












}
