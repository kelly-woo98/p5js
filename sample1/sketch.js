function setup() {
  let cnv = createCanvas(600, 400);
  background(255);
  
  rectMode(CENTER);
  stroke('#9933FF');
  strokeWeight(2);
  fill('#FFE5FF');
  rect(300, 200, 590, 390);
  fill('#FFCCFF');
  rect(300, 200, 500, 300);
  fill('#FFB2FF');
  rect(300, 200, 410, 210);
  fill('#FF99FF');
  rect(300, 200, 320, 120);

  stroke('#FF0000')
  fill('#FF0000');
  circle(350, 80, 100);
  stroke('#A0A0A0')
  fill('#A0A0A0');
  arc(500, 80, 100, 100, 0, radians(300));
  stroke('#FFFF00');
  strokeWeight(7);
  line(530, 50, 570, 20);
  line(540, 60, 580, 40);
  line(540, 70, 580, 70);
  
  stroke('#0080FF');
  strokeWeight(1);
  fill('#0080FF');
  circle(60, 350, 200);
  circle(150, 350, 200);
  circle(250, 350, 200);
  
  stroke(0);
  strokeWeight(1);
  fill('#004C00');
  triangle(300, 395, 425, 100, 580, 395);
  
  fill('#99FF99');
  triangle(400, 395, 525, 100, 680, 395);
  
  fill('#40A040');
  triangle(200, 395, 325, 100, 480, 395);
  
}