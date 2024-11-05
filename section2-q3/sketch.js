// ダーツ

function setup() {
  // ここで色の定義をしています。
  const green = color(0, 255, 0);   // 緑色
  const red = color(255, 0, 0);     // 赤色
  const black = color(0);           // 黒色
  const cream = color(242, 212, 147); // クリーム色

  // キャンバスの作成
  createCanvas(400, 400);           // 400x400のキャンバス
  background(255);                  // 背景色
  stroke(255);                      // 線の色は白
  strokeWeight(3);                  // 線の太さ

  // キャンバスの中心座標
  const cx = width / 2; // 中心座標x
  const cy = height / 2; // 中心座標y

  // 最大半径（キャンバスの幅と高さのうち小さい方が最大半径となる）
  const maxR = min(width, height);

  //一番大きい黒い円⇒緑と赤の扇がある部分⇒...中心に向かって描画を進める

  // 1番目の黒い円を描画
  drawCircle(black, maxR);
  
  // 緑と赤で交互に色をつけた扇形を描画
  drawArcs(green, red, maxR * 0.8);
  
  // BLANK[1] に書くべき部分（ヒント: drawArcs x 3, drawCircle x 1）
  // クリーム色と黒で交互の扇形を描画
  drawArcs(cream, black, maxR * 0.75);
  
  // 緑と赤で交互の扇形を描画
  drawArcs(green, red, maxR * 0.4);
  
  // クリーム色と黒で交互の扇形を描画
  drawArcs(cream, black, maxR * 0.35);

  // 小さな緑の円を描画
  drawCircle(green, maxR * 0.1);

  // 小さな赤い円を描画
  drawCircle(red, maxR * 0.05);
}

// 円を描く関数
function drawCircle(c, r) {
  const cx = width / 2; // キャンバスの中心座標x
  const cy = height / 2; // キャンバスの中心座標y
  fill(c);  // 塗りつぶし色を設定
  ellipse(cx, cy, r, r);  // 半径rの円を描画する
}

// 扇形を描く関数
function drawArcs(c1, c2, r) {
  const cx = width / 2; // キャンバスの中心座標x
  const cy = height / 2; // キャンバスの中心座標y

  // 20等分して扇形を描画
  for (let i = 0; i < 20; i++) {
    // 扇形の開始角度と終了角度を計算するためのもの（角度によって色分けする）
    let start = TWO_PI / 20 * i;
    let stop = TWO_PI / 20 * (i + 1);

    // 偶数番目のセクションにはc1、奇数番目のセクションにはc2で色を設定
    fill(i % 2 == 0 ? c1 : c2);

    // 扇形を描画する
    arc(cx, cy, r, r, start, stop, PIE);
  }
}
