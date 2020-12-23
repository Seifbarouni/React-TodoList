import { useState } from 'react';
import './App.css';
import Form from './Components/Form';
import TodoList from './Components/TodoList';

function App() {
  const [input,setInput] = useState("");
  const [todos,setTodos] = useState([]);
  return (
    <div className="App">
      <h1>Seif's Todo List</h1>
      <Form input={input} setInput={setInput} todos={todos} setTodos={setTodos}/>
      <br></br>
      <TodoList todos={todos} setTodos={setTodos}/>
    </div>
  );
}

export default App;
