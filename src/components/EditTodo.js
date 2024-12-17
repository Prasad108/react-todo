import React, { useState, useContext } from "react";
import { TodoContext } from "../context/TodoContext";
import "./AddNewTodo.css"; // Reusing the same CSS file
import "./FormStyles.css"; // Use shared styles

function EditTodo() {
  const { editingTodo, updateTodo } = useContext(TodoContext);
  const [task, setTask] = useState(editingTodo.task || "");
  const [isCompleted, setIsCompleted] = useState(editingTodo.isCompleted || false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (task.trim()) {
      updateTodo({ ...editingTodo, task, isCompleted });
    }
  };

  return (
    <div className="add-todo-container"> {/* Same class as AddNewTodo */}
      <h2 className="add-todo-title">Edit Task</h2>
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
        <button type="submit" className="submit-button">Save</button>
      </form>
    </div>
  );
}

export default EditTodo;
