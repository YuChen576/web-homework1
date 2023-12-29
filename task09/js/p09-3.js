let silder = document.querySelector("#inpute");

silder.addEventListener("input", () => {
  let result1 = document.querySelector("#result1");
  let result2 = document.querySelector("#result2");

  let inpute = document.querySelector("#inpute");

  let result = document.querySelector("#result");
  result.textContent = inpute.value;

  let circle = Number(inpute.value) * 2 * Math.PI;
  // document.querySelector("#result1").innerHTML = circle;
  result1.textContent = circle;

  let area = Number(inpute.value) * Number(inpute.value) * Math.PI;
  // document.querySelector("#result2").innerHTML = area;
  result2.textContent = area;
});
