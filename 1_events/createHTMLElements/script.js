var list = document.getElementById('todoList');
var btn = document.getElementById('addItem');
var input = document.getElementById('todoInput');

var itemCount = 0;

// Basic function to add secuencial elements
/* function createNewListElement() {
    var newListElement = document.createElement('li');
    newListElement.appendChild(document.createTextNode('List Item ' + itemCount));
    newListElement.id = "item" + itemCount;
    list.appendChild(newListElement);
    itemCount++;
}

btn.addEventListener('click', function() {
    createNewListElement();
}); */

btn.addEventListener('click', function() {
    createNewListElement(input.value);
    input.value = '';
});

// Extended function to add elements taken from input
function createNewListElement(todo) {
    var newListElement = document.createElement('li');
    newListElement.appendChild(document.createTextNode(todo));
    newListElement.id = "item" + itemCount;

    var trashIcon =  document.createElement('i');
    trashIcon.id = itemCount;
    trashIcon.className = 'fa-solid fa-trash';

    newListElement.appendChild(trashIcon);
    list.appendChild(newListElement);

    list>newListElement.appendChild(trashIcon).addEventListener('click', removeItem);

    itemCount++;
}

function removeItem() {
    this.parentNode.remove();
}
