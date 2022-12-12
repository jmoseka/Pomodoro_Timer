/* eslint-disable no-plusplus */
/* eslint-disable no-mixed-operators */
const timerEl = document.getElementById('time');
const btnPlay = document.getElementById('play');
const btnPause = document.getElementById('pause');
const btnReset = document.getElementById('reset');
const sessionCountEl = document.getElementById('session-count');
const closeSidebar = document.getElementById('close-sidebar');
const musicOption = document.getElementById('music-option');
// const statOption = document.getElementById('stat-option');

// const startMinutes = 25;
// const time = startMinutes * 60; /// total seconds in 25minutes

const originalTime = 25;
let sec = originalTime;
let secondsEl = 0;
let minutesEl = 0;
let sessionCount = 1;
let totalSession = 0;
let totalTime = 0;
let totalHours = 0;
let totalMinutes = 0;

let isPaused = true;

const updateSessionCount = () => {
  sessionCount++;
  if (sessionCount > 1) {
    // reset session count / 4
    sessionCount = 1;

    // update total focus time
    totalTime += originalTime;
    if (totalTime === 60) {
      totalHours = parseInt(totalTime / 60, 10);
      totalMinutes = parseInt(totalTime % 60, 10);

      document.getElementById('total-time').innerHTML = `${totalHours > 1 ? `${totalHours} hrs` : `${totalHours} hr`}  ${totalMinutes} min`;
    } else {
      document.getElementById('total-time').innerHTML = `${totalTime} Minutes`;
    }

    // update completed session time
    totalSession++;

    document.getElementById('total-session').innerHTML = totalSession;
  }

  sessionCountEl.innerHTML = sessionCount;
};

// update count down function
const updateCountDown = () => {
  if (!isPaused) {
    secondsEl = sec % 60;
    minutesEl = parseInt(sec / 60, 10);

    // display time
    secondsEl = secondsEl < 10 ? `0${secondsEl}` : secondsEl;
    minutesEl = minutesEl < 10 ? `0${minutesEl}` : minutesEl;
    timerEl.innerHTML = `${minutesEl}:${secondsEl}`;

    // check if 25 minutes is over
    if (minutesEl === '00' && secondsEl === '00') {
      updateSessionCount();
      sec = originalTime;
    }
    sec--;
  }
};

setInterval(updateCountDown, 1000);

btnPlay.addEventListener('click', () => {
  btnPlay.classList.add('active-state');
  btnPause.classList.remove('active-state');
  btnReset.classList.remove('active-state');

  isPaused = false;
});

btnPause.addEventListener('click', () => {
  btnPause.classList.add('active-state');
  btnPlay.classList.remove('active-state');
  btnReset.classList.remove('active-state');

  isPaused = true;
});

btnReset.addEventListener('click', () => {
  btnReset.classList.add('active-state');
  btnPlay.classList.remove('active-state');
  btnPause.classList.remove('active-state');

  sec = originalTime;
  isPaused = false;
});

closeSidebar.addEventListener('click', () => {
  document.querySelector('.sidebar').classList.remove('show-sidebar');
});

musicOption.addEventListener('click', () => {
  document.querySelector('.sidebar').classList.toggle('show-sidebar');
});