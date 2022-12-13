/* eslint-disable no-plusplus */
const timerEl = document.getElementById('time');
const btnPlay = document.getElementById('play');
const btnPause = document.getElementById('pause');
const btnReset = document.getElementById('reset');
const sessionCountEl = document.getElementById('session-count');

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


const updateTimeCount = () => {
    
}

const updateSessionCount = () => {
// update the number of sessions in DOM
  sessionCount++;

  if (sessionCount > 1) {
    // put session count 1 / 4
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
    secondsEl = sec % 60; // convert to seconds
    minutesEl = parseInt(sec / 60, 10); // convert to minutes

    // display time add zeros if minutes or seconds is less than 0
    secondsEl = secondsEl < 10 ? `0${secondsEl}` : secondsEl;
    minutesEl = minutesEl < 10 ? `0${minutesEl}` : minutesEl;
    timerEl.innerHTML = `${minutesEl}:${secondsEl}`;

    // check if 25 minutes is over
    if (minutesEl === '00' && secondsEl === '00') {
      updateSessionCount();
      updateTimeCount();
      // reset to original time
      sec = originalTime;
    }
    sec--;
  }
};

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

export default updateCountDown;
