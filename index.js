const homeScoreId = document.querySelector('#home-score');
const guestScoreId = document.querySelector('#guest-score');

const homeOne = document.querySelector('#homeOne');
const homeTwo = document.querySelector('#homeTwo');
const homeThree = document.querySelector('#homeThree');

const guestOne = document.querySelector('#guestOne');
const guestTwo = document.querySelector('#guestTwo');
const guestThree = document.querySelector('#guestThree');

const resetBtn = document.querySelector('#reset-btn');
const startTimeBtn = document.querySelector('#start-timer');
const counter = document.querySelector('#countup');

let homeScore = 0;
let guestScore = 0;

let seconds = 0
let timer = setInterval(upTimer, 1000);

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
    counter.innerHTML = "00.00.00";
    seconds = 0;
    handleColor();
}



function upTimer() {
    ++seconds;

    let hour = Math.floor(seconds / 3600);
    let minute = Math.floor((seconds - hour * 3600) / 60);
    let updSecond = seconds - (hour * 3600 + minute * 60);

    document.getElementById("countup").innerHTML = hour + ":" + minute + ":" + updSecond;
}

homeOne.addEventListener('click', handleHomePlusOne)
homeTwo.addEventListener('click', handleHomePlusTwo)
homeThree.addEventListener('click', handleHomePlusThree)

guestOne.addEventListener('click', handleGuestPlusOne)
guestTwo.addEventListener('click', handleGuestPlusTwo)
guestThree.addEventListener('click', handleGuestPlusThree)

resetBtn.addEventListener('click', handleReset);
startTimeBtn.addEventListener('click', upTimer);