/* eslint-disable no-plusplus */
/* eslint-disable no-mixed-operators */
const timerEl = document.getElementById('time');
const btnPlay = document.getElementById('play');
const btnPause = document.getElementById('pause');
const btnReset = document.getElementById('reset');
const sessionCountEl = document.getElementById('session-count');

// const startMinutes = 25;
// const time = startMinutes * 60; /// total seconds in 25minutes

btnPlay.addEventListener('click', () => {
  btnPlay.classList.toggle('active-state');
  btnPause.classList.remove('active-state');
  btnReset.classList.remove('active-state');
});

btnPause.addEventListener('click', () => {
  btnPause.classList.toggle('active-state');
  btnPlay.classList.remove('active-state');
  btnReset.classList.remove('active-state');
});

btnReset.addEventListener('click', () => {
  btnReset.classList.toggle('active-state');
  btnPlay.classList.remove('active-state');
  btnPause.classList.remove('active-state');
});

const originalTime = 5;
let sec = originalTime;
let secondsEl = 0;
let minutesEl = 0;
let sessionCount = 1;
let totalSession = 0;
let totalTime = 0;
let totalHours = 0;
let totalMinutes = 0;

const updateSessionCount = () => {
  sessionCount++;
  if (sessionCount > 4) {
    // reset session count / 4
    sessionCount = 1;

    // update total focus time
    totalTime += originalTime;
    if (totalTime > 60) {
      totalHours = parseInt(totalTime / 60, 10);
      totalMinutes = parseInt(totalTime % 60, 10);

      document.getElementById('total-time').innerHTML = `${totalHours > 1 ? `${totalHours}Hrs` : totalHours} Hr ${totalMinutes} Min`;
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
  sec--;
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
};

setInterval(updateCountDown, 1000);
