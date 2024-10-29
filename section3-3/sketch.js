let x, y, vx, vy;
const g = 1;
const vyMax = 20;

function setup() {
  createCanvas(windowWidth, windowHeight);
  x = width / 2;
  y = height / 2;
  vx = random(-2, 2); // 修正: randon → random
  vy = 0;
}

function draw() {
  background(160, 192, 255);
  ellipse(x, y, 50);
  x += vx;
  y += vy;
  vy += g;
  vy = constrain(vy, -vyMax, vyMax);
  
  if (x < 0 || x > width) {
    vx = -1 * vx;
  }
  if (y < 0 || y > height) {
    vy = -1 * vy;
  }
  y = constrain(y, 0, height);

  // キー操作
  if (keyIsDown(LEFT_ARROW)) { x -= 5; }
  if (keyIsDown(RIGHT_ARROW)) { x += 5; }
  if (keyIsDown(UP_ARROW)) { y -= 5; }
  if (keyIsDown(DOWN_ARROW)) { y += 5; }
  if (keyIsDown("A".charCodeAt(0))) { x += 10; }
  if (keyIsDown(" ".charCodeAt(0))) { x -= 10; }
}

function keyPressed() {
  if (key === ' ') { // スペースキーが押されたとき
    vy = -15; // ジャンプのための上向きの速度を設定
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

