var username = document.getElementById("username");
var password = document.getElementById("password");
var submitBtn = document.getElementById("submitBtn");

username.addEventListener('input', function() {
    console.log(event.target.value);
});

username.addEventListener('focus', function() {
    console.log("username focused");
});

username.addEventListener('blur', function() {
    console.log("username lost focus");
});

submitBtn.addEventListener('click', function() {
    event.preventDefault();
});