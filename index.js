const mobile_nav = document.querySelector(".mobile-nav");
const navbar_content = document.querySelector(".navbar-content");
const mobile_nav_img = document.querySelector(".mobile-nav-img");
const icon_close_ = document.querySelector(".icon-close");

const icon_close = document.querySelector(".icon-close");

const navbar_options_portfolio = document.querySelector(
  ".navbar-options-portfolio"
);
const navbar_options_about = document.querySelector(".navbar-options-about");
const navbar_options_contact = document.querySelector(
  ".navbar-options-contact"
);

const headline_wrapper = document.querySelector(".headline");
const logo = document.querySelector(".logo");
const header = document.querySelector("header");

function blurbackground() {
  headline_wrapper.style.filter = "blur(6px)";
  logo.style.filter = "blur(6px)";
}
function undoblurbackground() {
  headline_wrapper.style.filter = "none";
  logo.style.filter = "none";
}

mobile_nav.addEventListener("click", () => {
  navbar_content.classList.toggle("hide");
  mobile_nav_img.classList.toggle("hide");
  icon_close.classList.toggle("hide");
  blurbackground();
});

icon_close.addEventListener("click", () => {
  navbar_content.classList.toggle("hide");
  mobile_nav_img.classList.toggle("hide");
  icon_close.classList.toggle("hide");
  undoblurbackground();
});

navbar_options_portfolio.addEventListener("click", () => {
  navbar_content.classList.toggle("hide");
  mobile_nav_img.classList.toggle("hide");
  icon_close.classList.toggle("hide");
  undoblurbackground();
});
navbar_options_about.addEventListener("click", () => {
  navbar_content.classList.toggle("hide");
  mobile_nav_img.classList.toggle("hide");
  icon_close.classList.toggle("hide");
  undoblurbackground();
});
navbar_options_contact.addEventListener("click", () => {
  navbar_content.classList.toggle("hide");
  mobile_nav_img.classList.toggle("hide");
  icon_close.classList.toggle("hide");
  undoblurbackground();
});
