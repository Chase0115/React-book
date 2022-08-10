import "./App.css";
import TodoTemplate from "./components/todoTemplate";
import TodoInput from "./components/todoinput";
import TodoList from "./components/todoList";
import { useState, useRef, useCallback } from "react";

function App() {
  const [todos, setTodos] = useState([
    {id: 1, text: 'react-basic', check: true},
    {id: 2, text: 'react-inter', check: true},
    {id: 3, text: 'react-adv', check: true}
  ])

  const nextId = useRef(4);

  const onAdd = useCallback((text) => {
    const todo = {id: nextId, text: text, check: true};
    setTodos(todos.concat(todo));
    nextId.current += 1;
    }, [todos])
  
  const onRemove = useCallback((id) => {
    setTodos(todos.filter(todo => todo.id !== id))
  }, [todos])


  return (
    <section>
      <TodoTemplate>
        <TodoInput onAdd={onAdd}/>
        <TodoList todos={todos} onRemove={onRemove} />
      </TodoTemplate>
      
    </section>
  );
}

export default App;
