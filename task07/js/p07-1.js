const btn = document.querySelector("#btn1");
btn.addEventListener("click", () => {
  divination();
})
function divination() {
  let menulist = ['大吉', '中吉', '吉', '小吉', '凶']
  let augury = document.querySelector("#result");
  let num = parseInt(Math.random() * 5);
  augury.textContent = "あなたの運勢は" + menulist[num] + "です";
}