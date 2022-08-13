import React from 'react';
import { useState } from 'react';
import './todoItem.scss';

const TodoItem = ({ todo, onRemove, style }) => {
  const [checked, setChecked] = useState(false);
  const { id, text } = todo;

  return (
    <div className="todoItem-virtualized" style={style}>
      <div className="todoItem">
        <div className={checked ? 'checkbox checked' : 'checkbox'}>
          <input
            type="checkbox"
            onClick={() => {
              setChecked(!checked);
            }}
          />
          <div className="text">{text}</div>
        </div>
        <button className="remove" onClick={() => onRemove(id)}>
          ❌
        </button>
      </div>
    </div>
  );
};

export default React.memo(TodoItem);
