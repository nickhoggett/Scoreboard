const homeScoreId = document.querySelector('#home-score');
const guestScoreId = document.querySelector('#guest-score');

const homeOne = document.querySelector('#homeOne');
const homeTwo = document.querySelector('#homeTwo');
const homeThree = document.querySelector('#homeThree');

const guestOne = document.querySelector('#guestOne');
const guestTwo = document.querySelector('#guestTwo');
const guestThree = document.querySelector('#guestThree');

const resetBtn = document.querySelector('#reset');
const startBtn = document.querySelector('#start')
const counter = document.querySelector('#countup');
const stopBtn = document.querySelector('#stop')
const timeText = document.querySelector('#time')

const minutesLabel = document.getElementById("minutes");
const secondsLabel = document.getElementById("seconds");


let homeScore = 0;
let guestScore = 0;

let interval = ''
let totalSeconds = 0


function handleHomePlusOne () {
    homeScore += 1;
    homeScoreId.innerHTML = homeScore;
    handleColor();
};

function handleHomePlusTwo () {
    homeScore += 2;
    homeScoreId.innerHTML = homeScore;
    handleColor()
};

function handleHomePlusThree () {
    homeScore += 3;
    homeScoreId.innerHTML = homeScore;
    handleColor()
};

function handleGuestPlusOne () {
    guestScore += 1;
    guestScoreId.innerHTML = guestScore;
    handleColor()
};

function handleGuestPlusTwo () {
    guestScore += 2;
    guestScoreId.innerHTML = guestScore;
    handleColor()
};

function handleGuestPlusThree () {
    guestScore += 3;
    guestScoreId.innerHTML = guestScore;
    handleColor()
};

function handleColor () {
    if (homeScore > guestScore)  {
        homeScoreId.classList.add("green");
        guestScoreId.classList.remove("green")
    } else if (guestScore > homeScore) {
        guestScoreId.classList.add("green");
        homeScoreId.classList.remove("green");
    } else {
        guestScoreId.classList.remove("green");
        homeScoreId.classList.remove("green");
    }
}

function handleReset () {
    homeScore = 0;
    guestScore = 0;
    homeScoreId.innerHTML = homeScore;
    guestScoreId.innerHTML = guestScore;
    minutesLabel.innerHTML = '00'
    secondsLabel.innerHTML = '00'
    totalSeconds = 0;
    handleColor();
    stopTime()
}

function runTimer() {
    ++totalSeconds;
    secondsLabel.innerHTML = pad(totalSeconds%60);
    minutesLabel.innerHTML = pad(parseInt(totalSeconds/60));
}

function pad(val)
{
    var valString = val + "";
    if(valString.length < 2)
    {
        return "0" + valString;
    }
    else
    {
        return valString;
    }
}

function startTime() {
    if (interval === '') {
        interval = setInterval(function() {runTimer()}, 1000)
        startBtn.disabled = true
    } 
}



function stopTime() {
    clearInterval(interval)
    startBtn.disabled = false
    interval = ''
}

homeOne.addEventListener('click', handleHomePlusOne)
homeTwo.addEventListener('click', handleHomePlusTwo)
homeThree.addEventListener('click', handleHomePlusThree)

guestOne.addEventListener('click', handleGuestPlusOne)
guestTwo.addEventListener('click', handleGuestPlusTwo)
guestThree.addEventListener('click', handleGuestPlusThree)

resetBtn.addEventListener('click', handleReset);
startBtn.addEventListener('click', startTime);
stopBtn.addEventListener('click', stopTime)
