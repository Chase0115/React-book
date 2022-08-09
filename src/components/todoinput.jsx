import React from 'react';
import './todoInput.scss';

const TodoInput = () => {
  return (
    <form className="TodoInput">
      <input type="text" placeholder="What to do?" onChange={(e)=>{
        console.log(e.target.value)
      }}/>
      <button type="submit">
        +
      </button>
    </form>
  )
}

export default TodoInput;