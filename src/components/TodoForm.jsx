import React from 'react';

const TodoForm = ({ todo, handleChange, handleAdd }) => {
  return (
    <div className="addTodo my-5 flex flex-col gap-4">
      <h2 className='text-2xl text-center font-bold'>Add a Todo</h2>
      <div className="flex">
        <input onChange={handleChange} value={todo} type="text" className='w-full rounded-full px-5 py-1 bg-slate-200 hover:bg-slate-300 ml-9' />
        <button onClick={handleAdd} disabled={todo.length <= 3} className='bg-slate-800 mx-2 rounded-full hover:bg-slate-400 p-4 py-2 text-sm font-bold text-white'>Save</button>
      </div>
    </div>
  );
};

export default TodoForm;
