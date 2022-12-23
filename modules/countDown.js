/* eslint-disable no-plusplus */
let counter = 0;
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

function runIntervals() {
  // set the first interval to run every 1000 milliseconds (1 second)
  console.log('ROUND  ------------------------', counter);
  const interval1 = setInterval(() => {
    console.log('running interval 1');
  }, 1000);

  // after 10 seconds, clear the first interval
  setTimeout(() => {
    clearInterval(interval1);
    console.log('cleared interval 1');

    // set the second interval to run every 500 milliseconds (0.5 seconds)
    const interval2 = setInterval(() => {
      console.log('running interval 2');
    }, 1000);

    // after 5 seconds, clear the second interval
    setTimeout(() => {
      clearInterval(interval2);
      console.log('cleared interval 2');
      counter++;

      if (counter < 4) {
        runIntervals();
      } else {
        takeLongBreak();
      }
    }, 5000);
    /// ////////////////////
  }, 10000);

  // if the counter is less than 4, start the intervals again
}

const pause = false;

if (!pause) {
  runIntervals();
}

console.log(counter);