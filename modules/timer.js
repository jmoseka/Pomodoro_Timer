/* eslint-disable no-plusplus */
const timerEl = document.getElementById('time');
const btnPlay = document.getElementById('play');
const btnPause = document.getElementById('pause');
const btnReset = document.getElementById('reset');
const sessionCountEl = document.getElementById('session-count');
const completedSessionEl = document.getElementById('total-session');

const originalTime = 25;
let sec = originalTime;
let sessionCount = 1;
let sessionCompleted = 0;
let totalFocusTime = 0;
let counter = 0;
let isPaused = true;

const updateTotalFocusTime = () => {
  let focusHours = 0;
  let focusMinutes = 0;

  totalFocusTime += originalTime;

  if (totalFocusTime > 60) {
    focusHours = parseInt(totalFocusTime / 60, 10);
    focusMinutes = parseInt(totalFocusTime % 60, 10);
    document.getElementById('total-time').innerHTML = `${focusHours}h ${focusMinutes}m`;
  } else {
    document.getElementById('total-time').innerHTML = `${totalFocusTime}m`;
  }
};

const updateSessionCount = () => {
// update the number of sessions in DOM
  sessionCount++;

  if (sessionCount > 4) {
    sessionCompleted++;
    completedSessionEl.innerHTML = sessionCompleted;
    // reset back to one
    sessionCount = 1;
  }
  sessionCountEl.innerHTML = `${sessionCount} / 4 sessions`;
};

const takeLongBreak = () => {
  if (counter === 4) {
    const interval = setInterval(() => {
      console.log('This is the long break');
    }, 1000);

    setTimeout(() => {
      clearInterval(interval);
    }, 10000);
  }
};

const updateCounterHTML = () => {
  let secondsEl = 0;
  let minutesEl = 0;

  secondsEl = sec % 60; // convert to seconds
  minutesEl = parseInt(sec / 60, 10); // convert to minutes

  // display time add zeros if minutes or seconds is less than 0
  secondsEl = secondsEl < 10 ? `0${secondsEl}` : secondsEl;
  minutesEl = minutesEl < 10 ? `0${minutesEl}` : minutesEl;
  timerEl.innerHTML = `${minutesEl}:${secondsEl}`;
};

// update count down function

const updateCountDown = () => {
  const interval1 = setInterval(() => {
    sec--;
    updateCounterHTML();
    // check if 25 minutes is over
    // if (minutesEl === '00' && secondsEl === '00') {

    // }
  }, 1000);

  setTimeout(() => {
    clearInterval(interval1);
    updateTotalFocusTime();
    updateSessionCount();
    sec = 5;

    // set the second interval to for shortbreak
    const interval2 = setInterval(() => {
      sec--;
      updateCounterHTML();
    }, 1000);

    // after 5 seconds, clear the second interval
    setTimeout(() => {
      clearInterval(interval2);
      sec = originalTime;
      // start counter to check howm many times the intervals will run
      counter++;
      console.log('counter count----', counter);
      if (counter < 3) {
        updateCountDown();
      } else {
        takeLongBreak();
      }
    }, 5000);
  }, 25000);
};

const pomoTimer = () => {
  updateCountDown();
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
  isPaused = true;
  timerEl.innerHTML = '25:00';
});

export default pomoTimer;
