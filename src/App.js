import React, { useContext } from "react";

import './App.css';
import AppHeader from "./components/AppHeader";
import ShowTodoList from "./components/ShowTodoList";
import AddNewTodo from "./components/AddNewTodo";
import EditTodo from "./components/EditTodo"
import { TodoContext } from "./context/TodoContext";


function App() {
  const { editingTodo } = useContext(TodoContext); // Access context values

  return (
    <div>
      <AppHeader />
      {editingTodo ? <EditTodo /> : <AddNewTodo />}
      <ShowTodoList />
    </div>
  );
}

export default App;