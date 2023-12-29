const getMax = document.querySelector("#getMax1");

getMax1.addEventListener("click", () => {
  getMax11();
});

function getMax11() {
  let num = document.querySelector("#num");
  let inpNum = num.value;
  let lists = inpNum.split(",");

  let max = Number(lists[0]);
  for (let i = 0; i < lists.length; i++) {
    if (Number(lists[i]) >= max) {
      max = Number(lists[i]);
    }
  }
  document.querySelector("#findmax").innerHTML = max;
}
