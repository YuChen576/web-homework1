let btn1 = document.querySelector("#btn1");
btn1.addEventListener("click", () => {
  let input = document.querySelector("#input");
  let circle = Number(input.value) * 2 * Math.PI;
  document.querySelector("#display").innerHTML = "円周:" + circle;
});

let btn2 = document.querySelector("#btn2");
btn2.addEventListener("click", () => {
  let input = document.querySelector("#input");
  let area = Number(input.value) * Number(input.value) * Math.PI;
  document.querySelector("#display").innerHTML = "面積:" + area;
});
