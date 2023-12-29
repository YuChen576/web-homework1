let li = document.querySelector(".list1");
li.addEventListener("mouseover", () => {
  li.classList.toggle("animation");
});

li.addEventListener("mouseout", () => {
  li.classList.toggle("animation");
});
