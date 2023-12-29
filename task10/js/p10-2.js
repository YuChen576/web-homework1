// ==== それぞれのボタンを押した時のイベントリスナーを設定し処理を定義する ====
//テキストボックス
let textbox = document.querySelector("#input1");
textbox.addEventListener("input", () => {
  let inText = document.querySelector("#input1").value;
  document.querySelector("#tbox_result").textContent = inText;
});
//スライダー
let silder = document.querySelector("#input2");
silder.addEventListener("input", () => {
  let inpute = document.querySelector("#input2");
  let result = document.querySelector("#range_result");

  result.textContent = inpute.value;
});

//テキストエリア
let textarea = document.querySelector("#point");
textarea.addEventListener("input", () => {
  let Text = document.querySelector("#point").value;
  document.querySelector("#tarea_result").textContent = Text;
});

//ラジオボタン
let radio = document.querySelector("#radio");
radio.addEventListener("change", () => {
  let opt = "";
  let radio = document.querySelectorAll("#radio input");
  for (let i = 0; i < radio.length; i++) {
    if (radio[i].checked) {
      opt = radio[i].value;
    }
  }
  document.querySelector("#rbtn_result").textContent = opt;
});

//チェックボックス
let checkbox = document.querySelector("#checkbox");
checkbox.addEventListener("change", () => {
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
let choose1 = document.querySelector("#menu1");
choose1.addEventListener("change", () => {
  let chooseresult = "";
  let choose = document.querySelector("#menu1").value;
  document.querySelector("#select1_result").textContent = choose;
});

//メニュー（複数）

let choose2 = document.querySelector("#menu2");
choose2.addEventListener("change", () => {
  let chooseresult = [];
  let choose = document.querySelector("#menu2").options;
  for (let i = 0; i < choose.length; i++) {
    if (choose[i].selected) {
      chooseresult.push(choose[i].value);
    }
  }
  document.querySelector("#selectm_result").textContent = chooseresult;
});
