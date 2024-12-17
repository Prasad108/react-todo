import React, { useState, useContext } from "react";
import { TodoContext } from "../context/TodoContext";
import "./AddNewTodo.css";
import "./FormStyles.css"; // Use shared styles

function AddNewTodo() {
  const [task, setTask] = useState("");
  const [isCompleted, setIsCompleted] = useState(false);
  const { addTodo } = useContext(TodoContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (task.trim()) {
      addTodo({ task, isCompleted });
      setTask("");
      setIsCompleted(false);
    }
  };

  return (
    <div className="add-todo-container">
      <h2 className="add-todo-title">Add New Task</h2>
      <form onSubmit={handleSubmit} className="add-todo-form">
        <div className="form-group">
          <label htmlFor="task" className="form-label">Task Name:</label>
          <input
            type="text"
            id="task"
            name="task"
            value={task}
            onChange={(e) => setTask(e.target.value)}
            className="form-input"
            placeholder="Enter a new task"
          />
        </div>
        <div className="form-group checkbox-group">
          <label htmlFor="isCompleted" className="form-label">Completed:</label>
          <input
            type="checkbox"
            id="isCompleted"
            name="isCompleted"
            checked={isCompleted}
            onChange={(e) => setIsCompleted(e.target.checked)}
            className="form-checkbox"
          />
        </div>
        <button type="submit" className="submit-button">Add Todo</button>
      </form>
    </div>
  );
}

export default AddNewTodo;
