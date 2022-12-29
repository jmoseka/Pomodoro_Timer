const sidebarWindow = document.querySelector('.sidebar-window');
const sidebar = document.querySelector('.sidebar');
const heroContainer = document.querySelector('.hero-container');

const addExitTransition = () => {
  heroContainer.classList.remove('enter-transition-hero');
  heroContainer.classList.add('exit-transition-hero');
};

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

    musicOption.classList.remove('stat-option-active');
    statOption.classList.remove('stat-option-active');
  });

  musicOption.addEventListener('click', () => {
    showSidebar();
    musicOption.classList.add('stat-option-active');
    statOption.classList.remove('stat-option-active');
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
    musicOption.classList.remove('stat-option-active');
    statOption.classList.add('stat-option-active');
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