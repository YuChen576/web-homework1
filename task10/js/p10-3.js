//テキストボックス  //スライダー //テキストエリア
let inp = document.querySelectorAll("input[type='text']");
for (let i = 0; i < inp.length; i++) {
  inp[i].addEventListener("click", function () {
    let inText = document.querySelector("#input1").value;
    document.querySelector("#tbox_result").textContent = inText;
  });
}

input2.addEventListener("click", function () {
  let silder = document.querySelector("#input2").value;
  document.querySelector("#range_result").textContent = silder;
});

point.addEventListener("click", function () {
  let textar = document.querySelector("#point").value;
  document.querySelector("#tarea_result").textContent = textar;
});

//ラジオボタン //チェックボックス
let chk = document.querySelectorAll("input[type='checkbox']");
let rad = document.querySelectorAll("input[type='radio']");
for (let k = 0; k < chk.length; k++) {
  chk[k].addEventListener("click", function () {
    let result = [];
    let cbox = document.querySelectorAll("#checkbox input");
    for (let k = 0; k < cbox.length; k++) {
      if (cbox[k].checked) {
        result.push(cbox[k].value);
      }
    }
    document.querySelector("#cbox_result").textContent = result;
  });
}

for (let j = 0; j < rad.length; j++) {
  rad[j].addEventListener("click", function () {
    let opt = "";
    opt = rad[j].value;
    document.querySelector("#rbtn_result").textContent = opt;
  });
}

//メニュー（単一）//メニュー（複数）

menu1.addEventListener("click", function () {
  let cho1 = document.querySelector("#menu1").value;
  document.querySelector("#select1_result").textContent = cho1;
});

menu2.addEventListener("click", function () {
  let chooseresult = [];
  let cho2 = document.querySelector("#menu2").options;
  for (m = 0; m < cho2.length; m++) {
    if (cho2[m].selected) {
      chooseresult.push(cho2[m].value);
    }
  }
  document.querySelector("#selectm_result").textContent = chooseresult;
});
