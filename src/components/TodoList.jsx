import React from 'react';
import TodoItem from './TodoItem';

const TodoList = ({ todos, handleCheckbox, handleEdit, handleDelete, showFinished }) => {
  return (
    <div className="todos">
      {todos.length === 0 && <div className='m-5'>No Todos to display</div>}
      {todos.map(item => (
        <TodoItem
          key={item.id}
          item={item}
          handleCheckbox={handleCheckbox}
          handleEdit={handleEdit}
          handleDelete={handleDelete}
          showFinished={showFinished}
        />
      ))}
    </div>
  );
};

export default TodoList;
