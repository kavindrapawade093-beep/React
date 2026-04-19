import React, { useState, useEffect } from "react";

function Todo() {

    const [task, setTask] = useState("");
    const [todos, setTodos] = useState([]);

    useEffect(() => {
        const saved = JSON.parse(localStorage.getItem("todos"));
        if (saved) {
            setTodos(saved);
        }
    }, []);

    useEffect(() => {
        localStorage.setItem("todos", JSON.stringify(todos));
    }, [todos]);

    const addTodo = () => {
        if (task !== "") {
            setTodos([...todos, task]);
            setTask("");
        }
    };

    const deleteTodo = (index) => {
        const newTodos = todos.filter((_, i) => i !== index);
        setTodos(newTodos);
    };

    return (
        <div className="card">
            <h1>Todo List</h1>

            <input
                value={task}
                onChange={(e) => setTask(e.target.value)}
                placeholder="Enter task"
            />

            <button onClick={addTodo}>Add</button>

            <ul>
                {todos.map((todo, index) => (
                    <li key={index}>
                        {todo}
                        <button onClick={() => deleteTodo(index)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Todo;