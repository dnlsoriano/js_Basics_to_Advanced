$(document).ready(function() {
    console.log('DOM Tree Ready');

    var list = $('#todoList');

    function createNewListElement(id, title) {
        var newListElement = document.createElement('li');
        var newListElement = "<li id='" + id + "'>" + title + "</li>"
        list.append(newListElement);
        // remove example
        //$('li').first().remove();
        //$('li').last().remove();
        //$('li').eq(2).remove();
    }

    function removeItem() {
        this.parentNode.remove();
    }

    // GET
    function getTODOListFromBackend() {
        $.get('https://jsonplaceholder.typicode.com/todos', function(data, status) {
            // JQuery by default returns json objects and json arrays
            var response = data;
            for(var i=0; i<50; i++) {
                createNewListElement(response[i].id, response[i].title);
            }
        })
    }

    getTODOListFromBackend();

    $('#todoList').on('click', 'li', function(event) {
        $(this).css('text-decoration-line', 'line-through');
    });

});