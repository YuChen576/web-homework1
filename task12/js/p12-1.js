let c = { x: 0, y: 0, r: 100 };
let id = null;

const cv = document.querySelector("canvas");
const gc = cv.getContext("2d");
const btn = document.querySelector("#btn");

btn.addEventListener("click", () => {
  if (id == null) {
    id = setInterval(draw, 5);
    btn.textContent = "停止";
  } else {
    clearInterval(id);
    id = null;
    btn.textContent = "移動再開";
  }
});

function draw() {
  c.x += 1;
  c.y += 1;
  gc.clearRect(0, 0, cv.width, cv.height);
  gc.beginPath();
  gc.fillStyle = "red";
  gc.arc(c.x, c.y, c.r, 0, 2 * Math.PI);
  gc.fill();
}
