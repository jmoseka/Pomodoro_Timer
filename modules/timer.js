/* eslint-disable no-plusplus */

import {
  updateShortBreakMsg, updateEncouragingMsg, updateLongBreakMsg, removeEncouragingMsg,
  generateQuote,
} from './notifyMsg.js';

const timerEl = document.getElementById('time');
const btnPlay = document.getElementById('play');
const btnPause = document.getElementById('pause');
const btnReset = document.getElementById('reset');
const sessionCountEl = document.getElementById('session-count');
const completedSessionEl = document.getElementById('total-session');
const alarmRing = document.getElementById('alarm-ring');

const originalTime = 1500;
let sec = originalTime;
let sessionCount = 0;
let sessionCompleted = 0;
let totalFocusTime = 0;
let counter = 0;
let isPaused = true;
let isShortBreak = false;
let isLongBreak = false;
let quotePresent = false;

const duration = {
  shortBreak: 300,
  longBreak: 900,
};

const intervals = {
  interval1: 0,
  interval2: 0,
  interval3: 0,
};

const ringAlarm = () => {
  alarmRing.src = 'modules/alarm.mp3';
  alarmRing.play();
};

const updateTotalFocusTime = () => {
  let focusHours = 0;
  let focusMinutes = 0;

  totalFocusTime += originalTime;
  focusMinutes = parseInt(totalFocusTime / 60, 10);
  focusHours = parseInt(focusMinutes / 60, 10);

  console.log(totalFocusTime, 'min', focusMinutes, 'hr', focusHours);

  if (focusMinutes >= 60) {
    focusMinutes = parseInt(focusMinutes % 60, 10);
    document.getElementById('total-time').innerHTML = `${focusHours}h ${focusMinutes}m`;
  } else {
    document.getElementById('total-time').innerHTML = `${focusMinutes}m`;
  }
};

const updateTotalSessionCount = () => {
  sessionCompleted++;
  completedSessionEl.innerHTML = sessionCompleted;
  sessionCount = 0;
};

const updateSessionCount = () => {
// update the number of sessions in DOM
  sessionCount++;
  sessionCountEl.innerHTML = `${sessionCount} / 4 sessions completed`;
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
  const takeShortBreak = () => {
    // update a short break message
    ringAlarm();
    removeEncouragingMsg();
    updateShortBreakMsg();
    intervals.interval2 = setInterval(() => {
      if (counter < 4 && !isPaused) {
        isShortBreak = true;
        updateCounterHTML();
        sec--;

        if (sec < 0) {
          sec = originalTime;
          clearInterval(intervals.interval2);
          isShortBreak = false;

          // update encouraging message
          updateEncouragingMsg();
          sessionCountEl.innerHTML = `${sessionCount} / 4 sessions completed`;

          intervals.interval1 = setInterval(updateCountDown, 2);
        }
      }
    }, 2);
  };

  const takeLongBreak = () => {
    ringAlarm();
    updateLongBreakMsg();
    intervals.interval3 = setInterval(() => {
      if (!isPaused) {
        isLongBreak = true;
        updateCounterHTML();
        sec--;

        if (sec < 0) {
          sec = originalTime;
          clearInterval(intervals.interval3);
          clearInterval(intervals.interval2);
          clearInterval(intervals.interval1);
          counter = 0;
          isLongBreak = false;
          removeEncouragingMsg();
          generateQuote();
          intervals.interval1 = setInterval(updateCountDown, 1000);
        }
      }
    }, 1000);
  };

  if (!isPaused) {
    updateCounterHTML();
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
        updateTotalSessionCount();
        takeLongBreak();
      }
      // ---------- end ----------------
    }
  }
};

const pomoTimer = () => {
  intervals.interval1 = setInterval(updateCountDown, 2);
};

btnPlay.addEventListener('click', () => {
  btnPlay.classList.add('active-state');
  btnPause.classList.remove('active-state');
  btnReset.classList.remove('active-state');

  isPaused = false;
  if (!quotePresent) {
    generateQuote();
  }
  quotePresent = true;
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

  if (isShortBreak) {
    sec = duration.shortBreak;
  }
  if (isLongBreak) {
    sec = duration.longBreak;
  }
  if (!isLongBreak && !isShortBreak) {
    sec = originalTime;
    generateQuote();
  }
  updateCounterHTML();
});

export default pomoTimer;
