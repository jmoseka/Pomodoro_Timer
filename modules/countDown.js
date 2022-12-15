/* eslint-disable no-plusplus */
// Define a function to be executed repeatedly
let i = 10;
function doSomething() {
  i--;
  console.log('this is for every 10 seconds', i);
}

let j = 5;
function doSum() {
  j--;
  console.log('this is for every 5 seconds', j);
}

let interval = setInterval(doSomething, 1000);
// After 10 seconds, clear the interval
setTimeout(() => {
  clearInterval(interval);
}, 10000);

interval = setInterval(doSum, 100);
// After 10 seconds, clear the interval
setTimeout(() => {
  clearInterval(interval);
}, 500);

// const fiveInterval = setInterval(doSum, 500);

// setTimeout(() => {
//   clearInterval(fiveInterval);
// }, 500);
