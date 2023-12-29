let id = null;
const canvas = document.querySelector("canvas");

const body = document.querySelector("body");
body.style.margin = 0;

const c = canvas.getContext("2d");
c.beginPath();
c.arc(0, 0, 50, 0, Math.PI * 2, false);
c.strokeStyle = "blue";
c.stroke();

class Circle {
  constructor(x, y, dx, dy, radius) {
    this.x = x;
    this.y = y;
    this.dx = dx;
    this.dy = dy;
    this.radius = radius;
  }
  draw() {
    c.beginPath();
    c.arc(this.x, this.y, 50, 0, Math.PI * 2, false);
    c.strokeStyle = "blue";
    c.lineWidth = 5;
    c.stroke();
  }

  update() {
    if (this.x < 0) {
      this.dx = +this.dx;
    }
    if (this.y < 0) {
      this.dy = -this.dy;
    }
    this.x += this.dx;
    this.y += -this.dy;
    this.draw();
  }
}

const circleArray = [];
const btn = document.querySelector("#btn");
btn.addEventListener("click", () => {
  for (let i = 0; i < 1; i++) {
    let radius = 50;
    let x = 480;
    let dx = (Math.random() - 1.5) * 5;
    let y = 0;
    let dy = (Math.random() - 1.5) * 5;
    circleArray.push(new Circle(x, y, dx, dy, radius));
  }
});

const animate = () => {
  requestAnimationFrame(animate);
  c.clearRect(0, 0, innerWidth, innerHeight);
  for (let i = 0; i < circleArray.length; i++) {
    circleArray[i].update();
  }
};
animate();
