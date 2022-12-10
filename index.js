const timerEl = document.getElementById('time');
const btnPlay = document.getElementById('play');
const btnPause = document.getElementById('pause');
const btnReset = document.getElementById('reset');


const startMinutes = 25;
let time = startMinutes * 60; /// total seconds in 25minutes



const updateCountDown = () => {
    var d = new Date(); //get current time
    var seconds = d.getMinutes() * 60 + d.getSeconds(); //convet current mm:ss to seconds for easier caculation, we don't care hours.
    var fiveMin = 60 * 5; //five minutes is 300 seconds!
    var timeleft = fiveMin - seconds % fiveMin; // let's say now is 01:30, then current seconds is 60+30 = 90. And 90%300 = 90, finally 300-90 = 210. That's the time left!
    var result = '0' + parseInt(timeleft / 60) + ':' + timeleft % 60; //formart seconds back into mm:ss 
    timerEl.innerHTML = result;
}

setInterval(updateCountDown(), 1000)
