let todoList = {
    todos: [],
    displayTodos: function() {
        if (this.todos.length === 0) {
            console.log('Your todo list is empty!')
        } else {
            console.log('My Todos:')
            for(let i = 0; i < this.todos.length; i++) {
                if(this.todos[i].completed === true) {
                    console.log('(x)', this.todos[i].todoText);
                } else {
                    console.log('()', this.todos[i].todoText)
                }
            }
        }
    },
    addTodo: function(todoText) {
        this.todos.push({
            todoText: todoText,
            completed: false
        })
        this.displayTodos()
    },
    toggleAll: function() {
        let totalTodos = this.todos.length
        let completedTodos = 0
    
        
        this.todos.forEach( function(todo) {
            if (todo.completed === true) {
                completedTodos++
            }
            
        })

        this.todos.forEach(function(todo) {
            if (completedTodos === totalTodos) {
                todo.completed = false
            } else {
                todo.completed = true
            }
        })
    }
}

    let handlers = {
        displayTodos: function() {
        todoList.displayTodos()
    },
        toggleAll: function() {
        todoList.toggleAll()
    },
    addTodo: function() {
        let addTodoTextInput = document.getElementById('addTodoTextInput')
        todoList.addTodo(addTodoTextInput.value)
        addTodoTextInput.value = ''
    },
    changeTodo: function() {
        let changeTodoPositionInput = document.getElementById('changeTodosPositionInput')
        let changeTodoTextInput = document.getElementById('changeTodoTextInput')
        todoList.changeTodo(changeTodoPositionInput.valueAsNumber, changeTodoTextInput.value)
        changeTodoPositionInput.value = ''
        changeTodoTextInput.value = ''
        view.displayTodos()
    },
    deleteTodo: function(position) {
        todoList.deleteTodo(position)
        view.displayTodos()
    },
    toggleCompleted: function() {
        let toggleCompletedPositionInput = document.getElementById('toggleCompleted')
        todoList.toggleCompleted(toggleCompletedPositionInput.valueAsNumber)
        toggleCompletedPositionInput.value = ''
        view.displayTodos()
    },
    toggleAll: function() {
        todoList.toggleAll()
    }
        
}

let view = {
    displayTodos: function() {
        let todoUl = document.querySelector('ul')
        todoUl.innerHTML = ''
        
        
       
        todoList.todos.forEach(function(todo, position){
             let todoLi = document.createElement('li')
             let todoTextWithCompletion = ''
            
            if(todo.completed === true) {
                todoTextWithCompletion = '(x) ' + todo.todoText
            } else {
                todoTextWithCompletion = '( ) ' + todo.todoText
            }
            
        todoLi.id = position
        todoLi.textContent = todoTextWithCompletion
        todoLi.appendChild(this.createDeleteButton())
        todoUl.appendChild(todoLi)
            
        }, this)
    },
    
    createDeleteButton: function() {
        let deleteButton = document.createElement('button')
        deleteButton.textContent = 'Delete'
        deleteButton.className = 'deleteButton'
        return deleteButton
    },
    setUpEventListeners: function(){
        let todosUl = document.querySelector('ul')
        
        todosUl.addEventListener('click', function(event){
            
            let elementClicked = event.target
            
            if( elementClicked.className === 'deleteButton') {
                handlers.deleteTodo(parseInt(elementClicked.parentNode.id))
                }
            })
        }
    }

view.setUpEventListeners()

