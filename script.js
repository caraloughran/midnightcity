var header = document.getElementById('header');
let timerForm = document.getElementById('timerForm');
let goalForm = document.getElementById('test');
let goal = document.getElementById('goalarea');
let currentTime = Date.parse(new Date());
let timer = document.getElementById('timer');

timerForm.style.display='none';
goal.style.display='none';

header.addEventListener ("click", langFunction);

function langFunction() {
    header.innerHTML = "kia ora, haere mai";
}

function handleForm(event) {event.preventDefault();}

function testFunction() {
    var userInput = document.getElementById('goal1').value;
    document.getElementById('output').textContent = userInput;
}

function timerFunction () {
    timerForm.style.display='block';
}

function removeForms () {
    timerForm.style.display='none';
    goalForm.style.display='none';
}

function showGoal () {
    goal.style.display='block';
}

timerSubmit.addEventListener ("click", removeForms);
timerSubmit.addEventListener ("click", showGoal);

function getTimeRemaining(endtime) {
    let total = Date.parse(endtime) - Date.parse(new Date());
    let seconds = Math.floor (total/1000 % 60 );
    let minutes = Math.floor (total/1000/0 % 60 );
    let hours = Math.floor (total/(1000*60*60) % 24);

    return {
        total,
        hours,
        minutes,
        seconds
    };
}

function updateTimer() {
    let t = getTimeRemaining(endtime);
    hoursSpan.innerHTML = ('0' + t.hours).slice(-2);
    minutesSpan.innerHTML = ('0' + t.minutes).slice(-2);
    secondsSpan.innerHTML = ('0' + t.seconds).slice(-2);
    if (t.total <= 0) {
        clearInterval(timeinterval);
    }
}

updateTimer();
let timeinterval = setInterval(updateTimer,1000);

let hoursSpan = timer.querySelector('.hours');
let minutesSpan = timer.querySelector('.minutes');
let secondsSpan = timer.querySelector('seconds');

let fifteenMinutes = 15;
let fifteenDeadline = new Date(currentTime + fifteenMinutes*60*1000);
initializeTimer('timer', fifteenDeadline);