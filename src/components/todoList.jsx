import React from 'react';
import TodoItem from './todoItem';

const TodoList = ({todos, onRemove}) => {

  return (
    <div className="todoList">
      {todos.map((item) => (
        <TodoItem item={item} onRemove={onRemove} key={item.id}/>
      ))}
    </div>
  )
}

export default TodoList;