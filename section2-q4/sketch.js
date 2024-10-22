// ギリシャ国旗
function setup() {
  const blue = color(0, 51, 160);
  createCanvas(270, 180);
  noStroke();
  background(255);

  let d = height / 9; // 縞1本の太さ

  for(let i = 0; i < 9; i++){
    // BLANK[1] (hint: 縞の色を交互に変えるには2で割った余りを使おう)
    //最初に色を定義してから、形を決定する。
    //２で割った時の余りが０、すなわち偶数列の時は青色、奇数列の時は白で塗る。
    //rect(左上のx座標、左上のy座標、幅、高さ)
    if(i%2===0){
      fill(blue);
    }else{
      fill(255)
    }
    rect(0, i * d, width, d);
    }

  //左上に青色の正方形を重ねる。
  fill(blue);
  //sizeはｄをちょうど５つ並べた大きさ。
  let size = d * 5;
  rect(0, 0, size, size);

  fill(255);
  // BLANK[2] (hint: 白い十字を描くには rect を二つ描こう)
  //左上の青い小さな長方形（４つあるやつ）を見たら、縞模様2つ分の大きさだと分かったから、2*dで表現した
  rect(0, 2*d, size, d);
  rect(2*d, 0, d, size);
}
