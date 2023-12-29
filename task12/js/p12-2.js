const cv = document.querySelector("canvas");
const gc = cv.getContext("2d");
const btn = document.querySelector("#btn");

btn.addEventListener("click", () => {
  gc.strokeStyle = "blue";
  gc.beginPath();
  gc.lineWidth = 5;
  gc.arc(640 * Math.random(), 480 * Math.random(), 50, 0, 2 * Math.PI);
  gc.stroke();
});
