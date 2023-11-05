const header = document.querySelector(".header");

const menu_btn = document.querySelector(".mobile-navbar-btn");

function toggle() {
  header.classList.toggle("active");
}

menu_btn.addEventListener("click", toggle);

const nav_links = document.querySelectorAll(".navbar-link");

Array.from(nav_links).forEach((btn) => {
  btn.addEventListener("click", toggle);
});

let home = document.querySelectorAll(".navbar-link")[0];
let about = document.querySelectorAll(".navbar-link")[1];
let menu = document.querySelectorAll(".navbar-link")[2];
let services = document.querySelectorAll(".navbar-link")[3];
let contact = document.querySelectorAll(".navbar-link")[4];

home.addEventListener("click", () => {
  document.title = "Foods | Home";
});
about.addEventListener("click", () => {
  document.title = "Foods | About";
});
menu.addEventListener("click", () => {
  document.title = "Foods | Menu";
});
services.addEventListener("click", () => {
  document.title = "Foods | Services";
});
contact.addEventListener("click", () => {
  document.title = "Foods | Contact";
});
