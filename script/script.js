const menu = document.querySelector("#mobile-menu");
const mobile_nav = document.querySelector(".main-nav");
const header = document.querySelector(".header");

// LOADING ANIMATION
window.addEventListener("load", () => {
  const loader = document.querySelector(".loader");
  loader.classList.add("loader-hidden");

  loader.addEventListener("transitionend", () => {
    document.body.removeChild("loader");
  });
});

// NAVIGATION ISH NEXT
menu.addEventListener("click", () => {
  menu.classList.toggle("is-active");
  mobile_nav.classList.toggle("nav-open");
});
