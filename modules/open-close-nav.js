const sidebarWindow = document.querySelector('.sidebar-window');
const sidebar = document.querySelector('.sidebar');
const heroContainer = document.querySelector('.hero-container');
const overlay = document.querySelector('.overlay');

const showSidebar = () => {
  overlay.classList.remove('hidden');
  heroContainer.classList.remove('hidden');
  sidebar.classList.add('show-sidebar');
  sidebarWindow.classList.add('sidebar-window-style');
};

const openCloseNav = () => {
  const closeSidebarBtn = document.getElementById('close-sidebar');
  const musicOption = document.getElementById('music-option');
  const statOption = document.getElementById('stat-option');
  const statsContainer = document.querySelector('.stats-container');
  const bgMusicContainer = document.querySelector('.bg-music-container');

  closeSidebarBtn.addEventListener('click', () => {
    overlay.classList.add('hidden');
    heroContainer.classList.add('hidden');
    sidebarWindow.classList.remove('sidebar-window-style');
    sidebar.classList.remove('show-sidebar');

    musicOption.classList.remove('stat-option-active');
    statOption.classList.remove('stat-option-active');
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