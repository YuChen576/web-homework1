
const tebie = document.querySelector("#tebie");
const zhuwen = document.querySelector("#zhuwen");
const tigong = document.querySelector("#tigong");


let menu = ['文字列の豆を炒め', 'サワークラウト', '青椒肉絲', '回鍋肉', '油淋鶏', '八宝菜','餃子'];
let m_list = [];
let menu_list = document.querySelector("#list");
zhuwen.addEventListener("click", () => {
  meal();
})
function meal() {
  let ran = parseInt(Math.random() * 7);
  m_list.push(menu[ran]);
  menu_list.textContent = m_list.join(",");
}
tigong.addEventListener("click", () => {
  cancel();
})
function cancel() {
  m_list.shift();
  menu_list.textContent = m_list.join(",");
}

tebie.addEventListener("click", () => {
  s_meal();
})
function s_meal() {
  let ran = parseInt(Math.random() * 7);
  m_list.unshift(menu[ran]);
  menu_list.textContent = m_list.join(",");
}