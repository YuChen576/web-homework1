let list = document.querySelectorAll(".list1");
for (let k = 0; k < list.length; k++) {
  list[k].addEventListener("click", (event) => {
    event.target.classList.toggle("animation");
  });
}
