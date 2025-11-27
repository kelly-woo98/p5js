function setup() {
  createCanvas(600, 400);
  rectMode(CENTER);
}
  // 빨간원 변수선언
  let circleX = 0;
  let circleSize = 100;

function draw() {
  background(255);

  // 분홍색 네모
  let nemo1 = map(sin(frameCount * 0.06), -1, 1, 0, 140);
  let nemo2 = map(sin(frameCount * 0.06), -1, 1, 0, 120);
  let nemo3 = map(sin(frameCount * 0.06), -1, 1, 0, 100);
  let nemo4 = map(sin(frameCount * 0.06), -1, 1, 0, 80);

  stroke('#9933FF');
  strokeWeight(2);

  fill('#FFE5FF'); //nemo1
  rect(300, 200, 590 + nemo1, 390 + nemo1);

  fill('#FFCCFF'); //nemo2
  rect(300, 200, 500 + nemo2, 300 + nemo2);

  fill('#FFB2FF'); //nemo3
  rect(300, 200, 410 + nemo3, 210 + nemo3);

  fill('#FF99FF'); //nemo4
  rect(300, 200, 320 + nemo4, 120 + nemo4);

  // 빨간 원
  noStroke();
  circleX = frameCount % width;

  if (frameCount % 160 < 100) {
    fill(255, 0, 0); // 빨강색원
  } else {
    fill(255, 150, 0); // 주황색원
  }

  ellipse(circleX, 80, circleSize, circleSize);

  // 파란원(구름모양)
  stroke('#0080FF');
  strokeWeight(1);
  fill('#0080FF');
  circle(60, 350, 200);
  circle(150, 350, 200);
  circle(250, 350, 200);

  // 삼각형(산모양)
  push();
  translate(440, 250);
  let sc = 1 + sin(frameCount * 0.03) * 0.3;
  if (sc > 1) {
    stroke(0);
  } else {
    noStroke();
  }
  scale(sc);
  fill('#004C00');
  triangle(-140, 145, -15, -150, 140, 145);
  fill('#99FF99');
  triangle(-40, 145, 85, -150, 240, 145);
  fill('#40A040');
  triangle(-240, 145, -115, -150, 40, 145);
  pop();

  // 회색원
  stroke('#A0A0A0');
  strokeWeight(2);
  fill('#A0A0A0')
  arc(500, 80, 100, 100, 0, radians(300));

  // 노란 직선 (반짝이는 효과)
  let bright = abs(sin(frameCount * 0.07));
  for (let i = 0; i < 3; i++) {
    stroke('#FFFF00');
    strokeWeight(5 + bright * 3);
    line(530 + i * 10, 50 + i * 10, 570 + i * 10, 20 + i * 20);
  }
}

function keyPressed() {
  if (key === 's') {
    saveGif('mySketch', 10);
  }
}