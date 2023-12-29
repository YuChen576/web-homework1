const sumValus = document.querySelector("#sumValus1");

sumValus1.addEventListener("click", () => {
  sumValus11();
});

function sumValus11() {
  let M = parseInt(document.querySelector("#M").value);
  let N = parseInt(document.querySelector("#N").value);
  sum = 0;
  for (let i = M; i <= N; i++) {
    sum = sum + i;
  }
  document.querySelector("#answer").innerHTML = sum;
}
