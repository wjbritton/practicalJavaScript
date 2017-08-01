var todos = ['item 1', 'item 2', 'item 3']

function displayTodos(todos) {
    console.log('My todos:', todos);
}

function addTodo(todo) {
    todos.push(todo);
    displayTodos();
}

function changeTodos(position, newValue) {
    todos[position] = newValue;
    displayTodos();
}

function deleteTodo(position) {
    todos.splice(position, 1);
    displayTodos();
}