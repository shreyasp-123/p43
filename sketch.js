var hr, mn, sc, hrAngle, mnAngle, scAngle

function setup() {
  createCanvas(800,400);
  angleMode(DEGREES)

  
}

function draw() {
  background(255,255,255);  
  hr = hour()
  mn = minute()
  sc = second()
  scAngle = map(sc, 0, 60, 0, 360)
  mnAngle= map(mn, 0, 60, 0, 360)
  hrAngle = map(hr, 0, 12, 0, 360)

  push()
  translate(400, 200)
  rotate(scAngle)
  stroke(255, 0, 0)
  strokeWeight(7)
  line(0, 0, 100, 0)
  pop()
  push()
  translate(400, 200)
  rotate(mnAngle)
  stroke(0, 255, 0)
  strokeWeight(7)
  line(0, 0, 90, 0)
  pop()
  push()
  translate(400, 200)
  rotate(hrAngle)
  stroke(0, 0, 255)
  strokeWeight(7)
  line(0, 0, 50, 0)
  pop()

  drawSprites();
}