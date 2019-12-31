
var todoInput = document.getElementById('todo-input');
var listTitle = document.getElementById('list-title');
var todoList = document.getElementById('todoList');

todoInput.value = "";
listTitle.innerHTML = "Nothing To Do";

function addItem() {
    var value = todoInput.value;

    if (!value) return alert('please enter a todo.');
    
    var todoLi = document.createElement('li');
    todoLi.innerHTML = value;
    todoList.appendChild(todo);
    listTitle.innerHTML = "";
    todoInput.value = "";
}
