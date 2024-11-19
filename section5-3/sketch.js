// テキスト「関数を作る(2) 結果を戻す関数」～「総仕上げ：カレンダーを描画しよう」
function setup(){
  createCanvas(200, 200);
  calendar(2019, 10);

  // isLeapYear の動作確認のため console に出力しています
  for(let i = 2000; i <= 2100; i++){
    if(isLeapYear(i)){
      console.log(i + "年はうるう年です");
    }
    else{
      console.log(i + "年はうるう年ではありません");
    }
  }
}

function calendar(y, m){
  let dow = dayOfWeek(y, m, 1);
  for(let d = 1; d <= daysInMonth(y, m); d++){
    // BLANK[3] (hint: まずは daysInYear, dayOfWeek を作ろう)
  }
}

function isLeapYear(y){
  return (y % 4 == 0) && (y % 100 != 0) || (y % 400 == 0);
}

function daysInYear(y){
  function getDaysInYear(y) {
    if ((y % 4 === 0 && y % 100 !== 0) || y % 400 === 0) {
      return 366;  // うるう年
    } else {
      return 365;  // 普通の年
    }
  }
  
}

function daysInMonth(y, m){
  if(m == 2){
    return isLeapYear(y) ? 29 : 28;
  }
  else if(m == 4 || m == 6 || m == 9 || m == 11){
    return 30;
  }
  else{
    return 31;
  }
}

function dayOfYear(y, m, d){
  let count = 0;
  for(let i = 1; i < m; i++){
    count += daysInMonth(y, i);
  }
  return count + d;
}

function dayOfWeek(y, m, d){
  // BLANK[2]
  const daysInMonth = [
    31, // 1月
    28, // 2月
    31, // 3月
    30, // 4月
    31, // 5月
    30, // 6月
    31, // 7月
    31, // 8月
    30, // 9月
    31, // 10月
    30, // 11月
    31  // 12月
  ];
  
  // 1970年1月1日からy年m月d日までの日数を計算
  let totalDays = 0;
  
  // 1年目からy-1年目までの日数
  for (let year = 1970; year < y; year++) {
    totalDays += isLeapYear(year) ? 366 : 365;
  }
  
  // 1月からm-1月までの日数
  for (let month = 1; month < m; month++) {
    totalDays += (month === 2 && isLeapYear(y)) ? 29 : daysInMonth[month - 1];
  }
  
  // m月のd日までの日数
  totalDays += d - 1;  // 1日からカウントするのでd-1
  
  // 基準日1970年1月1日が木曜日(4)で、その日を0とする
  // その経過日数を7で割った余りを求める
  let dayOfWeek = (totalDays + 4) % 7;
  
  return dayOfWeek;
}

function dayOfWeekAsString(dow){
  const a = ["日", "月", "火", "水", "木", "金", "土", "日"];
  return a[dow];
}
