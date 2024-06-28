import {useState ,useEffect}from 'react';
import Navbar from './components/Navbar'
import TodoForm from './components/TodoForm'
import TodoList from './components/TodoList';
import { v4 as uuidv4 } from 'uuid';

function App() {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);
  const [showFinished, setShowFinished] = useState(true);

  useEffect(() => {
    let todoString = localStorage.getItem("todos");
    if (todoString) {
      let todos = JSON.parse(todoString);
      setTodos(todos);
    }
  }, []);
  

  const saveToLS = () => {
    localStorage.setItem("todos", JSON.stringify(todos));
  };
  
  const handleChange = (e) => { 
    setTodo(e.target.value);
  };

  const toggleFinished = () => {
    setShowFinished(!showFinished);
  };

 

  const handleAdd = () => {
    setTodos([...todos, { id: uuidv4(), todo, isCompleted: false }]);
    setTodo(""); 
    saveToLS();
  };
  
  const handleEdit = (id) => { 
    let t = todos.find(i => i.id === id);
    setTodo(t.todo);
    let newTodos = todos.filter(item => item.id !== id); 
    setTodos(newTodos); 
    saveToLS();
  };

  const handleDelete = (id) => {  
    let newTodos = todos.filter(item => item.id !== id); 
    setTodos(newTodos); 
    saveToLS();
  };

 
  const handleCheckbox = (e) => { 
    let id = e.target.name;  
    let index = todos.findIndex(item => item.id === id);
    let newTodos = [...todos];
    newTodos[index].isCompleted = !newTodos[index].isCompleted;
    setTodos(newTodos);
    saveToLS();
  };

  return (
    <>
    
     <Navbar/>
     
        <TodoForm todo={todo} handleChange={handleChange} handleAdd={handleAdd} />
        <input className='my-4' id='show' onChange={toggleFinished} type="checkbox" checked={showFinished} /> 
        <label className='mx-2' htmlFor="show">Show Finished</label>
        <div className='h-[1px] bg-black opacity-15 w-[90%] mx-auto my-2'></div>
        <h2 className='text-2xl font-bold text-center'>Your Todos</h2>
        <TodoList todos={todos} handleCheckbox={handleCheckbox} handleEdit={handleEdit} handleDelete={handleDelete} showFinished={showFinished} />

    </>
  )
}

export default App
