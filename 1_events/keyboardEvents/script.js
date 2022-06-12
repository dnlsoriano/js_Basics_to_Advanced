
// Keydown-> triggered when any key is pressed
document.body.addEventListener('keydown', function(e) {
    var keyCode = e.keyCode;
    console.log(keyCode + " was pressed");
})

// Keyup-> triggered when any key is released
document.body.addEventListener('keyup', function(e) {
    var keyCode = e.keyCode;
    console.log(keyCode + " was released");
})

// Keypress-> triggered when any key, exept Shift, Function or Capslock is in pressed position
document.body.addEventListener('keypress', function(e) {
    var keyCode = e.keyCode;
    console.log("key pressed -> " + keyCode);
})