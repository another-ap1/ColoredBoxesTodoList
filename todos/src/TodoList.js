import React, {useState} from "react";
import NewTodoForm from "./NewTodoForm";
import Todo from "./Todo";

const TodoList = () => {
    const [todos, setTodos] = useState([])
    const add = newTodo =>{
        setTodos(todos => [...todos, newTodo]);
    }

    const remove = id => {
        setTodos(todos => todos.filter(todo => todo.id !== id));
    }

    const displayTodoList = todos.map(t => (
        <Todo 
            remove={remove}
            key={t.id}
            id={t.id}
            todo={t.todo}
        />
    ))

    return (
        <div>
            <NewTodoForm addTodo={add} />
            <ul>{displayTodoList}</ul>
        </div>
    )
}

export default TodoList;