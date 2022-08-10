import React from 'react';
import { useState } from 'react';
import './todoItem.scss';


const TodoItem = ({item, onRemove}) => {
  const [checked, setChecked] = useState(false)
  const {id, text} = item;

  return (
    <div className="todoItem">
      <div className={checked? "checkbox checked": "checkbox"} >
        <input type="checkbox" onClick={() => {
          setChecked(!checked);
        }}/>
        <div className="text">{text}</div>
      </div>
      <button className="remove" onClick={() => onRemove(id)}>
        ❌
      </button>
    </div>
  );
};

export default TodoItem;
