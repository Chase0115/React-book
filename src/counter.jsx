import React from 'react';
import { useReducer } from 'react';

function reducer(state, action) {
  switch (action.type) {
    case 'INCREMENT' :
      return { value: state.value + 1};
    case 'DECREMENT' : 
      return state.value > 0 ? { value: state.value - 1} : {value: 0};
    default:
      return state;
  }
};

const Counter = () => {
  const [count, dispatch] = useReducer(reducer, {value: 0})
  return (
    <div>
      <p>Current Count Number is {count.value}</p>
      <button onClick={() => dispatch({ type: 'INCREMENT'})}>+1</button>
      <button onClick={() => dispatch({ type: 'DECREMENT'})}>-1</button>
    </div>
  )
};

export default Counter;