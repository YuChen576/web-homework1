let dt = document.querySelectorAll("dt");
for (let k = 0; k < dt.length; k++) {
  dt[k].addEventListener("click", function () {
    let dd = document.querySelectorAll("dd")[k];
    dd.classList.toggle("anim");
  });
}
