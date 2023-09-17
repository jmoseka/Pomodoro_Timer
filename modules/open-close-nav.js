import handlePWAInstall from './pwa-install.js';

const sidebarWindow = document.querySelector('.sidebar-window');
const sidebar = document.querySelector('.sidebar');
const heroContainer = document.querySelector('.hero-container');
const heroContainerParent = document.querySelector('.hero-container-parent');
const overlay = document.querySelector('.overlay');

let innerWidth = 0;
innerWidth = window.innerWidth;

window.addEventListener('resize', () => {
  innerWidth = window.innerWidth;

  if (sidebar.classList.contains('show-sidebar')) {
    if (innerWidth < 830) {
      overlay.classList.add('overlay-blur');
    } else {
      overlay.classList.remove('overlay-blur');
    }
  } else {
    overlay.classList.remove('overlay-blur');
    heroContainerParent.classList.remove('disable-pointer-events');
  }
});

const showSidebar = () => {
  if (innerWidth < 830) {
    overlay.classList.add('overlay-blur');
    // Disable pointer events on hero container parent
    heroContainerParent.classList.add('disable-pointer-events');
  } else {
    overlay.classList.remove('overlay-blur');
  }

  if (innerWidth < 600) {
    sidebarWindow.style.transition = 'none';
  } else {
    sidebarWindow.style.transition = 'min-width 340ms linear';
  }
  heroContainer.classList.remove('hidden');
  sidebar.classList.add('show-sidebar');
  sidebarWindow.classList.add('sidebar-window-style');

  handlePWAInstall();
};

const openCloseNav = () => {
  const closeSidebarBtn = document.getElementById('close-sidebar');
  const musicOption = document.getElementById('music-option');
  const statOption = document.getElementById('stat-option');
  const statsContainer = document.querySelector('.stats-container');
  const bgMusicContainer = document.querySelector('.bg-music-container');

  closeSidebarBtn.addEventListener('click', () => {
    overlay.classList.remove('overlay-blur');
    heroContainer.classList.add('hidden');
    sidebarWindow.classList.remove('sidebar-window-style');
    sidebar.classList.remove('show-sidebar');

    musicOption.classList.remove('stat-option-active');
    statOption.classList.remove('stat-option-active');

    // Enable pointer events on hero container parent
    heroContainerParent.classList.remove('disable-pointer-events');
  });

  musicOption.addEventListener('click', () => {
    showSidebar();
    musicOption.classList.add('stat-option-active');
    statOption.classList.remove('stat-option-active');

    bgMusicContainer.classList.remove('hidden');
    statsContainer.classList.add('hidden');
  });

  statOption.addEventListener('click', () => {
    showSidebar();
    musicOption.classList.remove('stat-option-active');
    statOption.classList.add('stat-option-active');

    bgMusicContainer.classList.add('hidden');
    statsContainer.classList.remove('hidden');
  });
};

export default openCloseNav;