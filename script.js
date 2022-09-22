var header = document.getElementById('header');
let timerForm = document.getElementById('timerForm');
let goalForm = document.getElementById('test');
let goal = document.getElementById('goalarea');
let timer = document.getElementById('timer');
let alarm = document.getElementById('alarm');


timerForm.style.display='none';
goal.style.display='none';
timer.style.display='none'; 

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

function timeUpFunction() {
    alarm.play();
    alert('your time is up, good job');
    location.reload();
}

function checkFunction() {
    let radioButtonGroup = document.getElementsByName('timevalue');
    let checkedRadios = Array.from(radioButtonGroup).find(
        (radio) => radio.checked
    );
    switch (checkedRadios.value) {
        case '30 seconds':
            go69Function();
            break;
        case '15 minutes':
            goFunction();
            break;
        case '30 minutes':
            go2Function();
            break;
        case '1 hour':
            go3Function();
            break;
        case '2 hours':
            go4Function();
            break;
        case '3 hours':
            go5Function();
            break;
        default:
            alert('find cara and kill her');
    }
}

function goFunction() {
    let currentTime = Date.parse(new Date());
    timer.style.display='block';
    function getTimeRemaining(endtime) {
        let total = Date.parse(endtime) - Date.parse(new Date());
        let seconds = Math.floor (total/1000 % 60 );
        let minutes = Math.floor ((total / 1000/ 60) % 60 );
        let hours = Math.floor (total/(1000*60*60) % 24);
    
        return {
            total,
            hours,
            minutes,
            seconds
        };
    }
    
    function initializeTimer (id, endtime) {
        let timer = document.getElementById('timer');
        let hoursSpan = timer.querySelector('.hours');
        let minutesSpan = timer.querySelector('.minutes');
        let secondsSpan = timer.querySelector('.seconds');
    
        function updateTimer() {
            let t = getTimeRemaining(endtime);
            hoursSpan.innerHTML = ('0' + t.hours + ' hours');
            minutesSpan.innerHTML = (t.minutes + ' minutes');
            secondsSpan.innerHTML = (t.seconds + ' seconds remaining');
            if (t.total <= 0) {
                clearInterval(timeinterval);
                alert('time is up, good job');
                location.reload();
            }
        }
    
        updateTimer();
        let timeinterval = setInterval(updateTimer, 1000);
    
    }
    
    let hoursSpan = timer.querySelector('.hours');
    let minutesSpan = timer.querySelector('.minutes');
    let secondsSpan = timer.querySelector('seconds');
    let fifteenMinutes = 15;
    let deadline = new Date(currentTime + fifteenMinutes*60*1000);
    initializeTimer('timer', deadline);

}

function go2Function() {
    let currentTime = Date.parse(new Date());
    timer.style.display='block';
    function getTimeRemaining(endtime) {
        let total = Date.parse(endtime) - Date.parse(new Date());
        let seconds = Math.floor (total/1000 % 60 );
        let minutes = Math.floor ((total / 1000/ 60) % 60 );
        let hours = Math.floor (total/(1000*60*60) % 24);
    
        return {
            total,
            hours,
            minutes,
            seconds
        };
    }
    
    function initializeTimer (id, endtime) {
        let timer = document.getElementById('timer');
        let hoursSpan = timer.querySelector('.hours');
        let minutesSpan = timer.querySelector('.minutes');
        let secondsSpan = timer.querySelector('.seconds');
    
        function updateTimer() {
            let t = getTimeRemaining(endtime);
            hoursSpan.innerHTML = ('0' + t.hours + ' hours');
            minutesSpan.innerHTML = (t.minutes + ' minutes');
            secondsSpan.innerHTML = (t.seconds + ' seconds remaining');
            if (t.total <= 0) {
                clearInterval(timeinterval);
                alert('time is up, good job');
                location.reload();
            }
        }
    
        updateTimer();
        let timeinterval = setInterval(updateTimer, 1000);
    
    }
    
    let hoursSpan = timer.querySelector('.hours');
    let minutesSpan = timer.querySelector('.minutes');
    let secondsSpan = timer.querySelector('seconds');
    let fifteenMinutes = 30;
    let deadline = new Date(currentTime + fifteenMinutes*60*1000);
    initializeTimer('timer', deadline);
}

function go3Function() {
    let currentTime = Date.parse(new Date());
    timer.style.display='block';
    function getTimeRemaining(endtime) {
        let total = Date.parse(endtime) - Date.parse(new Date());
        let seconds = Math.floor (total/1000 % 60 );
        let minutes = Math.floor ((total / 1000/ 60) % 60 );
        let hours = Math.floor (total/(1000*60*60) % 24);
    
        return {
            total,
            hours,
            minutes,
            seconds
        };
    }
    
    function initializeTimer (id, endtime) {
        let timer = document.getElementById('timer');
        let hoursSpan = timer.querySelector('.hours');
        let minutesSpan = timer.querySelector('.minutes');
        let secondsSpan = timer.querySelector('.seconds');
    
        function updateTimer() {
            let t = getTimeRemaining(endtime);
            hoursSpan.innerHTML = ('0' + t.hours + ' hours');
            minutesSpan.innerHTML = (t.minutes + ' minutes');
            secondsSpan.innerHTML = (t.seconds + ' seconds remaining');
            if (t.total <= 0) {
                clearInterval(timeinterval);
                alert('time is up, good job');
                location.reload();
            }
        }
    
        updateTimer();
        let timeinterval = setInterval(updateTimer, 1000);
    
    }
    
    let hoursSpan = timer.querySelector('.hours');
    let minutesSpan = timer.querySelector('.minutes');
    let secondsSpan = timer.querySelector('seconds');
    let fifteenMinutes = 60;
    let deadline = new Date(currentTime + fifteenMinutes*60*1000);
    initializeTimer('timer', deadline);

}


function go69Function() {
    let currentTime = Date.parse(new Date());
    timer.style.display='block';
    function getTimeRemaining(endtime) {
        let total = Date.parse(endtime) - Date.parse(new Date());
        let seconds = Math.floor (total/1000 % 60 );
        let minutes = Math.floor ((total / 1000/ 60) % 60 );
        let hours = Math.floor (total/(1000*60*60) % 24);
    
        return {
            total,
            hours,
            minutes,
            seconds
        };
    }
    
    function initializeTimer (id, endtime) {
        let timer = document.getElementById('timer');
        let hoursSpan = timer.querySelector('.hours');
        let minutesSpan = timer.querySelector('.minutes');
        let secondsSpan = timer.querySelector('.seconds');
    
        function updateTimer() {
            let t = getTimeRemaining(endtime);
            hoursSpan.innerHTML = ('0' + t.hours + ' hours');
            minutesSpan.innerHTML = (t.minutes + ' minutes');
            secondsSpan.innerHTML = (t.seconds + ' seconds remaining');
            if (t.total <= 0) {
                clearInterval(timeinterval);
                timeUpFunction();
            }
        }
    
        updateTimer();
        let timeinterval = setInterval(updateTimer, 1000);
    
    }
    
    let hoursSpan = timer.querySelector('.hours');
    let minutesSpan = timer.querySelector('.minutes');
    let secondsSpan = timer.querySelector('seconds');
    let fifteenMinutes = 0.5;
    let deadline = new Date(currentTime + fifteenMinutes*60*1000);
    initializeTimer('timer', deadline);

}

function go4Function() {
    let currentTime = Date.parse(new Date());
    timer.style.display='block';
    function getTimeRemaining(endtime) {
        let total = Date.parse(endtime) - Date.parse(new Date());
        let seconds = Math.floor (total/1000 % 60 );
        let minutes = Math.floor ((total / 1000/ 60) % 60 );
        let hours = Math.floor (total/(1000*60*60) % 24);
    
        return {
            total,
            hours,
            minutes,
            seconds
        };
    }
    
    function initializeTimer (id, endtime) {
        let timer = document.getElementById('timer');
        let hoursSpan = timer.querySelector('.hours');
        let minutesSpan = timer.querySelector('.minutes');
        let secondsSpan = timer.querySelector('.seconds');
    
        function updateTimer() {
            let t = getTimeRemaining(endtime);
            hoursSpan.innerHTML = ('0' + t.hours + ' hours');
            minutesSpan.innerHTML = (t.minutes + ' minutes');
            secondsSpan.innerHTML = (t.seconds + ' seconds remaining');
            if (t.total <= 0) {
                clearInterval(timeinterval);
                alert('time is up, good job');
                location.reload();
            }
        }
    
        updateTimer();
        let timeinterval = setInterval(updateTimer, 1000);
    
    }
    
    let hoursSpan = timer.querySelector('.hours');
    let minutesSpan = timer.querySelector('.minutes');
    let secondsSpan = timer.querySelector('seconds');
    let fifteenMinutes = 120;
    let deadline = new Date(currentTime + fifteenMinutes*60*1000);
    initializeTimer('timer', deadline);

}

function go5Function() {
    let currentTime = Date.parse(new Date());
    timer.style.display='block';
    function getTimeRemaining(endtime) {
        let total = Date.parse(endtime) - Date.parse(new Date());
        let seconds = Math.floor (total/1000 % 60 );
        let minutes = Math.floor ((total / 1000/ 60) % 60 );
        let hours = Math.floor (total/(1000*60*60) % 24);
    
        return {
            total,
            hours,
            minutes,
            seconds
        };
    }
    
    function initializeTimer (id, endtime) {
        let timer = document.getElementById('timer');
        let hoursSpan = timer.querySelector('.hours');
        let minutesSpan = timer.querySelector('.minutes');
        let secondsSpan = timer.querySelector('.seconds');
    
        function updateTimer() {
            let t = getTimeRemaining(endtime);
            hoursSpan.innerHTML = ('0' + t.hours + ' hours');
            minutesSpan.innerHTML = (t.minutes + ' minutes');
            secondsSpan.innerHTML = (t.seconds + ' seconds remaining');
            if (t.total <= 0) {
                clearInterval(timeinterval);
                alert('time is up, good job');
                location.reload();
            }
        }
    
        updateTimer();
        let timeinterval = setInterval(updateTimer, 1000);
    
    }
    
    let hoursSpan = timer.querySelector('.hours');
    let minutesSpan = timer.querySelector('.minutes');
    let secondsSpan = timer.querySelector('seconds');
    let fifteenMinutes = 180;
    let deadline = new Date(currentTime + fifteenMinutes*60*1000);
    initializeTimer('timer', deadline);

}
