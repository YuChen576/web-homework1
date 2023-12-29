let input = document.querySelector("#input2");

input.addEventListener("input", () => {
  let result = document.querySelector("#result");
  let area = Number(input2.value) * Number(input2.value) * Math.PI;
  document.querySelector("#result").innerHTML = "面積:" + area;
});
