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
    data.forEach((project, index) => {
      console.log(data);

      const WorksCollection = document.getElementById('workcollection');
      const Works = document.createElement('div');
      Works.classList.add('works');
      WorksCollection.appendChild(Works);

      const Snapshot = document.createElement('div');
      Snapshot.classList.add('snapshot');
      Snapshot.setAttribute('id', 'snapshot');
      const SnapshotImage = document.createElement('img');
      SnapshotImage.src = project.featuredImage;
      Snapshot.appendChild(SnapshotImage);

      const CardInfo = document.createElement('div');
      CardInfo.classList.add('card-info');
      CardInfo.setAttribute('id', 'cardinfo');

      Works.appendChild(Snapshot);
      Works.appendChild(CardInfo);

      const PrimaryText = document.createElement('div');
      PrimaryText.classList.add('primary-text');
      const Title = document.createElement('h2');
      const TitleText = document.createTextNode(project.name);
      Title.appendChild(TitleText);

      PrimaryText.appendChild(Title);
      const WorkInfo = document.createElement('div');
      WorkInfo.classList.add('work-info');
      const Client = document.createElement('div');
      Client.classList.add('client');
      const ClientText = document.createElement('p');
      const ClientTextNode = document.createTextNode(project.client);

      ClientText.appendChild(ClientTextNode);
      Client.appendChild(ClientText);

      const Counter = document.createElement('div');
      Counter.classList.add('counter');

      const Role = document.createElement('div');
      Role.classList.add('role');
      const RoleText = document.createElement('p');
      Role.appendChild(RoleText);
      const RoleTextNode = document.createTextNode(project.role);
      RoleText.appendChild(RoleTextNode);

      const CounterOne = document.createElement('div');
      CounterOne.classList.add('counterone');
      const CounterOneText = document.createElement('p');
      CounterOne.appendChild(CounterOneText);

      const Year = document.createElement('div');
      Year.classList.add('year');
      const YearText = document.createElement('p');
      Year.appendChild(YearText);
      const YearTextNode = document.createTextNode(project.year);
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
      const DescriptionTextNode = document.createTextNode(project.description);
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

      const ActionButton = document.createElement('button');
      ActionButton.classList.add('action-button');
      ActionButton.setAttribute('id', index + 1);

      // const btnIndex = document.querySelectorAll('.action-button');

      // btnIndex.forEach((i) => {
      //   i.addEventListener('click', () => {
      //     console.log(i);
      //   });
      // });

      const ActionButtonText = document.createTextNode('See Project');
      // ActionButton.innerHTML = index + 1;
      ActionButton.appendChild(ActionButtonText);

      CardInfo.appendChild(LanguageTags);
      const ActionButtonParent = document.createElement('div');
      ActionButtonParent.classList.add('action');
      ActionButtonParent.appendChild(ActionButton);
      CardInfo.appendChild(ActionButtonParent);

      const SeeProject = document.querySelectorAll('.action-button');
      const ProjectModal = document.querySelector('.project-modal');
      const ProjectClose = document.querySelector('.project-close');

      ProjectClose.addEventListener('click', () => {
        ProjectModal.style.display = 'none';
      });
      SeeProject.forEach((i, index) => {
        i.addEventListener('click', () => {
          console.log(i);
          console.log(i.id);
          console.log(data[index].name);

          const ProjectTitle = document.getElementById('title-project');
          ProjectTitle.innerHTML = `<h2>${data[index].name}</h2>`;
          const ProjectDescription =
            document.getElementById('descriptionproject');
          ProjectDescription.innerHTML = `<p>${data[index].description}</p>`;
          const ClientProject = document.getElementById('clientproject');
          ClientProject.innerHTML = `<p>${data[index].client}</p>`;
          const RoleProject = document.getElementById('roleproject');
          RoleProject.innerHTML = `<p>${data[index].role}</p>`;
          const YearProject = document.getElementById('yearproject');
          YearProject.innerHTML = `<p>${data[index].year}</p>`;

          const projecturl = project.liveVersion;
          const ProjectActionBtn = document.getElementById('viewprojectbtn');
          ProjectActionBtn.addEventListener('click', () => {
            window.location.replace(projecturl, '_blank');
          });

          const sourceCodeurl = project.source;
          const SourceCodeActionBtn = document.getElementById('viewsourcebtn');
          SourceCodeActionBtn.addEventListener('click', () => {
            window.location.replace(sourceCodeurl, '_blank');
          });

          ProjectModal.style.display = 'block';
        });
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
