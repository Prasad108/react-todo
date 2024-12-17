import React, { createContext, useState } from "react";

export const TodoContext = createContext();

export function TodoProvider({ children }) {
  const [todoList, setTodoList] = useState([
    {
      id: 1,
      task: "Buy groceries",
      isCompleted: false,
      dueDate: "2024-12-15",
      priority: "High",
      tags: ["shopping", "errands"],
    },
    {
      id: 2,
      task: "Finish project report",
      isCompleted: false,
      dueDate: "2024-12-20",
      priority: "Medium",
      tags: ["work", "deadline"],
    },
  ]);

  const addTodo = ({ task, isCompleted }) => {
    const newTodo = {
      id: todoList.length + 1,
      task,
      isCompleted,
      dueDate: null,
      priority: "Low",
      tags: [],
    };
    setTodoList([...todoList, newTodo]);
  };

  const toggleTodo = (id) => {
    setTodoList(
      todoList.map((todo) =>
        todo.id === id ? { ...todo, isCompleted: !todo.isCompleted } : todo
      )
    );
  };

  const deleteTodo = (id) => {
    setTodoList(todoList.filter((todo) => todo.id !== id));
  };
  const [editingTodo, setEditingTodo] = useState(null);

  const updateTodo = (updatedTodo) => {
    setTodoList(todoList.map((todo) => (todo.id === updatedTodo.id ? updatedTodo : todo)));
    setEditingTodo(null); // Exit edit mode
  };

  return (
    <TodoContext.Provider value={{ todoList, addTodo, toggleTodo, deleteTodo, editingTodo, setEditingTodo, updateTodo}}>
      {children}
    </TodoContext.Provider>
  );
}
