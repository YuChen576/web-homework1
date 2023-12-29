// ==== それぞれのボタンを押した時のイベントリスナーを設定し処理を定義する ====

//テキストボックス
let btn1 = document.querySelector("#tbox_btn");
btn1.addEventListener("click", () => {
  let inText = document.querySelector("#input1").value;
  document.querySelector("#tbox_result").textContent = inText;
});
//スライダー
let btn2 = document.querySelector("#range_btn");

btn2.addEventListener("click", () => {
  let input2 = document.querySelector("#input2");
  let result = document.querySelector("#range_result");
  result.textContent = input2.value;
});

//テキストエリア
let btn3 = document.querySelector("#tarea_btn");
btn3.addEventListener("click", () => {
  let Text = document.querySelector("#point").value;
  document.querySelector("#tarea_result").textContent = Text;
});

//ラジオボタン
let btn4 = document.querySelector("#rbtn_btn");
btn4.addEventListener("click", () => {
  let opt = "";
  let radio = document.querySelectorAll("#radio input");
  for (let i = 0; i < radio.length; i++) {
    if (radio[i].checked) {
      opt = radio[i].value;
    }
  }
  document.querySelector("#rbtn_result").textContent += opt;
});

//チェックボックス
let btn5 = document.querySelector("#cbox_btn");
btn5.addEventListener("click", () => {
  let result = [];
  let cbox = document.querySelectorAll("#checkbox input");
  for (let i = 0; i < cbox.length; i++) {
    if (cbox[i].checked) {
      result.push(cbox[i].value);
    }
  }
  document.querySelector("#cbox_result").textContent = result.join(",");
});

//メニュー（単一）
let btn6 = document.querySelector("#select1_btn");
btn6.addEventListener("click", () => {
  let chooseresult = "";
  let choose = document.querySelector("#menu1").value;
  document.querySelector("#select1_result").textContent = choose;
});

//メニュー（複数）
let btn7 = document.querySelector("#selectm_btn");
btn7.addEventListener("click", () => {
  let chooseresult = [];
  let choose = document.querySelector("#menu2").options;
  for (let i = 0; i < choose.length; i++) {
    if (choose[i].selected) {
      chooseresult.push(choose[i].value);
    }
  }
  document.querySelector("#selectm_result").textContent += chooseresult;
});
