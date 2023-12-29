const getItems = document.querySelector("#getItems1");
const addCart = document.querySelector("#addCart1");

let cart = {};
getItems1.addEventListener("click", () => {
  getItems11();
});

function getItems11() {
  //買い物かごの中を出力する

  let tr = "";
  for (let key in cart) {
    tr += "<tr><td>" + key + "</td><td>" + cart[key] + "</td><tr>";
  }

  let result = document.querySelector("#display");
  result.innerHTML =
    "<table border='1' stlyle='border-collapse: collapse;'><tr><th>品名</th><th>個数</th></tr>" +
    tr +
    "</table>";
}
addCart1.addEventListener("click", () => {
  addCart11();
});
function addCart11() {
  //入力された品名と個数をオブジェクトに追加
  let a = document.querySelector("#input1").value;
  let b = parseInt(document.querySelector("#input2").value);
  let add = 0;
  if (a in cart) {
    cart[a] = cart[a] + b;
    add = 1;
  }
  if (add == 0) {
    cart[a] = b;
  }
  add = 0;
  getItems11();
}
