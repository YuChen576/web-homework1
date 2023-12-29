const getcount = document.querySelector("#getcount1");
getcount1.addEventListener("click", () => {
  getcount11();
});

function getcount11() {
  let input = Number(document.querySelector("#input").value);
  let rd = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]; // 0から9の発生回数の格納配列
  let k = 0;

  while (k < input) {
    k += 1;
    let num = parseInt(Math.random() * 10); //0から10の乱数を発生させる

    rd[num] += 1;
    document.querySelector(`#n${num}`).innerHTML = rd[num];
  }
}
