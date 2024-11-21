function setup() {

  createCanvas(200, 200);

  // isLeapYear関数を使って、うるう年かどうかをコンソールに出力
  for (let i = 2000; i <= 2100; i++) {
    if (isLeapYear(i)) {
      console.log(i + "年はうるう年です"); 
    } else {
      console.log(i + "年はうるう年ではありません"); 
    }
  }
}

// うるう年かどうかを判定する関数
function isLeapYear(y) {
  // 4で割り切れ、かつ100で割り切れない または 400で割り切れる年がうるう年である。
  return (y % 4 == 0) && (y % 100 != 0) || (y % 400 == 0);
}

// 1年の日数を返す関数
function daysInYear(y) {
  // うるう年なら366日、それ以外は365日
  return isLeapYear(y) ? 366 : 365;
}

// 指定した月の日数を返す関数
function daysInMonth(y, m) {
  if (m == 2) {
    // 2月はうるう年かどうかで29日または28日
    return isLeapYear(y) ? 29 : 28;
  } else if (m == 4 || m == 6 || m == 9 || m == 11) {
    // 4月、6月、9月、11月は30日
    return 30;
  } else {
    // その他の月は31日
    return 31;
  }
}

// 年、月、日を指定して、その年の何日目かを返す関数
function dayOfYear(y, m, d) {
  let count = 0; // 日数の合計を記録する変数
  for (let i = 1; i < m; i++) {
    // 1月から指定した月の1つ前までの日数を加算
    count += daysInMonth(y, i);
  }
  // 指定した日の分を加算
  return count + d;
}

// 年、月、日を指定して、その曜日を計算する関数
function dayOfWeek(y, m, d) {
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

  let totalDays = 0; // 1970年1月1日からの累計日数を計算するための変数

  // 1970年から指定した年の前年までの日数を加算
  for (let year = 1970; year < y; year++) {
    totalDays += isLeapYear(year) ? 366 : 365;
  }

  // 1月から指定した月の1つ前までの日数を加算
  for (let month = 1; month < m; month++) {
    totalDays += (month === 2 && isLeapYear(y)) ? 29 : daysInMonth[month - 1];
  }

  // 指定した月の日数を加算
  totalDays += d - 1; // 1日目からカウントなので -1

  // 1970年1月1日(木曜日)を基準に曜日を計算
  let dayOfWeek = (totalDays + 4) % 7; // 4は木曜日のオフセット

  return dayOfWeek; // 曜日を表す数値 (0: 日曜日, 1: 月曜日, ..., 6: 土曜日)
}

// 曜日を表す数値を対応する文字列に変換する関数
function dayOfWeekAsString(dow) {
  const a = ["日", "月", "火", "水", "木", "金", "土"]; // 曜日配列
  return a[dow]; // 数値を使って曜日文字を返す
}
