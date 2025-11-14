// 使用する画像リスト
const images = [
  "Gold.png",
  "Purple.png",
  "Purple.png",
  "Purple.png",
  "Purple.png",
  "Purple.png",
  "Blue.png",
  "Blue.png",
  "Blue.png",
  "Blue.png",
  "Blue.png",
  "Blue.png",
  "Blue.png",
  "Blue.png",
  "Blue.png",
  "Blue.png",
  "Blue.png",
  "Gray.png",
  "Gray.png",
  "Gray.png",
  "Gray.png",
  "Gray.png",
  "Gray.png",
  "Gray.png",
  "Gray.png",
  "Gray.png",
  "Gray.png",
  "Gray.png",
  "Gray.png",
  "Gray.png",
  "Gray.png",
  "Gray.png",
  "Gray.png",
  "Gray.png",
  "Gray.png",
  "Gray.png",
  "Gray.png",
  "Gray.png",
  "Gray.png",
  "Gray.png",
  "Gray.png",
  "Gray.png",
  "Gray.png",
  "Gray.png",
  "Gray.png",
  "Gray.png",
  "Gray.png",
  "Gray.png",
  "Gray.png",
  "Gray.png",
  "Gray.png",
  "Gray.png",
  "Gray.png",
  "Gray.png",
  "Gray.png",
  "Gray.png",
  "Gray.png",
  "Gray.png",
  "Gray.png",
  "Gray.png",
  "Gray.png",
  "Gray.png",
  "Gray.png",
  "Gray.png",
  "Gray.png",
  "Gray.png",
  "Gray.png",
  "Gray.png",
  "Gray.png",
  "Gray.png",
  "Gray.png",
  "Gray.png",
  "Gray.png",
  "Gray.png",
  "Gray.png",
  "Gray.png",
  "Gray.png",
  "Gray.png",
  "Gray.png",
  "Gray.png",
  "Gray.png",
  "Gray.png",
  "Gray.png",
  "Gray.png",
  "Gray.png",
  "Gray.png",
  "Gray.png",
  "Gray.png",
  "Gray.png",
  "Gray.png",
  "Gray.png",
  "Gray.png",
  "Gray.png",
  "Gray.png",
  "Gray.png",
  "Gray.png",
  "Gray.png",
  "Gray.png",
  "Gray.png",
  "Gray.png",
  "Gray.png",
  "Gray.png",
  "Gray.png",
  "Gray.png",
  "Gray.png",
  "Gray.png",
  "Gray.png",
  "Gray.png",
  "Gray.png",
  "Gray.png",
  "Gray.png",
  "Gray.png",
  "Gray.png",
  "Gray.png",
  "Gray.png",
  "Gray.png",
  "Gray.png",
  "Gray.png",
  "Gray.png",
  "Gray.png",
  "Gray.png",
  "Gray.png",
  "Gray.png",
  "Gray.png",
  "Gray.png",
  "Gray.png",
  "Gray.png",
  "Gray.png",
  "Gray.png",
  "Gray.png",
  "Gray.png",
  "Gray.png",
  "Gray.png",
  "Gray.png",
  "Gray.png",
  "Gray.png",
  "Gray.png",
  "Gray.png",
  "Gray.png",
  "Gray.png",
  "Gray.png",
  "Gray.png",
  "Gray.png",
  "Gray.png",
  "Gray.png",
  "Gray.png",
  "Gray.png",
  "Gray.png",
  "Gray.png",
  "Gray.png",
  "Gray.png",
  "Gray.png",
  "Gray.png",
  "Gray.png",
  "Gray.png",
  "Gray.png",
  "Gray.png",
  "Gray.png",
  "Gray.png",
  "Gray.png",
  "Gray.png",
  "Gray.png",
  "Gray.png",
  "Gray.png",
  "Gray.png",
  "Gray.png",
  "Gray.png",
  "Gray.png",
  "Gray.png",
  "Gray.png",
  "Gray.png",
  "Gray.png",
  "Gray.png",
  "Gray.png",
  "Gray.png",
  "Gray.png",
  "Gray.png",
  "Gray.png",
  "Gray.png",
  "Gray.png",
  "Gray.png",
  "Gray.png",
  "Gray.png",
  "Gray.png",
  "Gray.png",
  "Gray.png",
  "Gray.png",
  "Gray.png",
  "Gray.png",
  "Gray.png",
  "Gray.png",
  "Gray.png",
  "Gray.png",
  "Gray.png",
  "Gray.png",
  "Gray.png",
  "Gray.png",
  "Gray.png",
  "Gray.png",
  "Gray.png",
  "Gray.png",
];

const Gold = [
  "Dig-Gold.png",
  "Ring-Gold.png",
  "Michi-Gold.png"
]

const Purple = [
  "Kyatsuo-Purple.png",
  "Kyatsuko-Purple.png",
  "Yuma-Purple.png",
  "Sachi-Purple.png",
  "Michi-Purple.png",
  "Dedenne-Purple.png",
  "Chiba-Purple.png",
]

const Blue = [
  "Kyatsuo-Blue.png",
  "Kyatsuko-Blue.png",
  "Yuma-Blue.png",
  "Sachi-Blue.png",
  "Michi-Blue.png",
  "Dedenne-Blue.png",
  "Dig-Blue.png",
  "Ring-Blue.png",
]

const Gray = [
  "Kyatsuo-Gray.png",
  "Kyatsuko-Gray.png",
  "Yuma-Gray.png",
  "Michi-Gray1.png",
  "Michi-Gray2.png",
  "Dedenne-Gray.png",
  "Dig-Gray.png",
  "Ring-Gray.png",
]

const sounds = {
  click: new Audio("ドアを開ける2.mp3"),
  normal: new Audio("カーソル移動9.mp3"),
  rare: new Audio("決定ボタンを押す16.mp3"),
}

function playSE(name) {
  sounds[name].currentTime = 0;
  sounds[name].play();
}

// ランダムに10個選んで表示
function displayRandomImages() {
  const grid = document.getElementById("slotGrid");
  grid.innerHTML = ""; // 初期化
  playSE("click");

  for (let i = 0; i < 10; i++) {
    const randomImage = images[Math.floor(Math.random() * images.length)];
    const img = document.createElement("img");
    img.src = randomImage;
    grid.appendChild(img);

    setTimeout(() => {
      img.style.opacity = 1;
    }, i * 25);  // ←ここを変えれば間隔変更

    // 画像変更（表示した後 + 3秒で変更）
    setTimeout(() => {
      // filename を取り出して比較
      const filename = img.src.split("/").pop();

      if (filename === "Gold.png") {
        const randomGold = Gold[Math.floor(Math.random() * Gold.length)];
        img.src = randomGold;
        playSE("rare");
      }

      if (filename === "Purple.png") {
        const randomPurple = Purple[Math.floor(Math.random() * Purple.length)];
        img.src = randomPurple;
        playSE("rare");
      }

      if (filename === "Blue.png") {
        const randomBlue = Blue[Math.floor(Math.random() * Blue.length)];
        img.src = randomBlue;
        playSE("normal");
      }

      if (filename === "Gray.png") {
        const randomGray = Gray[Math.floor(Math.random() * Gray.length)];
        img.src = randomGray;
        playSE("normal");
      }

    }, i * 175 + 750);  // 表示タイミング + 3秒
  }

}

document.getElementById("10pull").addEventListener("click", displayRandomImages);

// ページ読み込み時に実行

const grid = document.getElementById("slotGrid");
grid.innerHTML = ""; // 初期化

for (let i = 0; i < 10; i++) {
  const img = document.createElement("img");
  img.src = "";
  grid.appendChild(img);
}