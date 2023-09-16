import openCloseNav from './modules/open-close-nav.js';
import pomoTimer from './modules/timer.js';
import populateMusicCard from './modules/populateMusicCard.js';

openCloseNav();
populateMusicCard();
pomoTimer();

// Add PWA functionality
if ('serviceWorker' in navigator) {
  const result = await navigator.serviceWorker.register('/service_worker.js');

  if (result.active) {
    // eslint-disable-next-line no-console
    console.log('Service worker registered!');
  }
}