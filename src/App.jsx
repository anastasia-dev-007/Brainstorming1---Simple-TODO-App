import { useState } from 'react';
import './App.css';

function App() {
  const defaultInputValue = {
    id: '',
    name: '',
  };

  const [inputValue, setInputValue] = useState(defaultInputValue);
  const [tasks, setTasks] = useState([]);  

  const handleOnInput = (event) => {
    const index = tasks.length + 1;
    setInputValue({
      id: index,
      name: event.target.value,
    });
  };

  const addTasks = () => {
    setTasks([...tasks, inputValue]);
    setInputValue(defaultInputValue);
  };

  const handleDelete = (item) => {
    const confirmDelete = window.confirm(`Are you sure you want to delete task: "${item.name}"?`);
    if (confirmDelete) {
    setTasks([...tasks.filter((task) => task.id !== item.id)]);
    }
  };

  return (
    <div className='mainContainer'>
      <h2 style={{color: 'white'}}>TO-DO APP</h2>
      <div className='inputContainer'>
        <input type="text"
          placeholder='Type here...'
          value={inputValue.name}
          onInput={handleOnInput} />
        <button
        className='addBtn'
          disabled={inputValue === ''}
          onClick={addTasks}>Add</button>
      </div>

      <div>
        <h3 style={{color: 'white'}}>List of tasks</h3>
        <br />
        <ul className='tasksContainer'>
          {tasks.length === 0 ? (
          <p>There are no tasks to do. Enjoy!</p>
          ):(
            tasks.map((task) => (
            <li className='listItem'
            key={task.id}>
              <span>{task.name}</span>
              <button 
              className='deleteBtn'
              onClick={() => handleDelete(task)}>Delete</button></li>
          )))}
        </ul>
      </div>
    </div>
  );
}

export default App;
