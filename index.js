/* eslint-disable no-plusplus */
import openCloseNav from './modules/open-close-nav.js';
// import pomoTimer from './modules/timer.js';
import runAndBreak from './modules/countDown.js';

openCloseNav();
// pomoTimer();

// Repeat the process 4 times
for (let i = 0; i < 4; i++) {
  runAndBreak();
}
