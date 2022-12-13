const addExitTransition = () => {
  document.querySelector('.hero-container').classList.remove('enter-transition-hero');
  document.querySelector('.hero-container').classList.add('exit-transition-hero');
};

// const addTransitions = () => {
//   const heroContainer = document.querySelector('.hero-container');

//   if (heroContainer.classList.contains('enter-transition-hero')) {
//     heroContainer.classList.toggle('exit-transition-hero');
//     heroContainer.classList.remove('enter-transition-hero');
//   } else {
//     heroContainer.classList.toggle('enter-transition-hero');
//     heroContainer.classList.remove('exit-transition-hero');
//   }
// };

const sidebarWindow = document.querySelector('.sidebar-window');
const sidebar = document.querySelector('.sidebar');
const heroContainer = document.querySelector('.hero-container');

const showSidebar = () => {
  sidebar.classList.add('show-sidebar');
  sidebarWindow.classList.remove('hidden');
};

const openCloseNav = () => {
  const closeSidebarBtn = document.getElementById('close-sidebar');
  const musicOption = document.getElementById('music-option');
  const statOption = document.getElementById('stat-option');
  const statsContainer = document.querySelector('.stats-container');
  const bgMusicContainer = document.querySelector('.bg-music-container');

  closeSidebarBtn.addEventListener('click', () => {
    sidebarWindow.classList.add('hidden');
    sidebar.classList.remove('show-sidebar');
    heroContainer.classList.remove('enter-transition-hero');
    // showHideSidebar();
    addExitTransition();
  });

  musicOption.addEventListener('click', () => {
    showSidebar();
    // addTransitions();
    if (!heroContainer.classList.contains('enter-tranition-hero')) {
      heroContainer.classList.add('enter-transition-hero');
    }
    heroContainer.classList.remove('exit-transition-hero');
    bgMusicContainer.classList.remove('hidden');
    statsContainer.classList.add('hidden');
  });

  statOption.addEventListener('click', () => {
    showSidebar();
    // addTransitions();
    if (!heroContainer.classList.contains('enter-tranition-hero')) {
      heroContainer.classList.add('enter-transition-hero');
    }

    heroContainer.classList.remove('exit-transition-hero');
    bgMusicContainer.classList.add('hidden');
    statsContainer.classList.remove('hidden');
  });
};

export default openCloseNav;