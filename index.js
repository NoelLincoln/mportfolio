const MobileNav = document.querySelector(".mobile-nav");
const NavbarContent = document.querySelector(".navbar-content");
const MobileNavImg = document.querySelector(".mobile-nav-img");

const IconClose = document.querySelector(".icon-close");

const NavbarOptions = document.querySelectorAll(".navbar-options");

const HeadlineWrapper = document.querySelector(".headline");
const logo = document.querySelector(".logo");

function blurbackground() {
  HeadlineWrapper.style.filter = "blur(6px)";
  logo.style.filter = "blur(6px)";
}
function undoblurbackground() {
  HeadlineWrapper.style.filter = "none";
  logo.style.filter = "none";
}

MobileNav.addEventListener("click", () => {
  NavbarContent.classList.toggle("hide");
  MobileNavImg.classList.toggle("hide");
  IconClose.classList.toggle("hide");
  blurbackground();
});

IconClose.addEventListener("click", () => {
  NavbarContent.classList.toggle("hide");
  MobileNavImg.classList.toggle("hide");
  IconClose.classList.toggle("hide");
  undoblurbackground();
});

NavbarOptions.forEach(function (navbaroption) {
  navbaroption.addEventListener("click", () => {
    NavbarContent.classList.toggle("hide");
    MobileNavImg.classList.toggle("hide");
    IconClose.classList.toggle("hide");
    undoblurbackground();
  });
});
