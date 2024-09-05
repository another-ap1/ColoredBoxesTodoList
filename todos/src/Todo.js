import React from "react";

const Todo = ({todo, id, remove}) => {

    const handleDelete = () => remove(id);

    return(
        <div>
            <li>{todo}</li><button onClick={handleDelete}>Completed</button>
        </div>
    )
}

export default Todo;