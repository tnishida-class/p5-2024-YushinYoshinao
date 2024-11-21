let snowflakes = []; // 雪の配列

function setup() {
  createCanvas(400, 400);
  background(20); // 黒い背景

  // 雪を生成（section4-1オブジェクトのやり方）
  for (let i = 0; i < 50; i++) {
    snowflakes.push({
      x: random(width),     // ランダムなx座標
      y: random(height),    // ランダムなy座標
      size: random(5, 10),  // ランダムなサイズ
      speed: random(1, 3),  // ランダムな速度
      color: random(1) < 0.5 ? [255] : [255, 0, 0] // 2分の１で白か赤になるようにする。
    });
  }
}

function draw() {
  background(20); // 毎フレーム背景をリセット

  drawFace();
  drawMouth();
  drawEyes(keyIsDown(16)); // シフトキーで目の色を変える、コードは16番らしい

  // 雪を振らせて落ちきったら上に戻す。
  for (let i = 0; i < snowflakes.length; i++) {
      let snow = snowflakes[i];

    fill(...snow.color);　//スプレッド構文を使うと配列がすっきりする（要素を１つ１つ書き上げる必要が無くなる）
    noStroke();
    ellipse(snow.x, snow.y, snow.size);

    snow.y += snow.speed; // 雪を下に動かす

    // 画面外に出たときに上に戻す
    if (snow.y > height) {
      snow.y = 0;          // 上端に戻す
      snow.x = random(width); // x座標もランダムにする。
    }

    //右下にシフトを押してもらうための指示を出したい
    if (!keyIsDown(16)) {
      fill(255); 
      textSize(16);
      textAlign(RIGHT);
      text("シフトを押してミャクミャクと遊ぼう！", width - 10, height - 10); // 右下に表示
    }

  }
}

// 顔を描画
function drawFace() {
  fill(65, 105, 255); // 青色
  ellipse(200, 200, 200, 150); // 顔
}

// 口を描画
function drawMouth() {
  stroke(65, 105, 255);

  // 下の口（左側を少し上げているつもり）
  fill(255); // 白色
  arc(200, 175, 80, 130, QUARTER_PI / 6, PI);

  // 上の口（反対向き）
  fill(65, 105, 255); // 青色
  arc(200, 175, 80, 40, 0.125, PI);
}

// 目を描画
function drawEyes(isShiftPressed) {
  noStroke();

  // 顔周りの赤いやつ
  fill(255, 0, 0); 
  let redParts = [
    [220, 125, 65, 90],
    [160, 130, 65, 65],
    [210, 280, 60, 50],
    [160, 280, 65, 75],
    [110, 240, 65, 65],
    [100, 190, 45, 45],
    [120, 160, 50, 35],
    [250, 270, 35, 70],
    [290, 240, 65, 65],
    [290, 185, 55, 55],
    [260, 150, 60, 45]
  ];
  for (let i = 0; i < redParts.length; i++) {
    ellipse(...redParts[i]);
  }

  // 白目と青目
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