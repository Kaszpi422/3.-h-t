//Beep
var beep = new Audio('beep.mp3')

//start-pause button
var button = document.getElementById('start').addEventListener('click', buttonClick);

function buttonClick() {
    document.getElementById('start').style.display = 'none'
    document.getElementById('pause').style.display = 'inline'
}
//start-pause button
var button = document.getElementById('pause').addEventListener('click', pauseButtonClick);

function pauseButtonClick() {
    document.getElementById('start').style.display = 'inline'
    document.getElementById('pause').style.display = 'none'
}

document.getElementById('pause').style.display = 'none'


//mainTimer
var minutes = document.getElementById('p_minutes').innerHTML;
var seconds = document.getElementById('p_seconds').innerHTML;

var beep = new Audio('beep.mp3')

function template() {
    document.getElementById('minutes').innerHTML = minutes;
    document.getElementById('seconds').innerHTML = seconds;
}
//start
function start() {
    buttonClick();

    minutes = document.getElementById('p_minutes').innerHTML - 1;
    seconds = 59;

    document.getElementById('minutes').innerHTML = minutes;
    document.getElementById('seconds').innerHTML = seconds;

    var minutes_interval = setInterval(minutesTimer, 60000)
    var seconds_interval = setInterval(secondsTimer, 1000)

    function minutesTimer() {
        minutes = minutes - 1;
        document.getElementById('minutes').innerHTML = minutes;
    }

    function secondsTimer() {
        seconds = seconds - 1;
        document.getElementById('seconds').innerHTML = seconds;

        if (seconds <= 0) {
            if (minutes <= 0) {
                clearInterval(minutes_interval);
                clearInterval(seconds_interval);

                beep.play()
            }
            seconds = 60
        }
    }
}
// pause
function pause() {
    pauseButtonClick();

    minutes = minutes;
    seconds = seconds;

    document.getElementById('minutes').innerHTML = minutes;
    document.getElementById('seconds').innerHTML = seconds;

    var minutes_clearinterval = clearInterval(minutesClearTimer, 0)
    var seconds_clearinterval = clearInterval(secondsClearTimer, 0)

    function minutesClearTimer() {
        document.getElementById('minutes').innerHTML = minutes;
    }

    function secondsClearTimer() {
        document.getElementById('seconds').innerHTML = seconds;
    }
}
// reset
var button = document.getElementById('reset').addEventListener('click', resetButtonClick);

function resetButtonClick() {

    minutes = document.getElementById('p_minutes').innerHTML - 1;
    seconds = 59;

    document.getElementById('minutes').innerHTML = minutes;
    document.getElementById('seconds').innerHTML = seconds;

    var minutes_clearinterval = clearInterval(minutesPauseTimer, 0);
    var seconds_clearinterval = clearInterval(secondsPauseTimer, 0);

}

// pomodoro switch
var button = document.getElementById('minusp').addEventListener('click', minuspButtonClick);

function minuspButtonClick() {

    document.getElementById('p_minutes').textContent = parseInt(p_minutes.innerHTML, 10) - 1;
}

var button = document.getElementById('plusp').addEventListener('click', pluspButtonClick);

function pluspButtonClick() {

    document.getElementById('p_minutes').textContent = parseInt(p_minutes.innerHTML, 10) + 1;
}
//short break switch
var button = document.getElementById('minuss').addEventListener('click', minussButtonClick);

function minussButtonClick() {

    document.getElementById('s_minutes').textContent = parseInt(s_minutes.innerHTML, 10) - 1;
}

var button = document.getElementById('pluss').addEventListener('click', plussButtonClick);

function plussButtonClick() {

    document.getElementById('s_minutes').textContent = parseInt(s_minutes.innerHTML, 10) + 1;
}
//long break switch
var button = document.getElementById('minusl').addEventListener('click', minuslButtonClick);

function minuslButtonClick() {

    document.getElementById('l_minutes').textContent = parseInt(l_minutes.innerHTML, 10) - 1;
}

var button = document.getElementById('plusl').addEventListener('click', pluslButtonClick);

function pluslButtonClick() {

    document.getElementById('l_minutes').textContent = parseInt(l_minutes.innerHTML, 10) + 1;
}