import React, {useCallback} from 'react';
import TodoItem from './todoItem';
import './todoList.scss';
import {List} from 'react-virtualized';

const TodoList = ({ todos, onRemove }) => {
  const rowRenderer = useCallback(
    ({ index, key, style }) => {
      const todo = todos[index];
      return (
        <TodoItem
          todo={todo}
          key={key}
          onRemove={onRemove}
          style={style}/>
      )
    },
    [onRemove, todos],
  )
  return (
    <List className="todoList"
      width={512}
      height={513}
      rowCount={todos.length}
      rowHeight={57}
      rowRenderer={rowRenderer}
      list={todos}
      style={{ outline: 'none' }}/>
  );
};

export default TodoList;
