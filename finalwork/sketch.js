function setup() {
  createCanvas(400, 400);
  background(20);
}

function draw() {
  drawFace();
  drawMouth();
  drawEyes(keyIsDown(16)); // シフトキーが押されているかを渡す
}

// 顔を描画
function drawFace() {
  fill(65, 105, 255); // 青色
  ellipse(200, 200, 200, 150); // 顔
}

// 口を描画
function drawMouth() {
  stroke(65, 105, 255);
  
  // 下の口（左側を少し上げる）
  fill(255); // 白色
  arc(200, 175, 80, 130, QUARTER_PI / 6, PI);
  
  // 上の口（反対向き）
  fill(65, 105, 255); // 青色
  arc(200, 175, 80, 40, 0.125, PI);
}

// 目を描画
function drawEyes(isShiftPressed) {
  noStroke();

  // 赤い目（背景の大きな部分）
  fill(255, 0, 0); // 赤色
  let redEyes = [
    [220, 125, 65, 90],  // 本体の右目
    [160, 130, 65, 65],  // 本体の左目
    [210, 280, 60, 50],  // 口の真下
    [160, 280, 65, 75],  // 左下
    [110, 240, 65, 65],  // 左上
    [100, 190, 45, 45],  // 小さい左目
    [120, 160, 50, 35],  // 左目の手前
    [250, 270, 35, 70],  // 右下
    [290, 240, 65, 65],  // 右上
    [290, 185, 55, 55],  // 右の中
    [260, 150, 60, 45]   // 小さい右目
  ];
  for (let i = 0; i < redEyes.length; i++) {
    ellipse(...redEyes[i]);
  }

  // 白目と青目（配列データを使用）
  let whiteEyes = [
    [222, 100, 28, 28],
    [155, 140, 30, 30],
    [300, 235, 30, 30],
    [96, 235, 25, 25],
    [160, 293, 35, 35]
  ];
  let blueEyes = [
    [225, 94, 14, 14],
    [161, 138, 15, 15],
    [305, 239, 15, 15],
    [92, 237, 12, 12],
    [165, 298, 17, 17]
  ];

  // 白目を描画
  fill(255); // 白色
  for (let i = 0; i < whiteEyes.length; i++) {
    ellipse(...whiteEyes[i]);
  }

  // 青目または赤目を描画
  if (isShiftPressed) {
    fill(255, 0, 0); // 赤色（シフトキーが押されている場合）
  } else {
    fill(65, 105, 255); // 青色（通常時）
  }
  for (let i = 0; i < blueEyes.length; i++) {
    ellipse(...blueEyes[i]);
  }
}
