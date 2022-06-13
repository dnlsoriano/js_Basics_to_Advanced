var black = document.getElementById('colorBlack');
var red = document.getElementById('colorRed');
var purple = document.getElementById('colorPurple');
var brown = document.getElementById('colorBrown');
var pink = document.getElementById('colorPink');

var timeBtn = document.getElementById('timeBtn'); 
var heartBtn = document.getElementById('heartRateBtn');

var img = document.getElementById('watchImg'); 
var image = document.getElementById('image');

var watchScreen = document.getElementById('watchScreen');

var showClock;
var showHeartRate;

var beats = document.createElement('i')
beats.id = 'beats';
beats.className = 'fa-solid fa-heart-pulse';

var bpm = document.createElement('p');
bpm.innerText = Math.floor(Math.random() * (86 - 50) + 50);

window.onload = function() {
    showClock = setInterval(showTime, 1000);
}

function clock() {
    clearInterval(showHeartRate);
    showClock = setInterval(showTime, 1000);
}

function showTime() {
    watchScreen.innerHTML = new Date().toLocaleTimeString().replace("AM","").replace("PM","");
}

function hearRate() {
    clearInterval(showClock);
    watchScreen.innerHTML = '';
    watchScreen.appendChild(beats);
    showHeartRate = setInterval(showBeats, 1000);
    watchScreen.appendChild(bpm);
}

function showBeats() {
    bpm.innerText = Math.floor(Math.random() * (86 - 50) + 50);
}

heartBtn.addEventListener('click', function() {
    hearRate();
})

timeBtn.addEventListener('click', function() {
    clock();
})

function changeColor(color) {
    document.getElementById('watchImg').src = 'images/' + color + '.png?t=' + new Date().getTime();
}

black.addEventListener('click', function() {
    changeColor('black');
})
red.addEventListener('click', function() {
    changeColor('red');
})
purple.addEventListener('click', function() {
    changeColor('purple');
})
brown.addEventListener('click', function() {
    changeColor('brown');
})
pink.addEventListener('click', function() {
    changeColor('pink');
})