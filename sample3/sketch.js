let eyeX = 0;
let eyeY = 0;
let smiling = false;

function setup() {
  createCanvas(600, 400);
  noStroke();
}

function draw() {
  background(255);

  // 마우스 위치에 따라 눈동자 굴리기
  eyeX = map(mouseX, 0, width, -5, 5);
  eyeY = map(mouseY, 0, height, -5, 5);

  // 머리카락
  fill(40);
  beginShape();
  vertex(180, 100);
  bezierVertex(150, 220, 140, 350, 200, 380); // 왼쪽 머리
  vertex(400, 380);
  bezierVertex(460, 350, 450, 220, 420, 100); // 오른쪽 머리
  bezierVertex(350, 40, 250, 40, 180, 100);
  endShape(CLOSE);

  // 얼굴
  fill(255, 224, 189);
  beginShape();
  vertex(220, 120);
  bezierVertex(210, 200, 210, 300, 300, 320);
  bezierVertex(390, 300, 390, 200, 380, 120);
  bezierVertex(310, 80, 250, 80, 220, 120);
  endShape(CLOSE);

  // 눈 흰자
  fill(255);
  ellipse(260, 200, 50, 30);
  ellipse(340, 200, 50, 30);

  // 눈동자
  fill(0);
  ellipse(260 + eyeX, 200 + eyeY, 20, 20);
  ellipse(340 + eyeX, 200 + eyeY, 20, 20);

  // 눈 반짝임
  fill(255);
  ellipse(265 + eyeX, 195 + eyeY, 6, 6);
  ellipse(345 + eyeX, 195 + eyeY, 6, 6);

  // 눈썹
  stroke(40);
  strokeWeight(5);
  noFill();
  arc(260, 180, 50, 20, PI, 0);
  arc(340, 180, 50, 20, PI, 0);

  // 코
  noFill();
  stroke(80);
  strokeWeight(2);
  beginShape();
  vertex(300, 210);
  bezierVertex(300, 230, 295, 240, 300, 250);
  endShape();

  // 입
  noStroke();
  fill(200, 80, 100);
  if (smiling) {
    beginShape();
    vertex(270, 280);
    bezierVertex(285, 300, 315, 300, 330, 280);
    bezierVertex(315, 305, 285, 305, 270, 280);
    endShape(CLOSE);
  } else {
    arc(300, 280, 50, 25, 0, PI);
  }
}

//마우스 클릭 시 웃는 표정으로
function mousePressed() {
  smiling = true;
}

//마우스 클릭 해제 시 기본 표정으로
function mouseReleased() {
  smiling = false;
}

function keyPressed() {
  if (key === 's' || key === 'S') {
    saveGif('mySketch', 10);
  }
}