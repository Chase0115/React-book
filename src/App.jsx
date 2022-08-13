import './App.css';
import TodoTemplate from './components/todoTemplate';
import TodoInput from './components/todoinput';
import TodoList from './components/todoList';
import { useState, useRef, useCallback, useReducer } from 'react';

function createBulkTodos() {
  const array = [];
  for (let i = 1; i <= 2500; i++) {
    array.push({
      id: i,
      text: `Todo ${i}`,
      checked: false,
    });
  }
  return array;
}

function todoReducer(todos, action) {
  switch(action.type) {
    case 'INSERT':
      return todos.concat(action.todo);
    case 'REMOVE':
      return todos.filter(todo => todo.id !== action.id);
    default:
      return todos;
  }
}

function App() {
  const [todos, dispatch] = useReducer(todoReducer, undefined, createBulkTodos);

  const nextId = useRef(2501);

  const onAdd = useCallback(
    (text) => {
      const todo = { 
        id: nextId.current, 
        text, 
        checked: false };
      dispatch({type: 'INSERT', todo});
      nextId.current += 1;
    },
    [],
  );

  const onRemove = useCallback(
    (id) => {
      dispatch({type: 'REMOVE', id});
    },
    [],
  );

  return (
    <section>
      <TodoTemplate>
        <TodoInput onAdd={onAdd} />
        <TodoList todos={todos} onRemove={onRemove} />
      </TodoTemplate>
    </section>
  );
}

export default App;
