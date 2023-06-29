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

// const SnapshotImage = document.querySelector('#snapshot');
// const ProjectName = document.querySelector('#projectname');

fetch('projects.json')
  .then((response) => response.json())
  .then((data) => {
    data.forEach((project) => {
      console.log(data);
      console.log(project.name);

      const WorksCollection = document.getElementById('workcollection');
      const Works = document.createElement('div');
      Works.classList.add('works');
      WorksCollection.appendChild(Works);

      const Snapshot = document.createElement('div');
      Snapshot.classList.add('snapshot');
      Snapshot.setAttribute('id', 'snapshot');
      const SnapshotImage = document.createElement('img');
      SnapshotImage.src = 'assets/images/snapshot.svg';
      Snapshot.appendChild(SnapshotImage);

      const CardInfo = document.createElement('div');
      CardInfo.classList.add('card-info');
      CardInfo.setAttribute('id', 'cardinfo');

      Works.appendChild(Snapshot);
      Works.appendChild(CardInfo);

      const PrimaryText = document.createElement('div');
      PrimaryText.classList.add('primary-text');
      const Title = document.createElement('h2');
      const TitleText = document.createTextNode('Tonic');
      Title.appendChild(TitleText);

      PrimaryText.appendChild(Title);
      const WorkInfo = document.createElement('div');
      WorkInfo.classList.add('work-info');
      const Client = document.createElement('div');
      Client.classList.add('client');
      const ClientText = document.createElement('p');
      const ClientTextNode = document.createTextNode('Canopy');
      ClientText.appendChild(ClientTextNode);
      Client.appendChild(ClientText);

      const Counter = document.createElement('div');
      Counter.classList.add('counter');

      const Role = document.createElement('div');
      Role.classList.add('role');
      const RoleText = document.createElement('p');
      Role.appendChild(RoleText);
      const RoleTextNode = document.createTextNode('Backend Dev');
      RoleText.appendChild(RoleTextNode);

      const CounterOne = document.createElement('div');
      CounterOne.classList.add('counterone');
      const CounterOneText = document.createElement('p');
      CounterOne.appendChild(CounterOneText);

      const Year = document.createElement('div');
      Year.classList.add('year');
      const YearText = document.createElement('p');
      Year.appendChild(YearText);
      const YearTextNode = document.createTextNode('2023');
      YearText.appendChild(YearTextNode);

      RoleText.appendChild(RoleTextNode);
      WorkInfo.appendChild(Client);
      WorkInfo.appendChild(Counter);
      WorkInfo.appendChild(Role);
      WorkInfo.appendChild(CounterOne);

      WorkInfo.appendChild(Year);

      PrimaryText.appendChild(WorkInfo);

      CardInfo.appendChild(PrimaryText);

      const DescriptionText = document.createElement('div');
      DescriptionText.classList.add('description-text');
      const DescriptionTextNode = document.createTextNode(
        'A daily selection of privately personalized reads; no    accounts or sign-ups required.'
      );
      DescriptionText.appendChild(DescriptionTextNode);
      CardInfo.appendChild(DescriptionText);

      const LanguageTags = document.createElement('ul');
      LanguageTags.classList.add('language-tags');
      const ListLanguages = document.createElement('li');
      ListLanguages.classList.add('html-lan');
      const ListLanguagesTextNode = document.createTextNode('html');
      ListLanguages.appendChild(ListLanguagesTextNode);

      const ListLanguagesCss = document.createElement('li');
      const ListLanguagesCssTextNode = document.createTextNode('css');
      ListLanguagesCss.classList.add('css');
      ListLanguagesCss.appendChild(ListLanguagesCssTextNode);

      const ListLanguagesJs = document.createElement('li');
      const ListLanguagesJsTextNode = document.createTextNode('javscript');
      ListLanguagesJs.classList.add('javascript');
      ListLanguagesJs.appendChild(ListLanguagesJsTextNode);

      const list = document.querySelectorAll('li');
      list.forEach((language, index) => {
        if (index === 0) {
          language.classList.add('html');
        } else if (index === 2) {
          language.classList.add('css');
        }
      });
      LanguageTags.appendChild(ListLanguages);
      LanguageTags.appendChild(ListLanguagesCss);

      LanguageTags.appendChild(ListLanguagesJs);

      CardInfo.appendChild(LanguageTags);

      const ActionButton = document.createElement('button');
      ActionButton.classList.add('action-button');
      ActionButton.setAttribute('id', 'see-project');
      const ActionButtonText = document.createTextNode('See Project');
      ActionButton.appendChild(ActionButtonText);

      CardInfo.appendChild(ActionButton);

      const SeeProject = document.querySelector('#see-project');
      const ProjectModal = document.querySelector('.project-modal');
      const ProjectClose = document.querySelector('.project-close');
      SeeProject.addEventListener('click', () => {
        ProjectModal.style.display = 'block';
      });
      ProjectClose.addEventListener('click', () => {
        ProjectModal.style.display = 'none';
      });
    });
  });

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
  const list = document.querySelectorAll('li');
  list.forEach((language, index) => {
    if (index === 0) {
      language.classList.remove('html');
    } else if (index === 2) {
      language.classList.remove('css');
    }
  });
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
