/* eslint-disable no-plusplus */
const timerEl = document.getElementById('time');
const btnPlay = document.getElementById('play');
const btnPause = document.getElementById('pause');
const btnReset = document.getElementById('reset');
const sessionCountEl = document.getElementById('session-count');
const completedSessionEl = document.getElementById('total-session');

const originalTime = 10;
let sec = originalTime;
let sessionCount = 0;
let sessionCompleted = 0;
let totalFocusTime = 0;
let counter = 0;
let isPaused = true;
let isShortBreak = false;
let isLongBreak = false;

const duration = {
  shortBreak: 5,
  longBreak: 10,
};

const intervals = {
  interval1: 0,
  interval2: 0,
  interval3: 0,
};

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

// const takeLongBreak = () => {
//   if (counter === 4) {
//     const interval = setInterval(() => {
//       console.log('This is the long break');
//     }, 1000);

//     setTimeout(() => {
//       clearInterval(interval);
//     }, 10000);
//   }
// };

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
  const takeShortBreak = () => {
    intervals.interval2 = setInterval(() => {
      if (counter < 4 && !isPaused) {
        isShortBreak = true;
        updateCounterHTML();
        console.log('short count----------', sec);
        sec--;

        if (sec < 0) {
          sec = originalTime;
          clearInterval(intervals.interval2);
          isShortBreak = false;
          intervals.interval1 = setInterval(updateCountDown, 1000);
        }
      }
    }, 1000);
  };

  const takeLongBreak = () => {
    intervals.interval3 = setInterval(() => {
      if (!isPaused) {
        isLongBreak = true;
        updateCounterHTML();
        console.log('long count----------', sec);
        sec--;

        if (sec < 0) {
          sec = originalTime;
          clearInterval(intervals.interval3);
          isLongBreak = false;
          intervals.interval1 = setInterval(updateCountDown, 1000);
        }
      }
    }, 1000);
  };

  if (!isPaused) {
    updateCounterHTML();
    console.log('count----------', sec);
    sec--;

    if (sec < 0) {
      sec = duration.shortBreak;
      counter++;
      clearTimeout(intervals.interval1);
      updateTotalFocusTime();
      updateSessionCount();

      // start shortbreak----------------
      // --------------------------------
      takeShortBreak();

      // start shortbreak----------------
      // --------------------------------
      if (counter === 4) {
        sec = duration.longBreak;
        takeLongBreak();
      }
      // ---------- end ----------------
    }
  }
};

const pomoTimer = () => {
  intervals.interval1 = setInterval(updateCountDown, 1000);
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
  isPaused = true;

  if (isShortBreak) {
    sec = duration.shortBreak;
  }
  if (isLongBreak) {
    sec = duration.longBreak;
  } else {
    sec = originalTime;
  }
  updateCounterHTML();
});

export default pomoTimer;
