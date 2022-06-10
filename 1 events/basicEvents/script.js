var btn = document.getElementById("btnClick");
var mainDiv = document.querySelector("header div");

function onBtnClick() {
    //btn.style.backgroundColor = "lightcoral";
    mainDiv.style.backgroundColor = "rgb(" + Math.floor(Math.random() * 255) 
    + "," + Math.floor(Math.random() * 255) 
    + "," + Math.floor(Math.random() * 255) + ")";
}

// Option 1
// btn.onclick = onBtnClick();

// Option 2
btn.addEventListener('click', onBtnClick);