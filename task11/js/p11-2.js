let list = document.querySelectorAll(".list1");
for (let k = 0; k < list.length; k++) {
  list[k].addEventListener("mouseover", function () {
    let l = list[k];
    l.classList.toggle("animation");
  });

  list[k].addEventListener("mouseout", function () {
    let l = list[k];
    l.classList.toggle("animation");
  });
}
