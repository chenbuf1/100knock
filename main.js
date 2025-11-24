console.log("Hello, JavaScript!");

// 変数の定義
let x = 10;

// 配列の定義
let fruits = ["りんご", "バナナ", "みかん", "ぶどう"];

// オブジェクトの定義
let student = {
  name: "Bufan Chen",
  age: 25,
};

// コンソール出力
console.log("変数：", x);
console.log("配列：", fruits);
console.log("オブジェクト：", student);


// 二つの数を定義
let a = 15;
let b = 8;

// 四則演算
let sum = a + b;
let diff = a - b;
let product = a * b;
let quotient = a / b;

// 結果出力
console.log("a =", a, "b =", b);
console.log("和（a + b）：", sum);
console.log("差（a - b）：", diff);
console.log("積（a * b）：", product);
console.log("商（a / b）：", quotient);

// if文による比較
if (a > b) {
  console.log("a は b より大きい");
} else if (a < b) {
  console.log("a は b より小さい");
} else {
  console.log("a と b は等しい");
}




// for文による出力
console.log("【for文で出力】");
for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}

// while文による出力
console.log("【while文で出力】");
let i = 0;
while (i < fruits.length) {
  console.log(fruits[i]);
  i++;
}



// アロー関数の定義：2つの数を受け取り、合計を返す
const addNumbers = (a, b) => {
  return a + b;
};

// 関数の呼び出しと出力
const result = addNumbers(12, 8);
console.log("関数の実行結果：", result);




// ボタン要素を取得
const button = document.getElementById("clickButton");

// クリックイベントリスナーを追加
button.addEventListener("click", () => {
  console.log("ボタンがクリックされました！");
});


