"use strict";
window.onload = function () {
    document.getElementById('todo-input').nodeValue = "";
    document.getElementById('list-title').innerHTML = "Nothing To Do";
}

function additem() {
    var inputwtd = document.getElementById('todo-input');
    var listitem = document.getElementById('to-do');
    var x = "";
    x = inputwtd.value;

    if (x.length === 0) {
        alert('insert a work which want to do,please')
    } else {
        let todo = document.createElement('li');
        todo.innerHTML = x;
        listitem.appendChild(todo);
        x = "";
        document.getElementById('list-title').innerHTML = "";
        document.getElementById('todo-input').value = "";
    }
}
