var list = document.getElementById('todoList');

var itemCount = 0;


// Extended function to add elements taken from input
function createNewListElement(id, title) {
    var newListElement = document.createElement('li');
    newListElement.appendChild(document.createTextNode(title));
    newListElement.id = id;

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

// GET
function getTODOListFromBackend() {
    var http = new XMLHttpRequest();
    http.onreadystatechange = function() {
        if(this.readyState === 4) {
            console.log('Response received');
            if(this.status === 200) {
                var response = JSON.parse(this.responseText);
                for(var i=0; i<response.length; i++) {
                    createNewListElement(response[i].id, response[i].title);
                }
            }
        } else {
            console.log('Request failed');
        }
    }
    http.open('GET', 'https://jsonplaceholder.typicode.com/todos', true);
    http.send();
}

getTODOListFromBackend();

// POST
function createTODOListAtBackend() {
    var http = new XMLHttpRequest();
    http.onreadystatechange = function() {
        if(this.readyState === 4) {
            console.log('Response received');
            if(this.status === 200) {
                var response = JSON.parse(this.responseText);
                for(var i=0; i<response.length; i++) {
                    createNewListElement(response[i].id, response[i].title);
                }
            }
        } else {
            console.log('Request failed');
        }
    }
    http.open('POST', 'https://jsonplaceholder.typicode.com/todos', true);
    http.onreadystatechange = function() {
        if(this.readyState === 4) {
            if(this.status === 201) {
                console.log('Added item to the list');
            } else {
                console.log('Call failed');
            }
        }
    }
    var object = JSON.stringify({
        "userId": 1,
        "title": "delectus aut autem",
        "completed": false
    });
    http.send(obj);
}