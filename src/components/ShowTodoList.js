import React, { useContext } from "react";
import Checkbox from "./Checkbox";
import { TodoContext } from "../context/TodoContext";
import "./ShowTodoList.css";

function ShowTodoList() {
  const { todoList, toggleTodo, deleteTodo, setEditingTodo } = useContext(TodoContext);

  return (
    <div className="todo-list-container">
      <h1 className="todo-list-title">Todo List</h1>
      <ul className="todo-list">
        {todoList.map((todo) => (
          <li key={todo.id} className={`todo-item ${todo.isCompleted ? "completed" : ""}`}>
            <div className="todo-item-content">
              <div className="todo-checkbox">
                <Checkbox
                  label={todo.task}
                  isChecked={todo.isCompleted}
                  onChange={() => toggleTodo(todo.id)}
                />
              </div>
              <div className="todo-actions">
                <button className="todo-button edit-button" onClick={() => setEditingTodo(todo)}>
                  Edit
                </button>
                <button className="todo-button delete-button" onClick={() => deleteTodo(todo.id)}>
                  Delete
                </button>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ShowTodoList;
