/* 
onclick 	The event occurs when the user clicks on an element
oncontextmenu 	The event occurs when the user right-clicks on an element to open a context menu
ondblclick 	The event occurs when the user double-clicks on an element
onmousedown 	The event occurs when the user presses a mouse button over an element
onmouseenter 	The event occurs when the pointer is moved onto an element
onmouseleave 	The event occurs when the pointer is moved out of an element
onmousemove 	The event occurs when the pointer is moving while it is over an element
onmouseout 	The event occurs when a user moves the mouse pointer out of an element, or out of one of its children
onmouseover 	The event occurs when the pointer is moved onto an element, or onto one of its children
onmouseup 	The event occurs when a user releases a mouse button over an element 
*/

var btn = document.getElementById('button');

btn.addEventListener('mousedown', function() {
    console.log('Mouse down event');
});

btn.addEventListener('mouseup', function() {
    console.log('Mouse up event');
});

btn.addEventListener('click', function() {
    console.log('Click event');
})

btn.addEventListener('dbclick', function() {
    console.log('Double click event');
});

var over = document.getElementById('over');

over.addEventListener('mouseover', function() {
    var count = document.querySelector("#over p");
    count.innerHTML = parseInt(count.innerHTML) + 1;
    console.log('Mouse over event');
    
});

var enter = document.getElementById('enter');

enter.addEventListener('mouseenter', function() {
    var count = document.querySelector("#enter p");
    count.innerHTML = parseInt(count.innerHTML) + 1;
    console.log('Mouse enter event');
    
});

var move = document.getElementById('move');

move.addEventListener('mousemove', function() {
    var count = document.querySelector("#move p");
    count.innerHTML = parseInt(count.innerHTML) + 1;
    console.log('Mouse move event');
    
});