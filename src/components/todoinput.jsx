import React, {useState, useCallback}from 'react';
import './todoInput.scss';

const TodoInput = ({onAdd}) => {
  const [value, setValue] = useState('');
  const onChange = useCallback(e => {
    setValue(e.target.value)
  }, []);

  const onSubmit = useCallback(e => {
    e.preventDefault();
    onAdd(value);
    setValue('');
  }, [onAdd, value])

  return (
    <form className="TodoInput" onSubmit={onSubmit}>
      <input type="text" placeholder="What to do?" value={value} onChange={onChange}/>
      <button type="submit">
        +
      </button>
    </form>
  )
}

export default TodoInput;