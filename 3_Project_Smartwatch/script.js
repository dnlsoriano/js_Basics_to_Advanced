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

function clock() {
    setTimeout(function() {
        watchScreen.innerHTML = new Date().toLocaleTimeString();
        clock();
    }, 1000)
}
clock();

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