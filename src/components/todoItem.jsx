import React from 'react';
import './todoItem.scss'

const TodoItem = () => {
  return (
    <div className="todoItem">
      <div className="checkbox">
        <input type="checkbox"/>
        <div className="text">Study</div>
      </div>
      <button className="remove">
        ❌
      </button>
    </div>
  );
};

export default TodoItem;
