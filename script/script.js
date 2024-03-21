const menu = document.querySelector("#mobile-menu");
const mobile_nav = document.querySelector("#mobile-nav");
const header = document.querySelector(".header");
const currentYear = document.querySelector(".year");

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
  mobile_nav.classList.toggle("hide-navbar");
});

// SWIPER CAROUSEL
const swiper = new Swiper(".swiper", {
  // Optional parameters

  loop: true,
  autoplay: {
    delay: 5000,
  },
  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
  },

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

// SETTING THE CORRECT YEAR
const getCurrentYear = new Date().getFullYear();
currentYear.innerHTML = getCurrentYear;
