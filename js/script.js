let burgerMenu = document.getElementById("burger__menu");

burgerMenu.onclick = function () {
  addMenu();
};

function addMenu() {
  document.querySelector(".menu").classList.toggle("show");

//   burgerMenu.remove("menu");
}