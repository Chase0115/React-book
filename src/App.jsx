import logo from "./logo.svg";
import "./App.css";
import TodoTemplate from "./components/todoTemplate";
import TodoInput from "./components/todoinput";
import TodoItem from "./components/todoItem";
import TodoList from "./components/todoList";
import { useState } from "react";

function App() {
  return (
    <section>
      <TodoTemplate>
        <TodoInput/>
        <TodoList/>
      </TodoTemplate>
      
    </section>
  );
}

export default App;
