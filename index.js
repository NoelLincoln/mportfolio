const MobileNav = document.querySelector('.mobile-nav');
const NavbarContent = document.querySelector('.navbar-content');
const MobileNavImg = document.querySelector('.mobile-nav-img');

const IconClose = document.querySelector('.icon-close');

const NavbarOptionsPortfolio = document.querySelector(
  '.navbar-options-portfolio',
);
const NavbarOptionsAbout = document.querySelector('.navbar-options-about');
const NavbarOptionsContact = document.querySelector('.navbar-options-contact');

const HeadlineWrapper = document.querySelector('.headline');
const logo = document.querySelector('.logo');
// const header = document.querySelector("header");

function blurbackground() {
  HeadlineWrapper.style.filter = 'blur(6px)';
  logo.style.filter = 'blur(6px)';
}
function undoblurbackground() {
  HeadlineWrapper.style.filter = 'none';
  logo.style.filter = 'none';
}

MobileNav.addEventListener('click', () => {
  NavbarContent.classList.toggle('hide');
  MobileNavImg.classList.toggle('hide');
  IconClose.classList.toggle('hide');
  blurbackground();
});

IconClose.addEventListener('click', () => {
  NavbarContent.classList.toggle('hide');
  MobileNavImg.classList.toggle('hide');
  IconClose.classList.toggle('hide');
  undoblurbackground();
});

NavbarOptionsPortfolio.addEventListener('click', () => {
  NavbarContent.classList.toggle('hide');
  MobileNavImg.classList.toggle('hide');
  IconClose.classList.toggle('hide');
  undoblurbackground();
});
NavbarOptionsAbout.addEventListener('click', () => {
  NavbarContent.classList.toggle('hide');
  MobileNavImg.classList.toggle('hide');
  IconClose.classList.toggle('hide');
  undoblurbackground();
});
NavbarOptionsContact.addEventListener('click', () => {
  NavbarContent.classList.toggle('hide');
  MobileNavImg.classList.toggle('hide');
  IconClose.classList.toggle('hide');
  undoblurbackground();
});
