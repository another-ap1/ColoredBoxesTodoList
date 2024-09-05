import React, {useState} from "react";
import {v4 as uuid} from 'uuid';

const NewTodoForm = ({addTodo}) => {
    const [todo, setTodo] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        addTodo({todo, id: uuid()});
        setTodo("");
    }

    const handleChange = (e) => {
        setTodo(e.target.value);
    }

    return(
        <div>
            <form onSubmit={handleSubmit}>
                <label htmlFor="todo">What do you need to do?</label>
                <input
                    type="text"
                    id="todo"
                    name="todo"
                    value={todo}
                    onChange={handleChange}
                />
                <button>Lets do it!</button>
            </form>
        </div>
    )
}

export default NewTodoForm;