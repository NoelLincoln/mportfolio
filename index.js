const MobileNav = document.querySelector('.mobile-nav');
const NavbarContent = document.querySelector('.navbar-content');
const MobileNavImg = document.querySelector('.mobile-nav-img');

const IconClose = document.querySelector('.icon-close');

const NavbarOptions = document.querySelectorAll('.navbar-options');
const HeadlineWrapper = document.querySelector('.headline');
const logo = document.querySelector('.logo');
const projects = document.querySelector('.work-collection');
const about = document.querySelector('.about-myself');
const contact = document.querySelector('.contact-form');

const SeeProject = document.querySelector('#see-project');
const ProjectModal = document.querySelector('.project-modal');
const ProjectClose = document.querySelector('.project-close');

function blurbackground() {
  HeadlineWrapper.style.filter = 'blur(6px)';
  logo.style.filter = 'blur(6px)';
  projects.style.filter = 'blur(6px)';
  about.style.filter = 'blur(6px)';
  contact.style.filter = 'blur(6px)';
}
function undoblurbackground() {
  HeadlineWrapper.style.filter = 'none';
  logo.style.filter = 'none';
  projects.style.filter = 'none';
  about.style.filter = 'none';
  contact.style.filter = 'none';
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

NavbarOptions.forEach((navbaroption) => {
  navbaroption.addEventListener('click', () => {
    NavbarContent.classList.toggle('hide');
    MobileNavImg.classList.toggle('hide');
    IconClose.classList.toggle('hide');
    undoblurbackground();
  });
});
SeeProject.addEventListener('click', () => {
  ProjectModal.style.display = 'block';
});
ProjectClose.addEventListener('click', () => {
  ProjectModal.style.display = 'none';
});
