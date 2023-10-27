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
    <div>
      <div>
        <input type="text"
          placeholder='Type here...'
          value={inputValue.name}
          onInput={handleOnInput} />
        <button
          disabled={inputValue === ''}
          onClick={addTasks}>Add</button>
      </div>

      <div>
        <ul>
          {tasks.length === 0 ? (
          <p>There are no tasks to do. Enjoy!</p>
          ):(
            tasks.map((task) => (
            <li key={task.id}>
              <span>{task.name}</span>
              <button onClick={() => handleDelete(task)}>Delete</button></li>
          )))}
        </ul>
      </div>
    </div>
  );
}

export default App;
